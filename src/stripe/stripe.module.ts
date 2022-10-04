/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

@Module({

    controllers: [StripeController],
    providers: [StripeService],
    exports: [StripeService]
    
})
export class StripeModule {}
// where have you been so far its been so long that i have not seen your face please take some free time