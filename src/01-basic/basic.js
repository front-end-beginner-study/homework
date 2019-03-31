export default function sum (a, b) {
  const argArr = [...arguments];
  const totalSum = argArr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const [chk] = argArr.map(argArr => {
    if (isNaN(argArr) || typeof argArr === 'boolean') return true;
  });
  if (chk) {
    return '숫자를 넣어주세요';
  }
  return totalSum;
}
