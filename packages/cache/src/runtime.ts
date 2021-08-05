/*
 * @Author: kingford
 * @Date: 2021-08-05 10:17:59
 * @LastEditTime: 2021-08-05 10:54:29
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
          ? ` Use "jin.esm-browser.js" instead.`
          : __GLOBAL__
          ? ` Use "jin.global.js" instead.`
          : ``) /* should not happen */
    )
  }
}
