import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { IShop, IShopCreateAtrr, ShopClass } from "../types/shop/shop.iterface";
import { CashRegister } from "./cash-register.model";
import { Cashier } from "./cashier.model";



@Table({ tableName: 'shop' })
export class Shop extends Model<IShop, IShopCreateAtrr> {

 
    @Column({ type: DataType.UUID, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.ENUM({ values: Object.keys(ShopClass) }), allowNull: false })
    name: ShopClass

    @Column({ type: DataType.STRING, allowNull: false })
    address: string

    @HasMany(() => Cashier)
    cashiers: Cashier[]

    @HasMany(() => CashRegister)
    cash_registers: CashRegister[]
 


}