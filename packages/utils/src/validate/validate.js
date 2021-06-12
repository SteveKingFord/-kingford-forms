/**
 * Check if value is a function.
 */
export function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Check if value is a valid JSON.
 */
export function isJson(value) {
  try {
    JSON.parse(value);
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * Check if value is an `Array` object.
 */
export function isArray(value) {
  if (isNil(Array.isArray) === false) {
    return Array.isArray(value);
  }
  return objToStr(value) === '[object Array]';
}
/**
 * Check if value is a string primitive.
 */
export function isString(value) {
  return objToStr(value) === '[object String]';
}
/**
 * Check if value is a string primitive.
 *
 * isNonEmptyString(''); // -> false
 */
export function isNonEmptyString(value) {
  return typeof value === 'string' && value !== '';
}
/**
 * Check if value is undefined.
 *
 * isUndefined(void 0); // -> true
 */
export function isUndefined(value) {
  return value === undefined;
}
export function isUndefinedOrEmptyString(value) {
  return value === undefined || value === '';
}
/**
 * Check if value is an NaN.
 */
export function isNaN(value) {
  return value !== value;
}
/**
 * Check if value is an Null.
 */
export function isNull(value) {
  return value === null;
}
/**
 * Check if value is null or undefined, the same as value == null.
 *
 * isNil(null); // -> true
 * isNil(undefined); // -> true
 * isNil(void 0); // -> true
 */
export function isNil(value) {
  return value == null;
}
export function exists(obj) {
  return !isNil(obj);
}
/**
 * Check if value is classified as a Number primitive or object.
 */
export function isNum(value) {
  return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
}
/**
 * Checks if value is classified as a Integer.
 */
export function isInt(value) {
  return isNum(value) && value % 1 === 0;
}
/**
 * Checks if value is classified as a Decimal.
 */
export function isDecimal(value) {
  return isNum(value) && !isInt(value);
}
/**
 * Check if number is odd.
 */
export function isOdd(value) {
  if (!isInt(value)) {
    return false;
  }
  return value % 2 !== 0;
}
/**
 * Check if value is an IdCard.
 */
export function isIdCard(value) {
  return typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
}
/**
 * Check if value is an Mobile.
 */
export function isMobile(value) {
  return (
    typeof value === 'string' &&
    /^(0|\+?86|17951)?(13[0-9]|14[579]|15[0-9]|16[6]|17[1-3,5-8]|18[0-9]|19[189])[0-9]{8}$/.test(
      value
    )
  );
}
/**
 * Check if value is an url address.
 */
export function isUrl(value) {
  // tslint:disable-next-line: max-line-length
  return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(
    value
  );
}
/**
 * Check if value is an IP address.
 */
export function isIp(value) {
  const v4 =
    '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
  const regV4 = new RegExp('^'.concat(v4, '$'));
  const v6seg = '[a-fA-F\\d]{1,4}';
  const v6 = [
    '(',
    '(?:'.concat(v6seg, ':){7}(?:').concat(v6seg, '|:)|'),
    '(?:'.concat(v6seg, ':){6}(?:').concat(v4, '|:').concat(v6seg, '|:)|'),
    '(?:'.concat(v6seg, ':){5}(?::').concat(v4, '|(:').concat(v6seg, '){1,2}|:)|'),
    '(?:'
      .concat(v6seg, ':){4}(?:(:')
      .concat(v6seg, '){0,1}:')
      .concat(v4, '|(:')
      .concat(v6seg, '){1,3}|:)|'),
    '(?:'
      .concat(v6seg, ':){3}(?:(:')
      .concat(v6seg, '){0,2}:')
      .concat(v4, '|(:')
      .concat(v6seg, '){1,4}|:)|'),
    '(?:'
      .concat(v6seg, ':){2}(?:(:')
      .concat(v6seg, '){0,3}:')
      .concat(v4, '|(:')
      .concat(v6seg, '){1,5}|:)|'),
    '(?:'
      .concat(v6seg, ':){1}(?:(:')
      .concat(v6seg, '){0,4}:')
      .concat(v4, '|(:')
      .concat(v6seg, '){1,6}|:)|'),
    '(?::((?::'.concat(v6seg, '){0,5}:').concat(v4, '|(?::').concat(v6seg, '){1,7}|:))'),
    ')(%[0-9a-zA-Z]{1,})?'
  ].join('');
  const regV6 = new RegExp('^'.concat(v6, '$'));
  return regV4.test(value) || regV6.test(value);
}
/**
 * Loosely validate an email address.
 */
export function isEmail(value) {
  const regEmail = /.+@.+\..+/;
  return regEmail.test(value);
}
function objToStr(val) {
  const ObjToStr = Object.prototype.toString;
  return ObjToStr.call(val);
}

export function isObject() {}
