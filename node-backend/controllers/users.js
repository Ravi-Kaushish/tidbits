const { ExecuteQuery } = require("../common/helpers/sequelize");
const { GetUsersQuery, GetUsersDetailsQuery, InsertNewUserData, UpdateUserDetails } = require("../common/queries/users");

//Get users with pagination
exports.GetUsers = async (req, res) => {
  try {
    req.query.pageno ? pageno = req.query.pageno : pageno = 1
    //pagination limit must be set to config file
    limit = 5
    offset = pageno * limit - limit;
    [users, metadata] = await ExecuteQuery(await GetUsersQuery(limit, offset));
    res.send(users);
  }
  catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.send("error getting users")
  }
};

//get user by id
exports.GetUsersDetails = async (req, res) => {
  try {
    user_id = req.params.userid;
    [user_details, metadata] = await ExecuteQuery(await GetUsersDetailsQuery(user_id));
    res.send(user_details);
  }
  catch (error) {
    //based on the error apecific error message can be givven to the user
    console.log(error);
    res.statusCode = 500;
    res.send("couldn't find that user");
  }
};

//create a new user
exports.CreateNewUser = async (req, res) => {
  try {
    //data validation must be added here to avoid errors for bad requests and user access levels
    [user_details, metadata] = await ExecuteQuery(await InsertNewUserData(req.body));
    res.send(user_details);
  }
  catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.send("couldn't find that user");
  }
};

//Update an existing user
exports.UpdateUserDetails = async (req, res) => {
  try {
    //validation can be added to avoid error like if id not find, if the user exists or not, or if the logged in user has sufficient rights
    user_id = req.params.userid;
    [user_details, metadata] = await ExecuteQuery(await UpdateUserDetails(req.body, user_id));
    res.send(user_details);
  }
  catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.send("couldn't find that user");
  }
};