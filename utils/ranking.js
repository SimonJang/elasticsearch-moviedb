"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
exports.readify = (hits, query) => {
    const sortedHits = hits.sort((a, b) => b._score - a._score);
    let rank = 1;
    const header = 'RANK\tSCORE\t\tNAME';
    const footer = `${os_1.EOL}Executed query:${os_1.EOL}${JSON.stringify(query, null, '\t')}`;
    const output = sortedHits
        .map(hit => `${rank++}\t${hit._score}\t${hit._source.title}`)
        .join(os_1.EOL);
    console.log(`${header}${os_1.EOL}${output}${os_1.EOL}${footer}`);
};
