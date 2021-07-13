import { ICashRegister } from "../cash-register/cash-register.iterface";
import { ICashier } from "../cashier/cashier.iterface";

export interface IShop {

    id: string
    name: ShopClass
    city: string
    address: string
    cashiers: ICashier[]
    cash_registers: ICashRegister[]

}

export interface IShopCreateAtrr {
    id: string
    name: ShopClass
    city: string
    address: string
}

export enum ShopClass {
    
    ATB = 'ATB',
    SILPO = 'SILPO',
    ARSEN = 'ARSEN'
}