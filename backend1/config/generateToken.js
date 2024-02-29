const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'FT9PUGvyZf0tpBbYtrve7yyCI9P5QRdf', {
    expiresIn: "500d",
  });
};

module.exports = generateToken;
