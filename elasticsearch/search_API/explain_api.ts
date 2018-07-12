import * as got from 'got';
import {host, port, index} from '../../environment';

(async () => {
	const query = {
		multi_match: {
			query: 'aliens',
			fields: ['title^10', 'overview']
		}
	};

	// Change with existing id of match or non-match
	const explanation = await got.post(`${host}:${port}/${index}/movie/6240c748ed254538b54138a5af98e4d3/_explain`, {body: {query}, json: true});

	console.log('Search API :: Explain API :: query explanation\n', JSON.stringify(explanation.body, null, '\t'));
})();

(async () => {
	const query = {
		multi_match: {
			query: 'aliens',
			fields: ['title', 'overview']
		}
	};

	const explanationWithParam = await got.post(`${host}:${port}/${index}/_search`, {body: {explain: true, query}, json: true});

	console.log('Search API :: Query API :: query explanation with _explanation attribute\n', JSON.stringify(explanationWithParam.body.hits.hits[0]._explanation, null, '\t'));
})();
