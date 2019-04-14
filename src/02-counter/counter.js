import { isNumber } from 'util';

export default class Counter {
  constructor(count = 0) {
    this.count = typeof count === 'number' ? count : 0;
  }
  getCount() {
    return this.count;
  }
  increment(num = 0) {
    typeof num === 'number' ? (this.count = this.count + 1) : '숫자만 넣어주세요';
    // this.count = this.count + 1;
  }
  decrement(num = 1) {
    typeof num === 'number' ? (this.count = this.count - num) : '숫자만 넣어주세요';
    // this.count = this.count - num;
  }
  reset(num = 0) {
    this.count = num;
  }
}
