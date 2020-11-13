const { GetInsertionColumnsAndValues, GetUpdateSetColumns } = require("../helpers/sql");

exports.GetUsersQuery = (limit, offset) => {
    return `SELECT
                *	
            FROM
                tidbits.codemymobile_users
            ORDER BY 
                id
            LIMIT 
                ${limit} 
            OFFSET 
                ${offset};`;
};

exports.GetUsersDetailsQuery = (user_id) => {
    return `SELECT
                *	
            FROM
                tidbits.codemymobile_users
            WHERE
                id=${user_id}
            ORDER BY 
                id
            LIMIT
                1`;
};

// A dynamic query to insert user data
exports.InsertNewUserData = async (data) => {
    const NewUserData = await GetInsertionColumnsAndValues(data);
    return `INSERT INTO tidbits.codemymobile_users (${NewUserData.columns}) VALUES (${NewUserData.Values});`;
};

//A dynamic update query generator to Update user data
exports.UpdateUserDetails = async (data, user_id) => {
    const ValuesToUpdate = await GetUpdateSetColumns(data);
    return `UPDATE tidbits.codemymobile_users SET ${ValuesToUpdate} WHERE codemymobile_users.id = ${user_id};`;
};