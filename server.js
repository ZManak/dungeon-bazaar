require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const path = require('path');
const cors = require('cors');

const itemRoutes = require('./routes/productsRoutes');

const app = express();
const port = 3000;
app.use(morgan('dev'));
app.use(cors());

app.use('/api', itemRoutes);

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})








