import { CashierController } from '../controllers/cashier.controller';
import { Router } from 'express';


const router = Router()
const cashierController = new CashierController()


router.get('/',  cashierController.getAll);
router.post('/', cashierController.create)
//api/v1/cashier/target?shop={ , }&city={}&expireance={}
router.get('/target', cashierController.getTarget)
router.get('/:id', cashierController.getOne)
router.put('/:id', cashierController.update);
router.delete('/:id', cashierController.delete);


export default router