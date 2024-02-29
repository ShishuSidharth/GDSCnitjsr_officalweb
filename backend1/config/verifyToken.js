const jwt = require("jsonwebtoken");

const verifyToken = async (req, res) => {
  try {
    const { token } = req.body;
    const result = await jwt.verify(token, 'DGQwJ_qtHfmP6gURxFf-TplURR_JNzXk3P_uy2paU65vhsB8zs88iYV80L33v7YA');
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
