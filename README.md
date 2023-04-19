# Dungeon-Bazaar
A tribute to RPGs shops, now with more HP potions

![Header](https://raw.githubusercontent.com/ZManak/dungeon-bazaar/main/scrshoots/header.png)

You can visit the pre-release site @ https://dungeon-bazaar.onrender.com/  
Please note that currently it is WIP and some features may not work as expected.

## For local dev deployment
Start by cloning the repo and run the mandatory `npm install` for the backend and then `npm installclient` to install the frontend dependencies.

After that, you will need to populate an SQL database of your choice through Sequelize CLI, executing `npm seeds`. For Sequelize to work, you must provide your database configuration at `config.js` in root directory, like this: 
```
require('dotenv').config();
module.exports =
{
  development: {
    username: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "postgres"
  },
}
```
Fill `.env` with the required info. 
This fill fill your DB with 25 randomly generated items asociated to a second table of randomly generated manufacturers, so each item belongs to a maker.

------------
### Running local
You are set to go. You can either `npm run dev` to concurrently run server and client, or do it in separate instances. Happy dungeon crawling!

# To Do's
- [x] Database & fetch, React front
- [ ] Finish sorting and search by fields
- [ ] Add a shopping cart.
- [ ] Fix random generated icons - either client side or by designation at the Database.
- [ ] Actually set an inventory of coherent items (no silly faker names). Working on fetching 1st quality gear from Dungeons & Dragons API.
- [ ] My goal: integrate within a RPG combat system where you can finally put gear to work. Earn gold. Buy more. Slay stronger foes!

