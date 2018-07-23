import * as got from 'got';
import {host, port, index} from '../../environment';
import {readify} from '../../utils/ranking';

(async () => {
	const query = {
		multi_match: {
			query: 'aliens',
			fields: ['title^10', 'overview']
		}
	};

	try {
		const result = await got.post(`${host}:${port}/${index}/_search`, {body: {query}, json: true as any});
		readify(result.body.hits.hits, query);
	} catch (err) {
		console.log(err);
	}
})();
