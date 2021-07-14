import { ShopController } from '../controllers/shop.controller';
import { Router } from 'express';


const router = Router()
const shopController = new ShopController()


router.get('/',  shopController.getAll);
router.post('/', shopController.create)
// /api/v1/shop/target/:shop?city=''&address=''&workDay=''&shift=''&even_odd=''
router.get('/target/:shop', shopController.getTargetByTargetShop)
router.put('/:id', shopController.update);
router.get('/:id', shopController.getOne)
router.delete('/:id', shopController.delete);


export default router