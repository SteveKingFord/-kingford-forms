/*
 * @Author: kingford
 * @Date: 2021-08-05 10:18:08
 * @LastEditTime: 2021-08-05 10:54:48
 */
// This entry exports the runtime only, and is built as
// `dist/vue.esm-bundler.js` which is used by default for bundlers.
import { initDev } from './dev'
import { warn } from '@vue/runtime-dom'

if (__DEV__) {
  initDev()
}

export * from '@vue/runtime-dom'

export const compile = () => {
  if (__DEV__) {
    warn(
      `Runtime compilation is not supported in this build of jin.` +
        (__ESM_BUNDLER__
          ? ` Configure your bundler to alias "jin" to "jin/dist/jin.esm-bundler.js".`
          : __ESM_BROWSER__
          ? ` Use "vue.esm-browser.js" instead.`
          : __GLOBAL__
          ? ` Use "vue.global.js" instead.`
          : ``) /* should not happen */
    )
  }
}
