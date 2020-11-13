const Sequelize = require('sequelize');
const { Database } = require("../../config/config");

exports.PrepareConnection = async () => {
    try {
        sequelize = new Sequelize(Database.url, {
            dialect: Database.database,
            ssl: true,
            //rejectUnauthorized: false should not be used in production, recommended for local development only
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        });
        return sequelize;
    }
    catch (error) {
        return error;
    }
};

exports.ExecuteQuery = async (query, connection = false) => {
    //if connection = alive is passed the existing connection will be used
    //NOTE: using connection = alive is recommended foo concurrent requests only
    connection === "alive" ? connectionRequired = false : sequelize = await this.PrepareConnection();
    return await sequelize.query(query);
};