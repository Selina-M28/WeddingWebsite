const { client } = require('./db');
const { v4: uuidv4 } = require("uuid")

const createGuest = async ({ name, email, address, rsvp_status, meal_preference, notes }) => {
    try {
        const SQL = `INSERT INTO guests(id,name,email,address,rsvp_status,meal_preference,notes,created_at )
        VALUES($1, $2, $3, $4, $5, $6,$7 NOW()) RETURNING*;`;
        const {rows} = await client.query(SQL, [uuidv4(),name,email,address,rsvp_status,meal_preference,notes]);
        return rows[0];
  } catch (err) {
    console.error("Error creating guest:", err);
    throw err;
  }
}

const fetchGuest = async (id) => {
    try {
        const SQL = `SELECT * FROM guests WHERE id = $1;`;
         const { rows } = await client.query(SQL, [id]);
         return rows [0];

    } catch (err) {
        console.error("Error fetching guest", err);
        throw err;
    }
}

const updateGuest = async (id, name, email, address, rsvp_status, meal_preference,notes) => {
    try {
        const SQL = `UPDATE guests 
        SET name = $1, 
        email = $2, 
        address = $3, 
        rsvp_status = $4, 
        meal_preference = $5,
         notes =$6 WHERE id = $7 RETURNING *;`;

         const { rows } = await client.query(SQL, [id, name, email, address, rsvp_status, meal_preference,notes]);
         return rows [0];

    } catch (err) {
        console.error("Error updating guest", err);
        throw err;
    }
}

const deleteGuest = async (id) => {
    try {
        const SQL = `DELETE FROM guests WHERE id = $1 *;`;

         const { rows } = await client.query(SQL, [id, name, email, address, rsvp_status, meal_preference,notes]);
         return rows [0];

    } catch (err) {
        console.error("Error updating guest", err);
        throw err;
    }
}
module.exports = {createGuest,fetchGuest,updateGuest,deleteGuest}