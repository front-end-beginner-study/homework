export default class Counter {
  constructor(count = 0) {
    this.count = this.isNumber(count) ? count : 0;
  }
  isNumber(input) {
    return typeof input === 'number';
  }
  getCount() {
    return this.count;
  }
  increment(num = 1) {
    return this.isNumber(num) ? (this.count += num) : '숫자만 넣어주세요';
  }
  decrement(num = 1) {
    return this.isNumber(num) ? (this.count -= num) : '숫자만 넣어주세요';
  }
  reset(num = 0) {
    this.count = num;
  }
}
