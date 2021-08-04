/*
 * @Author: kingford
 * @Date: 2021-04-17 19:41:20
 * @LastEditTime: 2021-08-04 17:22:33
 */
import configList from './rollup.config';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

configList.map((config, index) => {
  config.plugins = [
    ...config.plugins,
    ...[
      filesize(),
      terser({
        output: {
          ascii_only: true // 仅输出ascii字符
        },
        compress: {
          pure_funcs: ['console.log'] // 去掉console.log函数
        }
      })
    ]
  ];

  return config;
});

export default configList;
