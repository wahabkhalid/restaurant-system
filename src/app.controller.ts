/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get,Inject,CACHE_MANAGER,UseInterceptors, CacheInterceptor,CacheKey,CacheTTL } from '@nestjs/common';
import { DATE } from 'sequelize';
import { AppService } from './app.service';
import { UserProfileDto } from './user_profile/user_profile.dto';
import { UserProfile } from './user_profile/user_profile.model';
@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  fakeModel:UserProfileDto={
  name : 'Aslam Bhai',
  address:'Mumbai Maharashtra India',
  contact:'0293028',
  user_type:"owner"
  
 }
 @Get('auto-caching')
   @CacheKey('cache-data')
   @CacheTTL(5)
   getAutoCaching(){
  return this.fakeModel;
 }
 /* @Get()
  getHello(): string {
    return this.appService.getHello();
  }*/

  @Get()
  getHello(){
    return this.appService.getHello();
  }

}
