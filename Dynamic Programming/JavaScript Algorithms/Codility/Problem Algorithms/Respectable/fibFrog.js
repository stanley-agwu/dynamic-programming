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

console.log(fibFrog([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]));