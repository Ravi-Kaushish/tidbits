const { ExecuteQuery } = require("../common/helpers/sequelize");
const { GetFriendsQuery, GetFriendsOfFriendsQuery } = require("../common/queries/friends");

//Get user with pagination
exports.GetFriends = async (req, res) => {
  try {
    //Hardcoding for demo purposes, otherwise it must be extracted from cookies or bearer token
    user_id = 1;
    //Hardcoding for demo purposes, otherwise it must be extracted from cookies or bearer token
    [friends, metadata] = await ExecuteQuery(await GetFriendsQuery(user_id));
    res.send(friends);
  }
  catch (error) {
    //based on the errors, specific error message can be givven to the user
    console.log(error);
    res.statusCode = 500;
    res.send("Couldn't get the friends for this user");
  }
};

exports.GetFriendsOfFriends = async (req, res) => {
  try {
    //Userid must be picked up from jwt or cookies using a middleware, currently picking from query params for demo purposes
    user_id = req.query.userid;
    [user_details, metadata] = await ExecuteQuery(await GetFriendsOfFriendsQuery(user_id));
    res.send(user_details);
  }
  catch (error) {
    //based on the error, specific error message can be givven to the user
    console.log(error);
    res.statusCode = 500;
    res.send("Couldn not fetch the list of friends of your friends");
  }
};