/*
 * @Author: kingford
 * @Date: 2021-08-04 17:44:24
 * @LastEditTime: 2021-08-04 17:51:47
 */
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/validator.cjs.prod.js');
} else {
  module.exports = require('./dist/validator.cjs.js');
}
