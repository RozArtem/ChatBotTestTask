import { ICashRegister } from "../cash-register/cash-register.iterface";
import { ShopClass } from "../shop/shop.iterface";

export interface ICashier {
    id: string
    fullName: string
    age: number
    sex: Sex
    city: string
    yearsOfExperience: number
    shift: ShiftTime
    worksDay: WorksDay[]
    currentWorkPlace_shopID: string
    fixedCashRegister: ICashRegister
    previousWorkPlaces: ShopClass | null

  
} 

export interface ICreateCashierAtrr {
    id: string
    fullName: string
    age: number
    sex: Sex
    city: string
    yearsOfExperience: number
    previousWorkPlaces: ShopClass | null
}

export enum Sex {
    MALE = 'MALE',
    FEMALE= 'FEMALE'
}

export enum ShiftTime {

    NIGHT = '23:00 - 07:00',
    DAY = '07:00 - 23:00'
}

export enum WorksDay  {

    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
    SUNDAY = 'SUNDAY'
    
}
