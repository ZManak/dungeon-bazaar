require('dotenv').config();
const express = require('express');
const path = require('path');
const { db } = require('./pool/db');
const {createItem, equip} = require('./seeders/item_seed')











