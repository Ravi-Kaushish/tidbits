const express = require("express");
const router = express.Router();
const { GetFriends, GetFriendsOfFriends } = require("../controllers/friends");

//gets the list of friends for a user
router.get("/", GetFriends);

//gets the list of friends of friends for a user
router.get("/friends", GetFriendsOfFriends);

module.exports = router;