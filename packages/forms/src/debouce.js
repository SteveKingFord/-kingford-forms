/*
 * @Author: kingford
 * @Date: 2021-04-16 10:04:05
 * @LastEditTime: 2021-04-17 20:54:38
 */
export function debounce(func, delay) {
  let timeout;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      func();
    }, delay);
  };
}
