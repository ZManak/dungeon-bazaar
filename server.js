const express = require('express');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/db');
connectDB();