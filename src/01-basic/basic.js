export default function sum(...theArgs) {
  const isWrong = theArgs.some((item) => typeof item === 'boolean' || typeof item !== 'number');
  return isWrong ? '숫자를 넣어주세요' : totalArg(theArgs);
}
const totalArg = function(e) {
  return e.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
