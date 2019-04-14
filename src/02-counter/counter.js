export default class Counter {
  constructor(input = 0) {
    this.count = typeof input === 'number' ? (this.count = input) : 0;
  }
  getCount() {
    return this.count;
  }
  increment(inputNum = 1) {
    const isWrong = typeof inputNum !== 'number';
    this.count = isWrong ? '숫자만 넣어주세요' : (this.count += inputNum);
  }
  decrement(inputNum = 1) {
    const isWrong = typeof inputNum !== 'number';
    this.count = isWrong ? '숫자만 넣어주세요' : (this.count -= inputNum);
  }
  reset(inputNum = 0) {
    return (this.count = inputNum);
  }
}
