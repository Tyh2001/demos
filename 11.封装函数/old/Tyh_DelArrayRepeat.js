/**
 * 数组去重
 * @param { Array } arr 需要去重的数组
 * @returns 去重后的数组 如果传入的不是数组则返回空数组
 */

export const DelArrayRepeat = arr => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
