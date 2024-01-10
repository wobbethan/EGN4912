//create token and save in cookies

const sendToken = (user, statusCode, res, tokenName) => {
  const token = user.getJwtToken();
  //options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie(tokenName, token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
