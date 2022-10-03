/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
interface CartItem{
    name:string;
    price:number;
    qty:number;
    description?:string;
    _id:any;
    __v:number;

}

export type Cart = CartItem[];