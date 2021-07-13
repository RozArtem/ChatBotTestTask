
import { CreatCashierDTO } from '../services/dto/creat-casier.dto';
import { CashierService } from '../services/cashier.servise';
import { Response, Request, NextFunction } from 'express';
import { updateCashierDTO } from '../services/dto/update-cashier.dto';
import { IParamCashierID } from '../types/req_types/param_id.iterfaces';
import { IReqQueryTargetShopandExpireance } from '../types/req_types/target_.iterfaces';





export class CashierController {

    private cashierService: CashierService


    constructor() {

        this.cashierService = new CashierService()

    }
    create = async (req: Request, res: Response, next: NextFunction) => {

        try {

            const cashierFromReq: CreatCashierDTO = req.body
            const cashier = await this.cashierService.creatCashier(cashierFromReq)

            res.status(201)
            res.send(cashier)

        } catch (error) {

            res.send({ message: error.message })
            next(error)
        }

    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {

        try {
            const cashiers = await this.cashierService.getAllCashier()

            res.status(200)
            res.send(cashiers)

        } catch (error) {
            res.send({ message: error.message })
            next(error)
        }

    }
    getOne = async (req: Request & IParamCashierID, res: Response, next: NextFunction) => {

        try {

            const { cashierID } = req.params
            const cashier = await this.cashierService.getCashierByID(cashierID)

            res.status(200)
            res.send(cashier)

        } catch (error) {
            res.send({ message: error.message })
            next(error)
        }


    }
    update = async (req: Request & IParamCashierID, res: Response, next: NextFunction) => {

        try {

            const { cashierID } = req.params
            const cashier = req.body as updateCashierDTO

            const updatedCashier = await this.cashierService.updateCahsierInfo(
                cashier,
                cashierID
            )
            res.status(200)
            res.send(updatedCashier)

        } catch (error) {
            res.send({ message: error.message })
            next(error)
        }

    }
    delete = async (req: Request & IParamCashierID, res: Response, next: NextFunction) => {
        try {

            const { cashierID } = req.params
            const deleteCahsierID = await this.cashierService.deleteCahsierByID(cashierID)

            res.status(200)
            res.send(deleteCahsierID)

        } catch (error) {
            res.send({ message: error.message })
            next(error)
        }

    }

    //@GET /api/v1/cashier/target?shop={ , }&city={}&expireance={}
    getTarget = async (req: Request & IReqQueryTargetShopandExpireance, res: Response, next: NextFunction) => {

        try {

            const { shop, expireance, city } = req.query
            const cashiers = await this.cashierService.getTargetByShopsAndExpireance(
                shop, expireance, city
            )

            res.status(200)
            res.send(cashiers)

        } catch (error) {

            res.send({ message: error.message })
            next(error)
        }

    }

}