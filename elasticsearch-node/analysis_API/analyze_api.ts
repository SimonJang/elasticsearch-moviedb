import * as got from 'got';
import {host, port} from '../../environment';

(async () => {
	const query = {
		analyzer: 'whitespace',
		text: 'The quick brown fox.'
	};

	try {
		const result = await got.post(`${host}:${port}/_analyze`, {body: query, json: true as any});
		console.log('Analysis API :: POST _analyze :: Testing your analyzers with the _analyze endpoint', JSON.stringify(result.body, null, '\t'));
	} catch (err) {
		console.log(err);
	}
})();
