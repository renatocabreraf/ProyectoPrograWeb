const fs = require("fs");
const path = require ("path");

exports.service = require("../reimagine.js");
exports.sample = fs.readFileSync(path.join(_dirnae, "sample.png"));