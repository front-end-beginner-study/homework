export default function sum() {
  let a = 0;
  let b = '';

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'boolean') {
      return (b += '숫자를 넣어주세요');
    } else if (typeof arguments[i] === 'string') {
      return (b += '숫자를 넣어주세요');
    } else if (Array.isArray(arguments[i])) {
      return (b += '숫자를 넣어주세요');
    }
    a += arguments[i];
  }
  return a;
}
