import * as got from 'got';

import {host, port, index} from '../../environment';
import {indexExists} from './index-exists';

/**
 * Creates a simple index with no additional properties, analysis or mappings
 */
(async () => {
	const hasIndex = await indexExists();

	if (hasIndex) {
		console.log(`Index '${index}' already exists`);
		return ;
	}

	await got.put(`${host}:${port}/${index}`);
})();
