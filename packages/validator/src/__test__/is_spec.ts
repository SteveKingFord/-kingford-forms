/*
 * @Author: kingford
 * @Date: 2021-08-05 15:49:07
 * @LastEditTime: 2021-08-05 15:50:15
 */
function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

function isString(val: unknown): val is string {
  return is(val, 'String')
}

console.log(isString('2343'))
