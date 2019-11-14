"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname + "/../", ".env") });
const app = express();
app.use(bodyParser.json());
app.set("env", process.env.NODE_ENV || "development");
app.set("port", process.env.PORT || 5000);
app.get('/', (req, res) => res.json({
    message: 'Welcome to expressjs and Reactjs'
}));
exports.default = app;
//# sourceMappingURL=app.js.map