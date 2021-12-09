/**
 * 将多个数组合并成一个新的数组，并去重
 * 该方法可以传入一个或多个数组
 * @returns 将多个数组合并后并去重
 */

export const DelAllArrayRepeat = () => {
  const newArr = []
  for (let i = 0; i < arguments.length; i++) {
    newArr.push(...arguments[i])
  }
  return [...new Set([...newArr])]
}
