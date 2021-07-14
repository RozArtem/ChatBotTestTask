
import { Response, Request, NextFunction } from 'express';
import { CreatCashRegisterDTO } from '../services/dto/creat-cash_register.dto';
import { UpdateCashRegisterDTO } from '../services/dto/update-cash_register.dto';
import { CashRegisterService } from '../services/cash-register.service';
import { ICashRegisterIDfromParams } from '../types/req_types/param_id.iterfaces';
import { IQueryOffsetCount } from '../types/req_types/query_pagination.iterface';




export class CashRegisterController {

    private cashRegisterService: CashRegisterService


    constructor() {

        this.cashRegisterService = new CashRegisterService()
    }
    create = async (req: Request, res: Response, next: NextFunction) => {

        try {

            const cashRegisterFromReq: CreatCashRegisterDTO = req.body
            const cashRegister = await this.cashRegisterService.creatCashRegister(cashRegisterFromReq)

            res.status(201)
            res.send(cashRegister)

        } catch (error) {
            res.send({ message: error.message })
            next(error)
        }

    }

    getAll = async (req: Request & IQueryOffsetCount, res: Response, next: NextFunction) => {

        try {
            const {offset, count} = req.query
            const cashRegisters = await this.cashRegisterService.getCashRegisters(
                count,
                offset
            )


            res.status(200)
            res.send(cashRegisters)

        } catch (error) {
            res.send({ message: error.message })
            next(error)
        }

    }
    getOne = async (req: Request & ICashRegisterIDfromParams, res: Response, next: NextFunction) => {

        try {

            const { cashRegisterID } = req.params
            const shop = await this.cashRegisterService.deleteCashRegisterByID(cashRegisterID)

            res.status(200)
            res.send(shop)

        } catch (error) {

            res.send({ message: error.message })
            next(error)
        }


    }
    update = async (req: Request & ICashRegisterIDfromParams, res: Response, next: NextFunction) => {

        try {

            const { cashRegisterID } = req.params
            const cashRegister: UpdateCashRegisterDTO = req.body

            const updatedCashier = await this.cashRegisterService.updateCashRegisterInfo(
                cashRegister,
                cashRegisterID
            )
            res.status(200)
            res.send(updatedCashier)

        } catch (error) {

            res.send({ message: error.message })
            next(error)
        }

    }
    delete = async (req: Request & ICashRegisterIDfromParams, res: Response, next: NextFunction) => {

        const { cashRegisterID } = req.params

        const deletedCashRegisterID = await this.cashRegisterService.
                                            deleteCashRegisterByID(cashRegisterID)

        res.send(deletedCashRegisterID)
    }


}