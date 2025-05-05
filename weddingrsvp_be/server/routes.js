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

  app.get("/guests", async (req, res, next) => {
    try {
      res.send(await fetchGuest());
    } catch (ex) {
      next(ex);
    }
  });

  app.get("/guests/:id", async (req, res, next) => {
    try {
      res.send(await fetchGuest(id));
    } catch (ex) {
      next(ex);
    }
  });

  app.put("/guests/:id", async (req, res, next) => {
    try {
      res.send(await fetchGuest(id));
    } catch (ex) {
      next(ex);
    }
  });

  app.delete('/guest/:id', async(req, res, next)=> {
    try {
      await deleteUserSkill({ user_id: req.params.userId, id: req.params.id });
      res.sendStatus(204);
    }
    catch(ex){
      next(ex);
    }
  });

  module.exports = router; 
