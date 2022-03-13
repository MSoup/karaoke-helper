"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var path = require("path");
function load_env(production) {
    if (production === void 0) { production = false; }
    // load environment variables if dev
    if (production !== true) {
        dotenv.config({
            path: path.resolve(__dirname, "../../.env")
        });
    }
    else {
        console.log("Please set production settings appropriately before enabling production");
    }
}
exports["default"] = load_env;
