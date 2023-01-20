const express = require("express");
const router = express.Router();
const AdminAuth = require("../middlewares/Admin");

const { SignUp, SignIn, tokenValid, getUser } = require("../controllers/admin");

router.post("/admin/SignUp", SignUp);
router.post("/admin/SignIn", SignIn);
router.post("/admin/tokenIsValied", tokenValid);
router.get("/admin/getUser", getUser);

module.exports = router;
