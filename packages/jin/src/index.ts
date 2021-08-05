/*
 * @Author: kingford
 * @Date: 2021-08-05 09:27:01
 * @LastEditTime: 2021-08-05 09:51:05
 */

const STORE_KEY = 'sessionStorage'

function setupCache(name: string) {
  return `welcome to ${name} jin - ${STORE_KEY} -${getStore()}`
}

function getStore(isLocal: boolean = false) {
  return isLocal ? 'localStorage' : 'sessionStorage'
}

export { setupCache }
