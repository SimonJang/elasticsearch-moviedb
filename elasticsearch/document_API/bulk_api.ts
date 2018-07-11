import * as fs from 'fs';
import * as path from 'path';
import {EOL} from 'os';
import * as uuid from 'uuid/v4';
import * as got from 'got';
import {host, port, index} from '../../environment';

const createHeader = () => ({create: {_index: index, _type: 'movie', _id: uuid().split('-').join('')}});

(async () => {
	const dump = fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'tmdb.ndjson')).toString();
	const body = dump
		.split(EOL)
		.filter(record => record.trim())
		.map(record => `${JSON.stringify(createHeader())}${EOL}${record}`)
		.join(EOL);

	try {
		await got.post(`${host}:${port}/${index}/_bulk`, {headers: {'content-type': 'application/x-ndjson'}, body});
	} catch (err) {
		console.log(err);
	}

})();
