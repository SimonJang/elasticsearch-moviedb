"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("../../environment");
const got = require("got");
exports.indexExists = async () => {
    try {
        await got.head(`${environment_1.host}:${environment_1.port}/${environment_1.index}`);
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
};
