/*!
 * @kingfor/forms v1.0.0
 * (c) 2021-2021 kingford
 * Released under the MIT License.
 */
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/*
 * @Author: kingford
 * @Date: 2021-04-17 20:22:35
 * @LastEditTime: 2021-04-17 20:52:53
 */
function formatDate(date) {
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd hh:mm:ss';

  if (typeof date === 'string') {
    return date;
  }

  date = new Date(date);
  var o = {
    'M+': date.getMonth() + 1,
    // 月份
    'd+': date.getDate(),
    // 日
    'h+': date.getHours(),
    // 时
    'm+': date.getMinutes(),
    // 分
    's+': date.getSeconds(),
    // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3),
    // 季度
    S: date.getMilliseconds() // 毫秒

  };
  if (!date || date == null) return null;

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }

  return fmt;
}

var date = /*#__PURE__*/Object.freeze({
  __proto__: null,
  formatDate: formatDate
});

/*
 * @Author: kingford
 * @Date: 2021-04-16 10:04:05
 * @LastEditTime: 2021-04-17 20:54:38
 */
function debounce(func, delay) {
  var timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      func();
    }, delay);
  };
}

var debouce = /*#__PURE__*/Object.freeze({
  __proto__: null,
  debounce: debounce
});

var index = _objectSpread2(_objectSpread2({}, debouce), date);

module.exports = index;
//# sourceMappingURL=index.js.map
