import * as readline from 'node:readline';
import { bonus } from './day02';

var rl = readline.createInterface({
	input: process.stdin
});

var lines: Array<string> = [];

rl.on('line', (line) => {
	if (!isBlankString(line) || true) {
		lines.push(line);
	}
});

process.on('SIGINT', function () {
	rl.close();
	bonus(lines);
	process.exit();
});

function isBlankString(inputString: string) {
	return inputString === null || inputString.match(/^ *$/) !== null;
}
