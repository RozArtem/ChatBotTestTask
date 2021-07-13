import { EvenOddProperty } from "../cash-register/cash-register.iterface";
import { ShopClass } from "../shop/shop.iterface";
import { ShiftTime, WorksDay } from "../cashier/cashier.iterface";

export interface IReqQueryTargetShopandExpireance {

    query: {
        shop: ShopClass
        city: string
        expireance: string
    }

}


export interface IReqQueryParamsTargetShopAndCashRegister {
    params: {
        shop: ShopClass
    },
    query: {
        even_odd: EvenOddProperty
        city: string
        address: string
        shift: ShiftTime
        workDay:  WorksDay
    }
}
