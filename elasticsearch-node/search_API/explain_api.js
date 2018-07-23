"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
const environment_1 = require("../../environment");
(async () => {
    const query = {
        multi_match: {
            query: 'aliens',
            fields: ['title^10', 'overview']
        }
    };
    const explanation = await got.post(`${environment_1.host}:${environment_1.port}/${environment_1.index}/movie/6240c748ed254538b54138a5af98e4d3/_explain`, { body: { query }, json: true });
    console.log('Search API :: Explain API :: query explanation\n', JSON.stringify(explanation.body, null, '\t'));
})();
(async () => {
    const query = {
        multi_match: {
            query: 'aliens',
            fields: ['title', 'overview']
        }
    };
    const explanationWithParam = await got.post(`${environment_1.host}:${environment_1.port}/${environment_1.index}/_search`, { body: { explain: true, query }, json: true });
    console.log('Search API :: Query API :: query explanation with _explanation attribute\n', JSON.stringify(explanationWithParam.body.hits.hits[0]._explanation, null, '\t'));
})();
