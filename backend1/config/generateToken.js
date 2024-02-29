const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'DGQwJ_qtHfmP6gURxFf-TplURR_JNzXk3P_uy2paU65vhsB8zs88iYV80L33v7YA', {
    expiresIn: "500d",
  });
};

module.exports = generateToken;
