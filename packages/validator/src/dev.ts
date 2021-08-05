/*
 * @Author: kingford
 * @Date: 2021-08-05 10:17:22
 * @LastEditTime: 2021-08-05 10:51:52
 */
import { initCustomFormatter } from '@vue/runtime-dom'

export function initDev() {
  if (__BROWSER__) {
    if (!__ESM_BUNDLER__) {
      console.info(
        `You are running a development build of kf.\n` +
          `Make sure to use the production build (*.prod.js) when deploying for production.`
      )
    }

    initCustomFormatter()
  }
}
