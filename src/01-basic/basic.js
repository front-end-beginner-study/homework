export default function sum (...argArr) {
  const totalSum = argArr.reduce((total, cur) => total + cur, 0);
  const chkType = typeItem => typeof typeItem === 'number';
  const [chkResult] = argArr.map(typeItem => chkType(typeItem));

  return chkResult ? totalSum : '숫자를 넣어주세요';
}
1;
