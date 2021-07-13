import { ICashier } from "../cashier/cashier.iterface";


export interface ICashRegister {
    id: string
    fixedCashiers: ICashier[]
    fixedShopID: string
    even_odd: EvenOddProperty
}

export interface ICreateCashRegisterrAtrr {
    id: string
}

export enum EvenOddProperty {
    EVEN = 'EVEN',
    ODD = 'ODD'
}