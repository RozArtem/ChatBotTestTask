
import { ICashRegister } from "../../types/cash-register/cash-register.iterface";
import { ICashier } from "../../types/cashier/cashier.iterface";
import { ShopClass } from "../../types/shop/shop.iterface";

export interface updateShopDTO  {

   
    readonly name: ShopClass
    readonly adress: string
    readonly cashiers: ICashier[]
    readonly cash_registers: ICashRegister[]
}