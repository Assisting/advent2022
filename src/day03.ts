var alphabet: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function challenge(inputs: Array<string>) {
    var copiedScore: number = 0
	inputs.forEach((input: string) => {
        var [first, second] = [input.slice(0, input.length/2), input.slice(input.length/2)];

        var charsInFirst: string[] = first.split('');
        var charsInSecond: string[] = second.split('');
        var foundChar: boolean = false;
        charsInFirst.forEach((char: string) => {
            if (charsInSecond.indexOf(char) != -1 && foundChar == false) {
                copiedScore += (alphabet.indexOf(char) + 1);
                foundChar = true;
            }
        })
	});

    console.log(copiedScore);
}

export function bonus(inputs: Array<string>) {
    var copiedScore: number = 0

	var i: number = 0;
    while (i < inputs.length) {
        var charsInFirstLine: string[] = inputs[i].split('');
        var foundChar: boolean = false;
        charsInFirstLine.forEach((char: string) => {
            if (inputs[i+1].indexOf(char) != -1 && inputs[i+2].indexOf(char) != -1 && foundChar == false) {
                copiedScore += (alphabet.indexOf(char) + 1);
                foundChar = true;
            }
        });

        i += 3;
    }

    console.log(copiedScore);
}