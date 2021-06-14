/*
 * @Author: kingford
 * @Date: 2021-06-14 20:56:03
 * @LastEditTime: 2021-06-14 21:19:11
 */
const utils = require('../lib/index.js');

// test('测试清空字符串空格', () => {
//   const v = 'hello world !!!';
//   expect(v).toBe('hello world !!!');
// });

test('测试清空字符串空格', () => {
  const v = 'hello world !!!';
  expect(utils.clearSpace(v)).toBe('helloworld!!!');
});
