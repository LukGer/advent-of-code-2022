
const cratesText = await Deno.readTextFile("./crates.txt");

const instructionsText = await Deno.readTextFile("./instructions.txt");

const crateTowers = cratesText.split("\r\n");

const towerArrays: string[][] = GetTowerArrays(crateTowers);

const instructions = instructionsText.split("\r\n");

// const regex = new RegExp("move (\d+) from (\d+) to (\d+).*");

for(const instruction of instructions){
    const match = instruction.match(/move (\d+) from (\d+) to (\d+).*/, "g");

    const count = Number(match?.[1] ?? 0);
    const firstIndex = Number(match?.[2] ?? 0);
    const secondIndex = Number(match?.[3] ?? 0);

    const firstTower = towerArrays[firstIndex - 1];
    const secondTower = towerArrays[secondIndex - 1]

    console.log("move", count, "from", firstIndex, "to", secondIndex);

    for(let i = 0; i < count; i++ ){
        const crate = firstTower.pop();
        if(crate){
            secondTower.push(crate);
        }
    }
}

let result = "";

for(const tower of towerArrays){
    const crate = tower.pop();
    result += crate;
}

console.log(result);



function GetTowerArrays(crateTowers: string[]): string[][]{
    const res: string[][] = [];

    for(const tower of crateTowers){
        res.push(tower.split(/[\[\]]/).filter((s) => s.length > 0))
    }

    return res;
}