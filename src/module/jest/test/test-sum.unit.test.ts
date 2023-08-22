import { JestUtils } from '../jest-utils';

describe('test-sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(JestUtils.sum(1, 2)).toBe(3);
  });
});
