export default function sum() {
  const arrArg = Array.from(arguments);

  const totalArg = arrArg.reduce((a, i) => {
    return a + i;
  }, 0);

  const wrong = arrArg.some((item) => typeof item === 'boolean' || typeof item === 'string' || Array.isArray(item));
  if (wrong) {
    return '숫자를 넣어주세요';
  }
  return totalArg;
}
