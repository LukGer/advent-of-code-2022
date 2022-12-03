
const input: string = await Deno.readTextFile("./input.txt");

const lines = input.split("\r\n");

let sum = 0;

for(let i = 0; i < lines.length - 2; i += 3){
    const line1 = lines[i];
    const line2 = lines[i + 1];
    const line3 = lines[i + 2];

    const regex1 = new RegExp("[" + line1 + "]", "g");

    const in1and2 = line2.match(regex1)?.join("") ?? "";

    const regex2 = new RegExp("[" + in1and2 + "]", "g");

    const in1and2and3 = line3.match(regex2)?.join("") ?? "";

    const char = in1and2and3.substring(0, 1);

    console.log(char);
    

    if(char.match(new RegExp("[a-z]", "g"))){
        const val = char.charCodeAt(0) - 96;

        console.log(char, val);

        sum += val;
    } else {
        const val = char.charCodeAt(0) - 38;

        console.log(char, val);

        sum += val;
    }
}

console.log(sum);