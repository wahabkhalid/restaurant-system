/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/user/user.service';
import { USER_REPOSITORY } from 'src/core/constants/constants';
import { usersProviders } from 'src/user/user.provider';



@Module({
    imports: [
    
        PassportModule,
        UserModule,
        
    ],
    providers: [
    
        
        
        AuthService,
        LocalStrategy,
        JwtStrategy,
    
    ],
    controllers: [AuthController]
})
export class AuthModule {}