const pg = require('pg');
require("dotenv").config();

const client = new pg.Client();

const createTables= async(client) =>  {
    try { 
        
        await client.query(`
            CREATE TABLE guests (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100),
            address TEXT,
            rsvp_status VARCHAR(20) DEFAULT 'Pending',  -- 'Accepted', 'Declined', or 'Pending'
            meal_preference VARCHAR(50),                -- Optional: 'Chicken', 'Fish', 'Veg',
            notes TEXT,                                 -- Optional personal notes
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
        `);
    
        console.log("All tables created successfully! ");
    
      } catch (err) {
        console.error("Error creating tables:", err);
      }
    };

module.exports = {
  client, createTables
}; 