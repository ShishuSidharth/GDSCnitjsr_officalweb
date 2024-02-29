const jwt = require("jsonwebtoken");

const verifyToken = async (req, res) => {
  try {
    const { token } = req.body;
    const result = await jwt.verify(token,'h12bob12ou2b1ob');
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
