const authRouter = require("express").Router();
const { getAccess, getLogout } = require("../controllers");

authRouter.post("/api/login", getAccess);
authRouter.post("/api/logout", getLogout);

module.exports = authRouter;
