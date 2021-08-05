/*
 * @Author: kingford
 * @Date: 2021-08-05 10:18:08
 * @LastEditTime: 2021-08-05 10:18:33
 */
import { initCustomFormatter } from '@vue/runtime-dom'

export function initDev() {
  if (__BROWSER__) {
    if (!__ESM_BUNDLER__) {
      console.info(
        `You are running a development build of KF.\n` +
          `Make sure to use the production build (*.prod.js) when deploying for production.`
      )
    }

    initCustomFormatter()
  }
}
