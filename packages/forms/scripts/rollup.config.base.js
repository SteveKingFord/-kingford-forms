/*
 * @Author: kingford
 * @Date: 2021-04-17 19:40:40
 * @LastEditTime: 2021-04-17 22:07:21
 */
import { nodeResolve } from '@rollup/plugin-node-resolve'; // 解析 node_modules 中的模块
import commonjs from '@rollup/plugin-commonjs'; // cjs => esm
import alias from '@rollup/plugin-alias'; // alias 和 reslove 功能
import replace from '@rollup/plugin-replace';
import eslint from '@rollup/plugin-eslint';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';
import json from '@rollup/plugin-json'; // 支持在源码中直接引入json文件，不影响下面的
import { name, version, author } from '../package.json';

const main = 'index';
const banner =
  '/*!\n' +
  ` * ${name} v${version}\n` +
  ` * (c) 2021-${new Date().getFullYear()} ${author}\n` +
  ' * Released under the MIT License.\n' +
  ' */';

const isDev = process.env.NODE_ENV !== 'production';
console.log('----------dev:', process.env.NODE_ENV, isDev);

const outputs = [
  {
    file: `lib/${main}.js`,
    format: 'cjs',
    isExternal: true,
    name,
    banner
  },
  {
    file: `es/${main}.js`,
    format: 'es',
    isExternal: true,
    name,
    banner
  },
  {
    file: `dist/${main}.js`,
    format: 'umd',
    name,
    banner
  },
  {
    file: `dist/${main}.min.js`,
    format: 'umd',
    name,
    banner,
    plugins: [terser()]
  }
].map(i => {
  i.sourcemap = isDev; // 开发模式：开启sourcemap文件的生成
  return i;
});

export default {
  input: 'src/index.js',
  // 同时打包多种规范的产物
  output: outputs,
  // 注意 plugin 的使用顺序
  plugins: [
    json(),
    clear({
      targets: ['dist', 'lib', 'es']
    }),
    alias(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      preventAssignment: true
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    eslint({
      throwOnError: true, // 抛出异常并阻止打包
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    babel({ babelHelpers: 'bundled' })
  ]
};
