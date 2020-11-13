const express = require("express");
const router = express.Router();
const { GetUsers, GetUsersDetails, CreateNewUser, UpdateUserDetails } = require("../controllers/users");

router.get("/", GetUsers);
router.get("/:userid", GetUsersDetails);
router.post("/", CreateNewUser);
router.put("/:userid", UpdateUserDetails);

module.exports = router;