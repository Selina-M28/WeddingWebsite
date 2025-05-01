const express = require("express");
const router = express.Router();
const app = express ();
const {createGuest,fetchGuest,updateGuest,deleteGuest} = require("./controllers")

app.use(express.json());


app.post("/register", async (req, res, next) => {
    try {
      const guest = await createGuest(req.body);
      res.send(guest)
    } catch (ex) {
      next(ex);
    }
  });

  module.exports = router; 
