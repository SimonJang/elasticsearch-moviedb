"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
const environment_1 = require("../../environment");
(async () => {
    const query = {
        analyzer: 'whitespace',
        text: 'The quick brown fox.'
    };
    try {
        const result = await got.post(`${environment_1.host}:${environment_1.port}/_analyze`, { body: query, json: true });
        console.log('Analysis API :: POST _analyze :: Testing your analyzers with the _analyze endpoint', JSON.stringify(result.body, null, '\t'));
    }
    catch (err) {
        console.log(err);
    }
})();
