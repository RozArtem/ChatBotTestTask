import { EvenOddProperty } from "../../types/cash-register/cash-register.iterface";
import { ICashier } from "../../types/cashier/cashier.iterface";

export interface UpdateCashRegisterDTO {
    
    readonly fixedCashiers: ICashier[]
    readonly fixedShopID: string
    readonly even_odd: EvenOddProperty
}