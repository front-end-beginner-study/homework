export default class Counter {
  constructor (count = 0) {
    this.count = this.isNumber(count) ? count : 0;
    this.WRONG_MESSAGE = '숫자만 넣어주세요';
  }

  isNumber (num) {
    return typeof num === 'number';
  }

  increment (incNum = 1) {
    return this.isNumber(incNum) ? (this.count += incNum) : this.WRONG_MESSAGE;
  }

  decrement (decNum = 1) {
    return this.isNumber(decNum) ? (this.count -= decNum) : this.WRONG_MESSAGE;
  }

  getCount () {
    return this.count;
  }

  reset (resNum = 0) {
    return (this.count = resNum);
  }
}
