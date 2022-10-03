/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';


import Stripe from 'stripe';
import { Cart } from './cart.model';

@Injectable()
export class StripeService {
    private stripe;
    constructor(){
        
        this.stripe = new Stripe("sk_test_51LnGwjIboERyAhyAuOIofPL9BuQCarRuZ6VEhSn2rwbzWL0LrMkDGOoFJEVZK10I2u4EYTV9NmvdhI1a9L8WciXL00ya6BjBVL",{
            apiVersion:'2022-08-01'
        })
    }

    checkout(cart:Cart){
        const totalprice= cart.reduce((acc,item)=> acc + item.qty*item.price,0);

        return this.stripe.paymentIntents.create({
            amount: totalprice,
            currency:'usd',
            payment_method_types:['card'],
        });

    }

    confirmPayment(cart:Cart){
    this.stripe = require('stripe')('sk_test_51LnGwjIboERyAhyAuOIofPL9BuQCarRuZ6VEhSn2rwbzWL0LrMkDGOoFJEVZK10I2u4EYTV9NmvdhI1a9L8WciXL00ya6BjBVL');

// To create a PaymentIntent for confirmation, see our guide at: https://stripe.com/docs/payments/payment-intents/creating-payment-intents#creating-for-automatic
const paymentIntent =  this.stripe.paymentIntents.confirm(
  `${cart}`,
  {payment_method: 'pm_card_visa'}
);
    }

    
}
