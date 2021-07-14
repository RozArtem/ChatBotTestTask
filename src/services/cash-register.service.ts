
import { Repository } from "sequelize-typescript";
import { v4 as uuidv4 } from 'uuid';
import { sequalize } from "../config/database";
import { CashRegister } from "../models/cash-register.model";
import { CreatCashRegisterDTO } from "./dto/creat-cash_register.dto";
import { UpdateCashRegisterDTO } from './dto/update-cash_register.dto';






export class CashRegisterService {


    private cashRegisterRepository: Repository<CashRegister>;

    constructor() {

        this.cashRegisterRepository = sequalize.getRepository(CashRegister)

    }


    async creatCashRegister(dto: CreatCashRegisterDTO): Promise<CashRegister> {

        try {
            const cashRegisterID = uuidv4()
            const cashRegister = await this.cashRegisterRepository.create({ ...dto, id: cashRegisterID })

            return cashRegister;


        } catch (error) {
            return error.message
        }

    }

    async getCashRegisters(count: number = 10, offset: number = 0): Promise<CashRegister[]> {

        try {

            const cashRegisters = await this.cashRegisterRepository.findAll({

                offset: (Number(offset)),
                limit: (Number(count)),
                order: [
                    ['even_odd', 'ASC'],
                ]
            })

            return cashRegisters

        } catch (error) {
            return error.message
        }
    }


    async getCashRegisterByID(cashRegisterID: string): Promise<CashRegister> {


        try {


            const cashRegister = await this.cashRegisterRepository.findOne({
                where: {
                    id: cashRegisterID
                }
            })

            if (!cashRegister) {

                throw new Error('Cash register does not exist')
            }

            return cashRegister

        } catch (error) {


            return error.message

        }
    }


    async updateCashRegisterInfo(cashRegister: UpdateCashRegisterDTO, cashRegisterID: string): Promise<any> {

        try {

            const cashRegisterInstance = await this.getCashRegisterByID(cashRegisterID)


            if (!cashRegisterInstance) {

                throw new Error('Cash register doesnt exist')
            }

            const updatedCashRegister = await this.cashRegisterRepository.update(
                { ...cashRegister },
                {
                    where: { id: cashRegisterID }
                })

            return updatedCashRegister

        } catch (error) {
            return error
        }
    }


    async deleteCashRegisterByID(cashRegisterID: string): Promise<string> {

        try {

            const cashRegisterInstance = await this.getCashRegisterByID(cashRegisterID)


            if (!cashRegisterInstance) {

                throw new Error('Shop doesnt exist')
            }

            await this.cashRegisterRepository.destroy()

            return cashRegisterInstance.id


        } catch (error) {
            return error.message
        }
    }

}
