/*
 * @Author: kingford
 * @Date: 2021-06-12 22:35:22
 * @LastEditTime: 2021-06-12 23:55:24
 */
const serve = require('rollup-plugin-serve');
import livereload from 'rollup-plugin-livereload';
import configList from './rollup.config';

const PORT = 3001;

configList.map((config, index) => {
  config.output.sourcemap = true;

  if (index === 0) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: PORT,
          contentBase: ['dist', 'lib', 'es', 'examples/brower'],
          openPage: 'index.html'
        }),
        livereload({
          watch: 'examples/brower'
        })
      ]
    ];
  }

  return config;
});

export default configList;
