/*process is provided by nodejs and its global*/
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT,
};
/* Shift+ALt+A for multiline comment*/
/* process.env is a object that provides access to the environment variables in nodejs */
/* require("dotenv") accesses the .env file and gets the environment varibales defined in that file*/
/*  require("dotenv").config() sets the read environment varibles. in our case the port number is to 8080*/
/* process.env.PORT acesses the port set in the current nodejs environment  */
