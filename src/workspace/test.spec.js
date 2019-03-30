import { sum } from './test';

describe('테스트', function() {
  it('조건', function() {
    expect(sum(1, 2)).toBe(3);
  });
});
