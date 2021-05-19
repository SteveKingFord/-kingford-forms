/*
 * @Author: kingford
 * @Date: 2021-05-19 10:38:25
 * @LastEditTime: 2021-05-19 10:47:09
 */
/**
 * 清空字符串所有空格
 * @param str 字符串
 */
export function clearSpace(str) {
  return (str || '').replace(/\s*/g, '');
}
