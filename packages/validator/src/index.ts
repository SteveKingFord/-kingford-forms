/*
 * @Author: kingford
 * @Date: 2021-08-05 09:07:59
 * @LastEditTime: 2021-08-05 16:28:07
 */
import { isString } from './is'

/**
 * @description:手机号宽松校验
 * @param {string} phone
 * @return {*}  {boolean}
 */
export function isMobile(phone: string): boolean {
  if (!phone || !isString(phone)) {
    return false
  }
  const reg = /^1[3-9]\d{9}$/
  return reg.test(phone)
}

/**
 * @description:手机号严格校验
 * @param {string} phone
 * @return {*}  {boolean}
 */
export function isStrictMobile(phone: string): boolean {
  if (!phone || !isString(phone)) {
    return false
  }
  const reg =
    /^1(3[0-9]|4[01456879]|5[0-3,5-9]|6[2567]|7[0-8]|8[0-9]|9[0-3,5-9])d{8}$/
  return reg.test(phone)
}

/**
 * @description:邮箱校验
 * @param {string} email
 * @return {*}  {boolean}
 */
export function isEmail(email: string): boolean {
  if (!email || !isString(email)) {
    return false
  }
  const reg =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return reg.test(email)
}

/**
 * @description: 身份证校验
 * @param {string} idCard
 * @return {*}  {boolean}
 */
export function isIdCard(idCard: string): boolean {
  if (!idCard || !isString(idCard)) {
    return false
  }
  const reg = /(^d{15}$)|(^d{18}$)|(^d{17}(d|X|x)$)/

  return reg.test(idCard)
}

/**
 * @description: 银行卡校验
 * @param {string} code
 * @return {*}
 */
export function isBankCard(card: string): boolean {
  if (!card || !isString(card)) {
    return false
  }
  const reg = /^([1-9]{1})(\d{15}|\d{18})$/
  return reg.test(card)
}

/**
 * @description: 邮政编码校验
 * @param {string} code
 * @return {*}
 */
export function isPostalCode(code: string) {
  if (!code || !isString(code)) {
    return false
  }
  const reg = /^[1-9]d{5}$/

  return reg.test(code)
}
