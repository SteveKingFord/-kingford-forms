/*
 * @Author: kingford
 * @Date: 2021-08-04 17:44:48
 * @LastEditTime: 2021-08-04 17:50:23
 */
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/cache.cjs.prod.js');
} else {
  module.exports = require('./dist/cache.cjs.js');
}
