# ChatBotTestTask

Тестовое задание для ChatBots.Studio>

Технологии которые использовались для выполнения:
  TypeScript, Express, typescript-sequlize, sequlize, database: PostgreSQL

Результаты дополнительных методов:


  getTargetByShopsAndExpireance()

  возвращает всех касиров ATB в городе Львов, которые имеют больше 5 лет опыта и раньше работыли в Silpo или Arsen

  URL:  /api/v1/cashier/target?shop=SILPO,ARSEN&city=Lviv&expireance=5

  Executing (default): SELECT "id", "fullName", "age", "sex", "city", "yearsOfExperience", "shift", "worksDay", "previousWorkPlaces", "currentWorkPlace_shopID",  "fixedCashRegister", "createdAt", "updatedAt" FROM "cashier" AS "Cashier" WHERE "Cashier"."yearsOfExperience" > '5' AND "Cashier"."city" = 'Lviv' AND ("Cashier"."previousWorkPlaces" = 'SILPO' OR "Cashier"."previousWorkPlaces" = 'ARSEN')


  getTargetByTargetShopAndCashRegister()

  который возвращает всех кассиров магазина ATB по адресу Шевенко 100, которые работают на кассах с нечетным числом понедельникам в ночную смену (23:00 - 07:00)

  URL: /api/v1/shop/target/ATB?city=Dnipro&address=Шевенко100&workDay=MONDAY&shift=NIGHT&even_odd=ODD

  Executing (default): SELECT "Shop"."id", "Shop"."name", "Shop"."city", "Shop"."address", "Shop"."createdAt", "Shop"."updatedAt", "cash_registers"."id" AS "cash_registers.id", "cash_registers"."fixedShopID" AS "cash_registers.fixedShopID", "cash_registers"."even_odd" AS "cash_registers.even_odd", "cash_registers"."createdAt" AS "cash_registers.createdAt", "cash_registers"."updatedAt" AS "cash_registers.updatedAt", "cash_registers->fixedCashiers"."id" AS "cash_registers.fixedCashiers.id", "cash_registers->fixedCashiers"."fullName" AS "cash_registers.fixedCashiers.fullName", "cash_registers->fixedCashiers"."age" AS "cash_registers.fixedCashiers.age", "cash_registers->fixedCashiers"."sex" AS "cash_registers.fixedCashiers.sex", "cash_registers->fixedCashiers"."city" AS "cash_registers.fixedCashiers.city", "cash_registers->fixedCashiers"."yearsOfExperience" AS "cash_registers.fixedCashiers.yearsOfExperience", "cash_registers->fixedCashiers"."shift" AS "cash_registers.fixedCashiers.shift", "cash_registers->fixedCashiers"."worksDay" AS "cash_registers.fixedCashiers.worksDay", "cash_registers->fixedCashiers"."previousWorkPlaces" AS "cash_registers.fixedCashiers.previousWorkPlaces", "cash_registers->fixedCashiers"."currentWorkPlace_shopID" AS "cash_registers.fixedCashiers.currentWorkPlace_shopID", "cash_registers->fixedCashiers"."fixedCashRegister" AS "cash_registers.fixedCashiers.fixedCashRegister", "cash_registers->fixedCashiers"."createdAt" AS "cash_registers.fixedCashiers.createdAt", "cash_registers->fixedCashiers"."updatedAt" AS "cash_registers.fixedCashiers.updatedAt" FROM "shop" AS "Shop" INNER JOIN "cash-register" AS "cash_registers" ON "Shop"."id" = "cash_registers"."fixedShopID" AND "cash_registers"."even_odd" = 'ODD' INNER JOIN "cashier" AS "cash_registers->fixedCashiers" ON "cash_registers"."id" = "cash_registers->fixedCashiers"."fixedCashRegister" AND "cash_registers->fixedCashiers"."shift" = 'NIGHT' AND "cash_registers->fixedCashiers"."worksDay" = 'MONDAY' WHERE "Shop"."name" = 'ATB' AND "Shop"."city" = 'Dnipro' AND "Shop"."address" = 'Шевенко100';

