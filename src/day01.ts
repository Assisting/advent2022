export function challenge(inputs: Array<string>) {
	var elves: number[] = [];
	var i: number = 0;
	inputs.forEach((input: string) => {
		if (isBlankString(input)) {
			i++;
		} else {
			var calorieCount: number = Number(input);
			if (typeof elves[i] === 'undefined') {
				elves[i] = calorieCount;
			} else {
				elves[i] += calorieCount
			}
		}
	});

	var highestCalorieCount: number = 0;
	elves.forEach((elf: number) => {
		if (elf > highestCalorieCount) {
			highestCalorieCount = elf;
		}
	});

	console.log(highestCalorieCount);
}

export function bonus(inputs: Array<string>) {
	var elves: number[] = [];
	var i: number = 0;
	inputs.forEach((input: string) => {
		if (isBlankString(input)) {
			i++;
		} else {
			var calorieCount: number = Number(input);
			if (typeof elves[i] === 'undefined') {
				elves[i] = calorieCount;
			} else {
				elves[i] += calorieCount
			}
		}
	});

	var firstHighest: number = 0;
	var secondHighest: number = 0;
	var thirdHighest: number = 0;
	elves.forEach((elf: number) => {
		if (elf > firstHighest) {
			thirdHighest = secondHighest;
			secondHighest = firstHighest;
			firstHighest = elf;
		} else if (elf > secondHighest) {
			thirdHighest = secondHighest;
			secondHighest = elf;
		} else if (elf > thirdHighest) {
			thirdHighest = elf;
		}
	});

	console.log(firstHighest + secondHighest + thirdHighest);
}

function isBlankString(inputString: string) {
	return inputString === null || inputString.match(/^ *$/) !== null;
}