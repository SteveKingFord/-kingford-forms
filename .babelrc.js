/*
 * @Author: kingford
 * @Date: 2021-04-16 21:26:34
 * @LastEditTime: 2021-04-17 19:58:16
 */
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // rollupjs 会处理模块，所以设置成 false
        modules: false,
      },
    ],
  ],
  plugins: [],
};
