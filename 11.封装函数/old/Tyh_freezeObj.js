/**
 * 对象冻结（不可被修改）
 * @param { Object } obj 对象名
 * @returns 被冻结的原对象
 */

export const freezeObj = (obj) => {
  return Object.freeze(obj)
}
