require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const path = require('path');

const itemRoutes = require('./routes/productsRoutes');

const app = express();
const port = 3000;
app.use(morgan('dev'));

app.use('/', itemRoutes);

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})








