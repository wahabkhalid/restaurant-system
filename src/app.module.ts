/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module ,CacheInterceptor,CacheModule} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { UserProfile } from './user_profile/user_profile.model';
import { UserProfileModule } from './user_profile/user_profile.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { Restaurant } from './restaurant/restaurant.model';
import { MenuModule } from './menu/menu.module';
import { Menu } from './menu/menu.model';
import { OrderModule } from './order/order.module';
import { Order } from './order/order.model';
import { AuthModule } from './auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as redisStore from 'cache-manager-redis-store';


@Module({
  imports: [

    CacheModule.register({
      store:redisStore,
      socket:{
        host:'localhost',
        port:6379,
      },
    }),


    SequelizeModule.forRoot({
      dialect:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'character420',
      database:'res2rant',
      models:[User,UserProfile,Restaurant,Menu,Order],
      autoLoadModels:true
    }),AuthModule,UserModule, UserProfileModule, RestaurantModule, MenuModule, OrderModule

  ],
  controllers: [AppController],
  providers:[ {
    provide:APP_INTERCEPTOR,
    useClass:CacheInterceptor
  },
  AppService],
})
export class AppModule {}
