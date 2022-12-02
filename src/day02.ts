export function challenge(inputs: Array<string>) {
	var totalScore: number = 0
	inputs.forEach((input: string) => {
		totalScore += score_challenge(input.charAt(0), input.charAt(2));
	});

	console.log(totalScore);
}

export function bonus(inputs: Array<string>) {
	var totalScore: number = 0
	inputs.forEach((input: string) => {
		totalScore += score_bonus(input.charAt(0), input.charAt(2));
	});

	console.log(totalScore);
}

function score_challenge(other: string, self: string): number {
	if (other == 'A') {
		switch (self) {
			case 'X': {
				return 1 + 3;
			}
			case 'Y': {
				return 2 + 6;
			}
			case 'Z': {
				return 3 + 0;
			}
		}
	} else if (other == 'B') {
		switch (self) {
			case 'X': {
				return 1 + 0;
			}
			case 'Y': {
				return 2 + 3;
			}
			case 'Z': {
				return 3 + 6;
			}
		}
	} else if (other == 'C') {
		switch (self) {
			case 'X': {
				return 1 + 6;
			}
			case 'Y': {
				return 2 + 0;
			}
			case 'Z': {
				return 3 + 3;
			}
		}
	}
	return 0;
}

function score_bonus(other: string, self: string): number {
	if (other == 'A') {
		switch (self) {
			case 'X': {
				return 3 + 0;
			}
			case 'Y': {
				return 1 + 3;
			}
			case 'Z': {
				return 2 + 6;
			}
		}
	} else if (other == 'B') {
		switch (self) {
			case 'X': {
				return 1 + 0;
			}
			case 'Y': {
				return 2 + 3;
			}
			case 'Z': {
				return 3 + 6;
			}
		}
	} else if (other == 'C') {
		switch (self) {
			case 'X': {
				return 2 + 0;
			}
			case 'Y': {
				return 3 + 3;
			}
			case 'Z': {
				return 1 + 6;
			}
		}
	}
	return 0;
}