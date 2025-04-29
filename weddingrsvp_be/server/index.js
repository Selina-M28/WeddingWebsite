require("dotenv").config;
const { client,createTables } = require('./db');
const express = require ('express');

const app = express();


const init = async()=> {
    console.log('connecting to database');
    await client.connect();
    console.log('connected to database');
    await createTables();
    console.log('created tables');
};
init();