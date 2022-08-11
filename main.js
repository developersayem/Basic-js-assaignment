let i = 0;
function sum(i) {
  if (i === 1) {
    return 1;
  }
  return i + sum(i - 1);
}

console.log(5);
