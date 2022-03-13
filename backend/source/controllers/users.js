"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var Pool = require('pg').Pool;
var pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});
// error handler for pool, callback fires on error
pool.on('error', function (err, client) {
    console.error('Error:', err);
});
var query = "\nSELECT *\nFROM users\n";
pool.connect()
    .then(function (client) {
    client.query(query)
        .then(function (res) {
        for (var _i = 0, _a = res.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            console.log(row);
        }
    })["catch"](function (err) {
        console.error(err);
    });
})["catch"](function (err) {
    console.error(err);
});
var endpoints = {
    USERS: "https://jsonplaceholder.typicode.com/users"
};
// Gets all users from the fake endpoint
var getUsers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var result, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].get(endpoints.USERS)];
            case 1:
                result = _a.sent();
                users = result.data;
                return [2 /*return*/, res.status(200).json({
                        message: users
                    })];
        }
    });
}); };
// Gets a user from the fake endpoint
var getUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                console.log(req.params);
                return [4 /*yield*/, axios_1["default"].get("".concat(endpoints.USERS, "/").concat(id))];
            case 1:
                result = _a.sent();
                user = result.data;
                return [2 /*return*/, res.status(200).json({
                        message: user
                    })];
        }
    });
}); };
// Gets a user from the fake endpoint but curates the information
var getTestUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, axios_1["default"].get("".concat(endpoints.USERS, "/").concat(id))];
            case 1:
                result = _a.sent();
                user = {
                    id: result.data.id,
                    firstName: result.data.name.split(" ")[0],
                    lastName: result.data.name.split(" ")[1],
                    retrievedAt: new Date().toLocaleString()
                };
                console.log(user);
                return [2 /*return*/, res.status(200).json({
                        message: user
                    })];
        }
    });
}); };
exports["default"] = {
    getUsers: getUsers,
    getUser: getUser,
    getTestUser: getTestUser
};
