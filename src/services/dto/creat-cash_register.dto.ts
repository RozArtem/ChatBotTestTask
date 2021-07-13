import { EvenOddProperty } from "../../types/cash-register/cash-register.iterface";

export interface CreatCashRegisterDTO {
    readonly fixedShopID: string
    readonly even_odd: EvenOddProperty
    
}