"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
const environment_1 = require("../../environment");
const ranking_1 = require("../../utils/ranking");
(async () => {
    const query = {
        multi_match: {
            query: 'aliens',
            fields: ['title^10', 'overview']
        }
    };
    try {
        const result = await got.post(`${environment_1.host}:${environment_1.port}/${environment_1.index}/_search`, { body: { query }, json: true });
        ranking_1.readify(result.body.hits.hits, query);
    }
    catch (err) {
        console.log(err);
    }
})();
