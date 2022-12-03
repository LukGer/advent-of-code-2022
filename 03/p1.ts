
const input: string = await Deno.readTextFile("./input.txt");

const lines = input.split("\r\n");

let sum = 0;

for(const line of lines){
    const length = line.length;
    
    const comp1 = line.substring(0, length / 2);
    const comp2 = line.substring(length / 2);

    const inBoth = comp1.match(new RegExp("[" + comp2 + "]", "g") || [])?.join("") ?? "";
    const char = inBoth.substring(0, 1);

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