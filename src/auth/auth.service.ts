/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../user/user.service';

import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }

    async validateUser(email: string, pass: string) {
        // find if user exist with this email
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            return null;
        }

        // find if user password match
        const match = await this.comparePassword(pass, user.password);
        if (!match) {
            return null;
        }

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = user['dataValues'];
        return result;
    }
    public async login(user) {
        const userr = await this.validateUser(user.email,user.password)
        return { userr};
    }

    public async create(user) {
        // hash the password
        const pass = await this.hashPassword(user.password);

        // create the user
        console.log(user);
        console.log('user create function calling!!')
        const newUser = await this.userService.create({ ...user, password: pass });

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = newUser['dataValues'];

        // generate token
        const token = await this.generateToken(result);

        // return the user and the token
        return { user: result, token };
    }

    private async generateToken(user) {
        const token = await jwt.sign(user,process.env.SECRET || "FFGGKSWKJSJWSDIUU**&&^%MNSDJKH");
        return token;
    }

    private async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }


    private async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
}