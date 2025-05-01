const { client } = require('./db');
const uuid = require("uuid")

const createGuest = async () => {
    try {
        const SQL = `INSERT INTO guests(id,name,email,address,rsvp_status,meal_preference,notes,created_at )
        VALUES(uuid,$1, $2, $3, $4, $5, $6, NOW()) RETURNING*;`;
        const {rows} = await client.query(SQL, [uuid,name,email,address,rsvp_status,meal_preference,notes,created_at ]);
        return rows[0];
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
}

module.exports = {createGuest}