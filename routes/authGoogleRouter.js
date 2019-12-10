const express = require("express");
const router = express.Router();
const passport = require("passport");

require("dotenv").config();

const frontURL = "http://sopitas-app.herokuapp.com";

// Initiates basic Sign in with Google flow
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// Completes the OAuth flow
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect(`${frontURL}`);
});

// Handle removing the user from the session
router.post("/logout", (req, res) => {
  req.logout();
  res.redirect(`${frontURL}/`);
});

router.get("/getUser", (req, res) => res.json(req.user || null));

module.exports = router;
