class Random {
  static nextDouble(low, high) {
    return Math.random() * (high - low) + low;
  }

  static nextInt(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }

  static nextElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}


let isFirstInput = true;
let array = [];

process.stdin.on('data', data => {
  const input = data.toString().trim().split(' ');

  if (isFirstInput) {
    const low = Number(input[0]);
    const high = Number(input[1]);
    const low2 = Number(input[2]);
    const high2 = Number(input[3]);
    const od = Random.nextDouble(low, high);
    const result2 = Random.nextInt(low2, high2);
    console.log(od);
    console.log(result2);
    isFirstInput = false;
  } else {
    array = input.map(Number);
    const result = Random.nextElement(array);
    console.log(result);
    process.exit();
  }
});