require("dotenv").config;
const { client,createTables } = require('./db');
const express = require ('express');
const routes = require("./routes");

const app = express();

const PORT = process.env.PGPORT  ;

app.use(express.json());
app.use('/', routes);


const init = async()=> {
    console.log('connecting to database');
    await client.connect();
    console.log('connected to database');
    await createTables();
    console.log('created tables');
   
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
      
};
init();