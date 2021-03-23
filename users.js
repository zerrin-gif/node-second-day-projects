const express =require('express');
const uuid = require('uuid');
const users = require('../../UsersData');
const router=express.Router();

router.get("/", (req, res) => { res.json(users);});
router.get("/:id", (req, res) => { res.json(users.filter((user) => user.id === parseInt(req.params.id))
  );});

  // const newUser = {
  //       id: uuid.v4(),
  //       name: req.body.name,
  //       email: req.body.email,
  //     };
    
    router.post('/', (req, res) => {
      const newUser = {
        id: uuid.v4(),
            name: req.body.name,
            email: req.body.email,
      }
      users.push(newUser)
      res.status(201).json(newUser)
     })
  
    //  router.post("/", (req, res) => { res.json(newUser);});

module.exports = router;