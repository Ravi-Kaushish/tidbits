//Creates and retruns a dynamic query to get the list of friends
//Method 1 Using Subqueries 
exports.GetFriendsQuery = (user_id, sort = "name") => {
    //if no sort parameter is passed , friend list will be sorted by friend name, else sort filter can be applied by passing the sort argument during query call
    return `SELECT 
                * 
            FROM 
                tidbits.codemymobile_users 
            WHERE 
                codemymobile_users.id in
                    (SELECT
                        CASE 
                            WHEN
                                codemymobile_friends.friend1_id =  ${user_id}
                            THEN
                                friend2_id
                            ELSE 
                            codemymobile_friends.friend1_id
                        END friend_id
                    FROM
                        tidbits.codemymobile_friends
                    WHERE
                        codemymobile_friends.friend1_id = ${user_id}
                    OR
                        codemymobile_friends.friend2_id = ${user_id})
            ORDER BY 
                codemymobile_users.${sort};`;
};

//Creates a dynamic query to get the details of all the friends who are "friends of friends" of a user 
//Method 2 Using Joins and subqueries
exports.GetFriendsOfFriendsQuery = (user_id, sort = "name") => {
    return `SELECT
                *
            FROM
                tidbits.codemymobile_users
            WHERE
                codemymobile_users.id IN (
                    SELECT
                        DISTINCT CASE
                            WHEN secondconnection.friend1_id = friends.id THEN secondconnection.friend2_id
                            ELSE secondconnection.friend1_id
                        END fof_id
                    FROM
                        (
                            SELECT
                                id
                            FROM
                                tidbits.codemymobile_users
                            WHERE
                                codemymobile_users.id IN (
                                    SELECT
                                        CASE
                                            WHEN codemymobile_friends.friend1_id = ${user_id} THEN friend2_id
                                            ELSE codemymobile_friends.friend1_id
                                        END friend_id
                                    FROM
                                        tidbits.codemymobile_friends
                                    WHERE
                                        codemymobile_friends.friend1_id = ${user_id}
                                        OR codemymobile_friends.friend2_id = ${user_id}
                                )
                            ORDER BY
                                codemymobile_users.${sort}
                        ) friends
                        LEFT JOIN tidbits.codemymobile_friends secondconnection ON (
                            friends.id = secondconnection.friend1_id
                            OR friends.id = secondconnection.friend2_id
                        )
                )`;
};