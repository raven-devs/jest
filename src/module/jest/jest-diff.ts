import { diff } from 'jest-diff';

/**
 * npx ts-node src/module/jest/jest-diff.ts
 */

const a = { a: { b: { c: 5 } } };
const b = { a: { b: { c: 6 } } };

// Tool for visualizing changes in data
const result = diff(a, b);
console.log(result);
