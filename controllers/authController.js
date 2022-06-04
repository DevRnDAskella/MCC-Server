const { User } = require("../models");
const bcrypt = require("bcrypt");

exports.getAccess = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(400)
        .json({ message: "Username and password are required." });

    const user = await User.findOne({ username }).exec(); // TODO: find_out
    if (!user) return res.sendStatus(401);

    const match = await bcrypt.compare(password, user.password); // TODO: find_out

    const isPasswordValid = password.localeCompare(user.password);

    if (!user || isPasswordValid === -1) {
      return res.json({ msg: "Incorrect Username or Password", status: false });
    }

    return res.json({ user, status: true });
  } catch (ex) {
    next(ex);
  }
};

exports.getLogout = async (req, res) => {};
