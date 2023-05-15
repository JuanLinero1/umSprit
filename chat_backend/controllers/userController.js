const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { userName, password, email } = req.body;
    const userNameCheck = await User.findOne({ userName });
    if (userNameCheck)
      return res.json({ message: "username already in use", status: false });
    console.log(userNameCheck);

    const emailCheck = await User.findOne({ email: email });
    if (emailCheck)
      return res.json({ message: "username already in use", status: false });

    const passwordCheck = await User.findOne({ password: password });
    if (passwordCheck)
      return res.json({ message: "username already in use", status: false });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      userName,
      password: hash,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    console.error(err);
  }
};
module.exports.login = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const userCheck = await User.findOne({ userName });
    if (!userCheck)
      return res.json({
        message: "Incorrect username or password",
        status: false,
      });

    const isPassword = await bcrypt.compare(password, userCheck.password);
    if (!isPassword)
      return res.json({ message: "Incorrect username or password", status: false });

      delete userCheck.password;
    return res.json({ status: true });
  } catch (err) {
    console.error(err);
  }
};
