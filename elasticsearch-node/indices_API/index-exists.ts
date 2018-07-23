import {host, port, index} from '../../environment';
import * as got from 'got';

export const indexExists = async () => {
	try {
		await got.head(`${host}:${port}/${index}`);

		return true;
	} catch (err) {
		console.log(err);

		return false;
	}

};
