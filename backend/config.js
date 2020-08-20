const dotenv = require('dotenv');
dotenv.config('./env');

const config =  {
    MONGODB_URL :process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = config;