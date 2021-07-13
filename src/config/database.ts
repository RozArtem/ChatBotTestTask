
import { Cashier } from '../models/cashier.model';
import { Shop } from '../models/shop.model';
import { Sequelize } from 'sequelize-typescript'
import { CashRegister } from '../models/cash-register.model';


export const  sequalize = new Sequelize({
  dialect: "postgres",
  repositoryMode: true,
  logging: console.log,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  models: [ Shop, Cashier,  CashRegister]
});


