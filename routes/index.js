const express = require("express");
const router = express.Router();

const MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

router.get("/data", (req, res) => {
  console.log("Get data");
  myMongoLib
    .getDocs()
    .then(docs => {
      console.log("docs");
      res.send(docs);
    })
    .catch(err => res.send({ err: true, msg: err }));
});

router.get("/varieties", (req, res) => {
  console.log("Get varieties");
  myMongoLib
    .getVarieties()
    .then(docs => {
      console.log("docs");
      res.send(docs);
    })
    .catch(err => res.send({ err: true, msg: err }));
});
router.get("/orders", (req, res) => {
  console.log("Get orders");
  myMongoLib
    .getOrders(req.query.user || '')
    .then(docs => {
      console.log("docs");
      res.send(docs);
    })
    .catch(err => res.send({ err: true, msg: err }));
});

router.post("/order", (req, res) => {
  console.log("Order", req);
  myMongoLib.sendOrder(req, res);
});

module.exports = router;
