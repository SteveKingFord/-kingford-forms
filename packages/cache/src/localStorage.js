/*
 * @Author: kingford
 * @Date: 2021-05-19 10:30:49
 * @LastEditTime: 2021-05-19 10:34:39
 */
export class localStorageUtil {
  static get(key) {
    window.localStorage.getItem(key);
  }
  static set(key, data) {
    const stingifyData = JSON.stringify(data) || null;
    window.localStorage.setItem(key, stingifyData);
  }
  static remove(key) {
    window.localStorage.removeItem(key);
  }
  static clear() {
    window.localStorage.clear();
  }
}
