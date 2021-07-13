import express, { Application } from 'express';
import path from 'path';
import { sequalize } from "./config/database";
import cashRegisterRouter from './routes/cash-register.rotes';
import cashierRouter from './routes/cashier.routes';
import shopRouter from './routes/shop.routes';








const envPath = `../${process.env.NODE_ENV}.env`
require('dotenv').config({ path: path.resolve(__dirname, envPath) });


const app: Application = express();
const PORT = process.env.PORT;


app.use(express.json())
app.use('/api/v1/cash-register', cashRegisterRouter)
app.use('/api/v1/shop', shopRouter)
app.use('/api/v1/cashier', cashierRouter)

const start = async () => {

    try {

        await sequalize.sync();
        app.listen(PORT, () => { console.log(`Server is running on ${PORT}`) })
    } catch (e) {

        console.log(e)
    }
}

start()
