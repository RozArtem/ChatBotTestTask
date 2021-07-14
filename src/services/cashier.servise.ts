import { Repository } from "sequelize-typescript";
import { v4 as uuidv4 } from 'uuid';
import { sequalize } from "../config/database";
import { Cashier } from "../models/cashier.model";
import { CreatCashierDTO } from "./dto/creat-casier.dto";
import { updateCashierDTO } from "./dto/update-cashier.dto";
import { Op } from "sequelize";
import { ShopClass } from "../types/shop/shop.iterface";




export class CashierService {


    private cashierRepository: Repository<Cashier>;

    constructor() {

        this.cashierRepository = sequalize.getRepository(Cashier)

    }


    async creatCashier(dto: CreatCashierDTO): Promise<Cashier> {

        try {

            const cashierID = uuidv4()
            const cashier = await this.cashierRepository.create({
                ...dto,
                id: cashierID
            })

            return cashier;


        } catch (error) {
            return error.message
        }

    }

    async getAllCashier(count: number = 10, offset: number = 0): Promise<Cashier[]> {

        try {

            const casiers = await this.cashierRepository.findAll({

                offset: (Number(offset)),
                limit: (Number(count)),
                order: [
                    ['fullName', 'ASC'],
                ]
            })

            return casiers

        } catch (error) {
            return error.message
        }
    }


    async getCashierByID(casierID: string): Promise<Cashier> {


        try {


            const cashier = await this.cashierRepository.findOne({
                where: {
                    id: casierID
                }
            })

            if (!cashier) {

                throw new Error('Cashier does not exist')
            }

            return cashier

        } catch (error) {


            return error.message

        }
    }


    async updateCahsierInfo(cashier: updateCashierDTO, cashierID: string): Promise<any> {

        try {

            const cashierInstance = await this.getCashierByID(cashierID)


            if (!cashierInstance) {

                throw new Error('Cashier doesnt exist')
            }

            const updatedCashier = await this.cashierRepository.update(

                { ...cashier },
                {
                    where: { id: cashierID }
                }
            )


            return updatedCashier


        } catch (error) {
            return error
        }
    }


    async deleteCahsierByID(cashierID: string): Promise<string> {

        try {

            const cashierInstance = await this.getCashierByID(cashierID)


            if (!cashierInstance) {

                throw new Error('Cashier doesnt exist')
            }

            await this.cashierRepository.destroy()

            return cashierInstance.id


        } catch (error) {
            return error.message
        }
    }



    async getTargetByShopsAndExpireance(
        shop: ShopClass, expireance: string, city: string,
        count: number = 10 , offset: number = 10
    ): Promise<Cashier[]> {

        try {

            const shopForOr = shop.split(',')
            console.log(shopForOr)

            const targetCashiers = await this.cashierRepository.findAll({

                where: {
                    yearsOfExperience: {
                        [Op.gt]: expireance
                    },
                    city,
                    previousWorkPlaces: {
                        [Op.or]: shopForOr
                    }
                },
                offset: (Number(offset)),
                limit: (Number(count)),
                order: [
                    ['fullName', 'ASC'],
                ]

            })

            return targetCashiers

        } catch (error) {

            return error.message
        }

    }




}
