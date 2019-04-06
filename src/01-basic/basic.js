export default function sum() {
  const argumentsArr = [...arguments];
  const total = argumentsArr.reduce((prev, curr) => prev + curr, 0);
  const [result] = argumentsArr.map((type) => {
    const isNumber = typeof type === 'number';
    return isNumber ? total : '숫자를 넣어주세요';
  });
  return result;
}
