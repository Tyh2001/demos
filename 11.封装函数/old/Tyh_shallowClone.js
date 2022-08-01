/**
 * 对象浅克隆
 * @param { Object } obj 需要克隆的对象
 * @returns 克隆好的新对象
 */

export const shallowClone = (obj) => {
  const newObj = {}
  for (const key in obj) {
    newObj[key] = obj[key]
  }
  return newObj
}
