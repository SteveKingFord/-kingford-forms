/*
 * @Author: kingford
 * @Date: 2021-04-17 19:41:03
 * @LastEditTime: 2021-04-17 21:57:26
 */
import baseConfig from './rollup.config.base';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    serve({
      port: 8080,
      contentBase: ['dist', 'lib', 'es', 'examples/brower'],
      openPage: 'index.html'
    }),
    livereload({
      watch: 'examples/brower'
    })
  ]
};
