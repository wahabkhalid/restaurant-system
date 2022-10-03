/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
//import { pseudoRandomBytes } from 'crypto';
import { Cart } from './cart.model';
import { StripeService } from './stripe.service';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
//import { APP_FILTER } from '@nestjs/core';


@Controller('stripe')
@ApiBearerAuth()
@ApiTags('Stripe Payment')
export class StripeController {

    constructor(private stripeService:StripeService){}

    @Post()
    checkout( @Body() body:{cart:Cart}){
        try{
            return this.stripeService.checkout(body.cart);

        }
        catch(error){
            return error;

        }
    }

    @Post('confirmPayment')
    confrimPayment(@Body() body:{id:Cart}){
        try{
            return this.stripeService.confirmPayment(body.id);

        }
        catch(error){
            return error;
        }
    }
}
