
import { ShopService } from '../services/shop.service';
import { Response, Request, NextFunction } from 'express';
import { CreatShopDTO } from '../services/dto/creat-shop.dto';
import { updateShopDTO } from '../services/dto/update-shop.dto';
import { IParamShopID } from '../types/req_types/param_id.iterfaces';
import { IReqQueryParamsTargetShopAndCashRegister } from '../types/req_types/target_.iterfaces';




export class ShopController {

    private shopService: ShopService


    constructor() {

        this.shopService = new ShopService()
    }
    create = async (req: Request, res: Response, next: NextFunction) => {

        try {

            const shopFromReq: CreatShopDTO = req.body
            const shop = await this.shopService.creatShop(shopFromReq)
    
            res.status(201)
            res.send(shop)
            
        } catch (error) {
            
            res.send({ message: error.message })
            next(error)
        }
       
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {

        try {

            const shops = await this.shopService.getAllShops()

            res.status(200)
            res.send(shops)

        } catch (error) {

            res.send({ message: error.message })
            next(error)
        }
       
    }
    getOne = async (req: Request & IParamShopID, res: Response, next: NextFunction) => {

        try {

            const { shopID } = req.params
            const shop = await this.shopService.getShopByID(shopID)

            res.status(200)
            res.send(shop)

        } catch (error) {

            res.send({ message: error.message })
            next(error)
        }
       

    }
    update = async (req: Request & IParamShopID, res: Response, next: NextFunction) => {
       
        try {

            const { shopID } = req.params
            const shop: updateShopDTO = req.body
    
            const updatedCashier = await this.shopService.updateShopInfo(
                shop,
                shopID
            )

            res.status(200)
            res.send(updatedCashier)

        } catch (error) {

            res.send({ message: error.message })
            next(error)
        }
       
    }
    delete = async (req: Request & IParamShopID, res: Response, next: NextFunction) => {

        try {

            const { shopID } = req.params

            const deletedShopID = await this.shopService.deleteShopByID(shopID)

            res.status(200)
            res.send(deletedShopID)

        } catch (error) {
            res.send({ message: error.message })
            next(error)
        }

    }

    getTargetByTargetShop = async (
        req: Request & IReqQueryParamsTargetShopAndCashRegister,
        res: Response, next: NextFunction) => {

        try {

            const {
                even_odd,
                address,
                shift,
                workDay,
                city
            } = req.query
            const { shop } = req.params

            const cashiers = await this.shopService.getTargetByTargetShopAndCashRegister(
                shop,
                even_odd,
                address,
                shift,
                workDay,
                city
            )

            res.status(200)
            res.send(cashiers)

        } catch (error) {
            res.send({ message: error.message })
            next(error)
        }
    }


}