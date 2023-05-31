// FibFrog

// Count the minimum number of jumps required for a frog to get to the 
// other side of a river.

const fibFrog = (A) => {
  const N  = A.length - 1;

  if (N === 0) return 0;

  const newA = [1, ...A, 1];

  if (jump === 1) return 1;

  const createFib = (N) => {
    const prefFib = Array(N + 1).fill(0);
    prefFib[1] = 1;
    for(let i = 2; i < N + 1; i++) {
      prefFib[i] = prefFib[i - 1] + prefFib[i - 2];
    }
    return prefFib;
  }
  prefFib = createFib(N);
  if (prefFib.includes(N + 1)) return 1;

  const maxSteps = A.reduce((sum, curr) => (sum += curr), 1);
}

const fibFrog2 = (A) => {
  const B = [...A, 1];
  let fibTable = [0, 1];
  for (let i = 2; i < B.length; i++) {
    fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
  }

  let left = 0;
  let index = 0;
  let count = [];
  console.log('fibTable: ', fibTable);

  while (left < B.length) {
    let right = 0;
    while(left + right < B.length) {
      if (B[left + right] === 1 && fibTable.includes(right + 1)) {
        index = left + right;
        console.log('index: ', index);
        console.log('1 => ', 'left: ', left, 'right: ', right);
      }
      if (B[left + right] === 1 && !fibTable.includes(right + 1) && index > left) {
        count.push(fibTable[index + 1]);
        left = index + 1;
        console.log('index: ', index, 'left: ', left);
        console.log('2 => ', 'left: ', left, 'right: ', right);
        break;
      }
      right += 1;
    }
    console.log('count: ', count);
    console.log('3 => ', 'left: ', left, 'right: ', right);
    if (left + right >= B.length) {
      console.log('4 => ', 'left: ', left, 'right: ', right);
      break;
    }
    // i += 1;
  }
  return count.length;
}

console.log(fibFrog2([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]));