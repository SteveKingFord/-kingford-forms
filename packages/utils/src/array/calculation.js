/*
 * @Author: kingford
 * @Date: 2021-05-19 10:37:22
 * @LastEditTime: 2021-05-19 10:45:40
 */
/**
 *  Compute sum of given numbers.
 */
export function sum(values) {
  if (values == null || values.length < 1) {
    return 0;
  }
  let ret = 0;
  for (let i = values.length; i--; ) {
    ret += values[i];
  }
  return ret;
}
