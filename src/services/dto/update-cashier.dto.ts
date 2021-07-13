import { ShopClass } from "../../types/shop/shop.iterface";
import { Sex, ShiftTime, WorksDay } from "../../types/cashier/cashier.iterface";


export interface updateCashierDTO {

    readonly fullName: string;
    readonly age: number;
    readonly sex: Sex;
    readonly city: string
    readonly yearsOfExperience: number;
    readonly shift: ShiftTime
    readonly worksDay: WorksDay[]
    readonly currentWorkPlace_shopID: string
    readonly previousWorkPlaces: ShopClass | null

  
   
  
    
  
}