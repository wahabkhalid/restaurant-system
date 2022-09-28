/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable,Inject,CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager:Cache){}
  /* getHello(): string {
    return 'Hello World From The Restaurant Management!';
  }*/

  async getHello(){
    await this.cacheManager.set('cached_item',{key:32},{ttl:10});
    await this.cacheManager.set('name','\nWahab Khalid');
    //await this.cacheManager.del('cached_item');
    //await this.cacheManager.reset();
    const cachedItem = await this.cacheManager.get('cached_item');
    const n = await this.cacheManager.get('name');
    console.log(cachedItem,n);
    return 'Hello world from restaurant management!';
  }
}
