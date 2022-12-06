const input = await Deno.readTextFile("./input.txt");

for (let i = 0; i < input.length; i++) {
  const signal = input.substring(i, i + 14);

  let found = true;
  for (let y = 0; y < 13; y++) {
    const char = signal[y];
    if (signal.substring(y + 1).includes(char)) {
      found = false;
      break;
    }
  }

  if (found) {
    console.log(signal, i + 14);
    break;
  }
}
