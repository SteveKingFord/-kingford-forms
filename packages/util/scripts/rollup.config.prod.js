/*
 * @Author: kingford
 * @Date: 2021-04-17 19:41:20
 * @LastEditTime: 2021-04-17 19:43:40
 */
import baseConfig from "./rollup.config.base";
import filesize from "rollup-plugin-filesize";

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins, filesize()],
};
