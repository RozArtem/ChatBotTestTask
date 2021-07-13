import { ShopClass } from "../../types/shop/shop.iterface";
import { Sex } from "../../types/cashier/cashier.iterface";


export interface CreatCashierDTO {
    
    readonly fullName: string;
    readonly age: number;
    readonly sex: Sex;
    readonly city: string
    readonly yearsOfExperience: number;
    readonly previousWorkPlaces: ShopClass | null

   

}