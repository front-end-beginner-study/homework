export default function sum(...argArr) {
  const totalSum = argArr.reduce((total, cur) => total + cur, 0);
  const typeChk = (typeItem) => isNaN(typeItem) || typeof typeItem === 'boolean';
  const [chk] = argArr.map((typeItem) => (typeChk(typeItem) ? true : false));

  return chk ? '숫자를 넣어주세요' : totalSum;
}
