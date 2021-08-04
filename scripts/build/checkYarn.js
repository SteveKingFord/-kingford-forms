/*
 * @Author: kingford
 * @Date: 2021-08-04 17:57:52
 * @LastEditTime: 2021-08-04 17:59:25
 */
if (!/yarn\.js$/.test(process.env.npm_execpath || '')) {
  console.warn(
    '\u001b[33mThis repository requires Yarn 1.x for scripts to work properly.\u001b[39m\n'
  );
  process.exit(1);
}
