"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
const environment_1 = require("../../environment");
const index_exists_1 = require("./index-exists");
(async () => {
    const hasIndex = await index_exists_1.indexExists();
    if (hasIndex) {
        console.log(`Index '${environment_1.index}' already exists`);
        return;
    }
    await got.put(`${environment_1.host}:${environment_1.port}/${environment_1.index}`);
})();
