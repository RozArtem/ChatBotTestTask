import { CashierController } from '../controllers/cashier.controller';
import { Router } from 'express';
import { CashRegisterController } from '../controllers/cash-register.controller';


const router = Router()
const cashRegisterController = new CashRegisterController()


router.get('/',  cashRegisterController.getAll);
router.post('/', cashRegisterController.create)
router.get('/:id', cashRegisterController.getOne)
router.put('/:id', cashRegisterController.update);
router.delete('/:id', cashRegisterController.delete);


export default router