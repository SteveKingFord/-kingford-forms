/*
 * @Author: kingford
 * @Date: 2021-05-19 10:38:25
 * @LastEditTime: 2021-05-19 10:46:33
 */
import extend from 'extend';
/**
 * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
 */
export function deepCopy(obj) {
  const result = extend(true, {}, { _: obj });
  return result._;
}
/**
 * 深度合并对象
 *
 * @param original 原始对象
 * @param arrayProcessMethod 数组处理方式
 *  - `true` 表示替换新值，不管新值为哪种类型
 *  - `false` 表示会合并整个数组（将旧数据与新数据合并成新数组）
 * @param objects 要合并的对象
 */
export function deepMergeKey(original, arrayProcessMethod, ...objects) {
  if (Array.isArray(original) || typeof original !== 'object') {
    return original;
  }
  const isObject = v => typeof v === 'object' || typeof v === 'function';
  const merge = (target, obj) => {
    Object.keys(obj)
      .filter(key => key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key))
      .forEach(key => {
        const fromValue = obj[key];
        const toValue = target[key];
        if (Array.isArray(toValue)) {
          target[key] = arrayProcessMethod ? fromValue : [...toValue, ...fromValue];
        } else if (
          fromValue != null &&
          isObject(fromValue) &&
          toValue != null &&
          isObject(toValue)
        ) {
          target[key] = merge(toValue, fromValue);
        } else {
          target[key] = deepCopy(fromValue);
        }
      });
    return target;
  };
  objects.filter(v => v != null && isObject(v)).forEach(v => merge(original, v));
  return original;
}
/**
 * Deep merge object.
 *
 * 深度合并对象
 */
export function deepMerge(original, ...objects) {
  return deepMergeKey(original, false, ...objects);
}
