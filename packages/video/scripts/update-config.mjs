import Config from '@screenshots/config';
import {exec} from 'child_process';

const {end, start} = Config.dates;

exec(`./scripts/update-config.sh ${start} ${end}`, (error, stdout, stderr) => {
	console.log(stdout);
	console.log(stderr);
	if (error !== null) {
		console.error(`exec error: ${error}`);
	}
});
