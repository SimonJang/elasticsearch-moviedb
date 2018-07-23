"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const os_1 = require("os");
const uuid = require("uuid/v4");
const got = require("got");
const environment_1 = require("../../environment");
const createHeader = () => ({ create: { _index: environment_1.index, _type: 'movie', _id: uuid().split('-').join('') } });
(async () => {
    const dump = fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'tmdb.ndjson')).toString();
    const body = dump
        .split(os_1.EOL)
        .filter(record => record.trim())
        .map(record => `${JSON.stringify(createHeader())}${os_1.EOL}${record}`)
        .join(os_1.EOL);
    try {
        await got.post(`${environment_1.host}:${environment_1.port}/${environment_1.index}/_bulk`, { headers: { 'content-type': 'application/x-ndjson' }, body });
    }
    catch (err) {
        console.log(err);
    }
})();
