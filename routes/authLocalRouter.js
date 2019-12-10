const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");

const User = require("../models/user-local-model");

require("dotenv").config();

const frontURL = process.env.FRONT_URL || "http://sopitas-app.herokuapp.com";

// Initiates basic sign in with local flow
router.get(
  "/local",
  passport.authenticate("local", {
    successRedirect: `${frontURL}`,
    failureRedirect: `${frontURL}/localLogin`,
    failureFlash: true
  })
);

router.get("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email
    })
      .save()
      .then(newUser => {
        console.log("New user created locally", newUser);
      });
  } catch (err) {
    res.redirect(`${frontURL}/register`);
  }
});

module.exports = router;
