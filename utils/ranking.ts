import {EOL} from 'os';

interface ElasticSearchHit {
	_score: number;
	_source: {
		title: string;
	};
}

export const readify = (hits: ElasticSearchHit[], query: any) => {
	const sortedHits = hits.sort((a, b) => b._score - a._score);

	let rank = 1;
	const header = 'RANK\tSCORE\t\tNAME';
	const footer = `${EOL}Executed query:${EOL}${JSON.stringify(query, null, '\t')}`;

	const output = sortedHits
		.map(hit => `${rank++}\t${hit._score}\t${hit._source.title}`)
		.join(EOL);

	console.log(`${header}${EOL}${output}${EOL}${footer}`);
};
