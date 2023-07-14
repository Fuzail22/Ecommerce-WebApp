const { signUp, signIn } = require("../service/user.service");

const signup = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  const userCreation = await signUp(email, password);
  res.status(userCreation.status ? 201 : 400).json({
    ...userCreation,
  });
  return;
};

const signin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const getUser = await signIn(email, password);
  if (getUser.status) {
    res.cookie("authToken", getUser.authToken, { maxAge: 36000000 });
    res.status(200).json({
      ...getUser,
    });
    return;
  }
  res.status(401).json({
    ...getUser,
  });
  return;
};

module.exports = {
  signin,
  signup,
};
