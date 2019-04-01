export default function sum(...argArr) {
  const totalSum = argArr.reduce((total, cur) => total + cur, 0);
  const chkType = (typeItem) => isNaN(typeItem);
  const [chk] = argArr.map((typeItem) => (chkType(typeItem) ? true : false));

  return chk ? '숫자를 넣어주세요' : totalSum;
}
