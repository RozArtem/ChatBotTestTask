import express, { Application } from 'express';
import path from 'path';









const envPath = `../${process.env.NODE_ENV}.env`
require('dotenv').config({ path: path.resolve(__dirname, envPath) });


const app: Application = express();
const PORT = process.env.PORT;

const start = async () => {

    try {

      
        app.listen(PORT, () => { console.log(`Server is running on ${PORT}`) })
    } catch (e) {

        console.log(e)
    }
}

start()
