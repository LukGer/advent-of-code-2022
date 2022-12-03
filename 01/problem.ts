
const text: string = await Deno.readTextFile("./input.txt")

const lines: string[] = text.split("\r\n");

const elves: number[] = [];

let index = 0;
let sum = 0;

for(const line of lines){
    if(line === ""){
        elves[index] = sum;
        sum = 0;
        index++;
        continue;
    }
    sum += Number(line)
}

console.log(elves);

const sorted = elves.sort((a, b) => b - a);

console.log(sorted[0] + sorted[1] + sorted[2])