/*
 * @Author: kingford
 * @Date: 2021-08-05 15:46:35
 * @LastEditTime: 2021-08-05 15:59:33
 */
const toString = Object.prototype.toString

/**
 * @desc 判断传入的数据类型
 * @param {unknown} val
 * @param {string} type
 * @return {*}
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * @desc 是否为字符串
 * @param {unknown} val
 * @return {*}
 */
export function isString(val: unknown): val is string {
  return is(val, 'String')
}
