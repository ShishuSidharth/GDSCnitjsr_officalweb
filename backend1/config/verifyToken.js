const jwt = require("jsonwebtoken");

const verifyToken = async (req, res) => {
  try {
    const { token } = req.body;
    const result = await jwt.verify(token, 'FT9PUGvyZf0tpBbYtrve7yyCI9P5QRdf');
    res.status(200).json({
      result,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

module.exports = verifyToken;
