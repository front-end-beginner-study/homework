export default function sum (a, b) {
  if (
    (isNaN(a) && isNaN(b)) ||
    (typeof a === 'boolean' && typeof b === 'boolean')
  ) {
    return '숫자를 넣어주세요';
  }
  return [...arguments].reduce((acc, cur) => acc + cur);
}
