
import { Repository } from "sequelize-typescript";
import { EvenOddProperty } from "types/cash-register/cash-register.iterface";
import { ShiftTime, WorksDay } from "types/cashier/cashier.iterface";
import { ShopClass } from "types/shop/shop.iterface";
import { v4 as uuidv4 } from 'uuid';
import { sequalize } from "../config/database";
import { Shop } from "../models/shop.model";
import { CreatShopDTO } from "./dto/creat-shop.dto";
import { updateShopDTO } from "./dto/update-shop.dto";




export class ShopService {


    private shopRepository: Repository<Shop>;

    constructor() {

        this.shopRepository = sequalize.getRepository(Shop)

    }


    async creatShop(dto: CreatShopDTO): Promise<Shop> {

        try {

            const shopID = uuidv4()
            const shop = await this.shopRepository.create({
                ...dto,
                id: shopID
            })

            return shop;


        } catch (error) {
            return error.message
        }

    }

    async getAllShops(count = 10, offset = 0): Promise<Shop[]> {

        try {

            const shops = await this.shopRepository.findAll({

                offset: (Number(offset)),
                limit: (Number(count)),
            })

            return shops

        } catch (error) {
            return error.message
        }
    }


    async getShopByID(shopID: string): Promise<Shop> {


        try {


            const shop = await this.shopRepository.findOne({
                where: {
                    id: shopID
                }
            })

            if (!shop) {

                throw new Error('Shop does not exist')
            }

            return shop

        } catch (error) {


            return error.message

        }
    }


    async updateShopInfo(shop: updateShopDTO, shopID: string): Promise<any> {

        try {

            const shopInstance = await this.getShopByID(shopID)


            if (!shopInstance) {

                throw new Error('Shop doesnt exist')
            }

            const updatedShop = await this.shopRepository.update(

                { ...shop },
                {
                    where: { id: shopID }
                }
            )


            return updatedShop


        } catch (error) {
            return error
        }
    }


    async deleteShopByID(shopID: string): Promise<string> {

        try {

            const shopInstance = await this.getShopByID(shopID)


            if (!shopInstance) {

                throw new Error('Shop doesnt exist')
            }

            await this.shopRepository.destroy()

            return shopInstance.id


        } catch (error) {
            return error.message
        }
    }

    async getTargetByTargetShopAndCashRegister(
        shop: ShopClass,
        even_odd: EvenOddProperty,
        address: string,
        shift: ShiftTime,
        workDay:  WorksDay
        ): Promise<Shop[]> {

        try {



            const targetCashiers = await this.shopRepository.findAll({
                where :{
                    name: shop,
                    address
                },
                include: [{
                    model: sequalize.models.CashRegister,
                    where: {
                        even_odd
                    },
                    include: [{
                        model: sequalize.models.Cashier,
                        where: {
                            shift,
                            worksDay: workDay
                        }
                    }]
                }]
            })

            return targetCashiers

        } catch (error) {

            return error.message
        }

    }


  
}
