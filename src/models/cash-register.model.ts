import { Table, Model, Column, DataType, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { EvenOddProperty, ICashRegister, ICreateCashRegisterrAtrr } from "../types/cash-register/cash-register.iterface";
import { Cashier } from "./cashier.model";
import { Shop } from "./shop.model";



@Table({ tableName: 'cash-register' })
export class CashRegister extends Model<ICashRegister, ICreateCashRegisterrAtrr> {


    @Column({ type: DataType.UUID, unique: true, primaryKey: true })
    id: string;

    @HasMany(() => Cashier)
    fixedCashiers: Cashier[]


    @ForeignKey(() => Shop)
    @Column({ type: DataType.UUID })
    fixedShopID: string


    @Column({ type: DataType.ENUM({values : Object.keys(EvenOddProperty)}) })
    even_odd: EvenOddProperty
    
}

