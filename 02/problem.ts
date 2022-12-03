const input: string = await Deno.readTextFile("./input.txt");

const lines = input.split("\r\n");

let score = 0;

for (const match of lines) {
  // X = Loose
  // Y = Draw
  // Z = Win

  const left = match.split(" ")[0];
  const originalRight = match.split(" ")[1];
  let right = "";

  switch (originalRight) {
    case "X":
      switch (left) {
        case "A":
          right = "Z";
          break;
        case "B":
          right = "X";
          break;
        case "C":
          right = "Y";
          break;
      }
      break;
    case "Y":
      switch (left) {
        case "A":
          right = "X";
          break;
        case "B":
          right = "Y";
          break;
        case "C":
          right = "Z";
          break;
      }
      break;
    case "Z":
      switch (left) {
        case "A":
          right = "Y";
          break;
        case "B":
          right = "Z";
          break;
        case "C":
          right = "X";
          break;
      }
      break;
  }

  switch (right) {
    case "X":
      score += 1;

      switch (left) {
        case "A":
          score += 3;
          break;
        case "C":
          score += 6;
          break;
      }
      break;
    case "Y":
      score += 2;

      switch (left) {
        case "B":
          score += 3;
          break;
        case "A":
          score += 6;
          break;
      }
      break;
    case "Z":
      score += 3;

      switch (left) {
        case "B":
          score += 6;
          break;
        case "C":
          score += 3;
          break;
      }
      break;
  }
}

console.log(score);
