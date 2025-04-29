const pg = require('pg');
require("dotenv").config();

const client = new pg.Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

const createTables = async() =>  {
    try { 
      await client.query(`DROP TABLE IF EXISTS guests;`);
        await client.query(`
            CREATE TABLE guests (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100),
            address TEXT,
            rsvp_status VARCHAR(20) DEFAULT 'Pending',  
            meal_preference VARCHAR(50),               
            notes TEXT,                           
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
        `);
    
        console.log("All tables created successfully! ");
    
      } catch (err) {
        console.error("Error creating tables:", err);
      }
    };

module.exports = {
  client, createTables
}; 