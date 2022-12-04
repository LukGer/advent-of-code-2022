const input: string = await Deno.readTextFile("./input.txt");

const lines = input.split("\r\n");

let count = 0;

for(const line of lines){
    const group1 = line.split(",")[0];
    const lowerBound1 = Number(group1.split("-")[0]);
    const upperBound1 = Number(group1.split("-")[1]);

    const group2 = line.split(",")[1];
    const lowerBound2 = Number(group2.split("-")[0]);
    const upperBound2 = Number(group2.split("-")[1]);


    if((upperBound1 >= lowerBound2 && lowerBound1 <= upperBound2) || (upperBound2 >= lowerBound1 && lowerBound2 <= upperBound1)){
        count++;
        continue;
    }
}

console.log(count);