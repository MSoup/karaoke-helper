"use strict";
var express_1 = require("express");
var users_1 = require("../controllers/users");
var router = express_1["default"].Router();
router.get('/users', users_1["default"].getUsers);
router.get('/users/:id', users_1["default"].getUser);
router.get('/dev/:id', users_1["default"].getTestUser);
module.exports = router;
