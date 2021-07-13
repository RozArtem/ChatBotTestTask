import { Column, DataType, ForeignKey, Model, Table , BelongsTo } from "sequelize-typescript";
import { ICashier, Sex, ShiftTime, WorksDay , ICreateCashierAtrr} from "../types/cashier/cashier.iterface";
import { CashRegister } from "./cash-register.model";
import { ShopClass } from "../types/shop/shop.iterface";
import { Shop } from "./shop.model";



@Table({ tableName: 'cashier' })
export class Cashier extends Model<ICashier, ICreateCashierAtrr> {


    @Column({ type: DataType.UUID, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.STRING, allowNull: false })
    fullName: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    age: number;

    @Column({ type: DataType.ENUM({ values: Object.keys(Sex) }) })
    sex: Sex;

    @Column({ type: DataType.INTEGER })
    yearsOfExperience: number

    @Column({type: DataType.ENUM({ values: Object.keys(ShiftTime) })})
    shift: ShiftTime

    @Column({type: DataType.ENUM({ values: Object.keys(WorksDay) })})
    worksDay: WorksDay[]

    @Column({type: DataType.ENUM({values: Object.keys(ShopClass)})})
    previousWorkPlaces: ShopClass[]

    @ForeignKey(() => Shop)
    @Column({ type: DataType.UUID })
    currentWorkPlace_shopID: string

    @ForeignKey(() => CashRegister)
    @Column({ type: DataType.UUID })
    fixedCashRegister: string

}
