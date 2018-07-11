"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const os_1 = require("os");
const loadJSON = require("load-json-file");
const movieData = loadJSON.sync(path.join(__dirname, '..', 'data', 'tmdb.json'));
let ndJSON = '';
for (const key of Object.keys(movieData)) {
    ndJSON += JSON.stringify(movieData[key]) + os_1.EOL;
}
fs.writeFileSync(path.join(__dirname, '..', 'data', 'tmdb.ndjson'), ndJSON);
