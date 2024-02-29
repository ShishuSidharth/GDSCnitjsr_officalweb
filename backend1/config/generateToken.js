const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, '12bob12ou2b1ob', {
    expiresIn: "500d",
  });
};

module.exports = generateToken;
