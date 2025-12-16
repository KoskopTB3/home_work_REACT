let secretNums = [];

for (let i = 0; i < 3; i++) {
  let num;
  num = Math.floor(Math.random() * 9) + 1;
  while (secretNums.includes(num)) {
    num = Math.floor(Math.random() * 9) + 1;
  }
  secretNums.push(num);
}

export { secretNums };
