/**
 * 数组相减
 * 例如有两个数组：
 * const arr1 = [1,2,3,4,5,6] 和 const arr2 = [1,2,3]
 * 那么这时候需要第一个数组减去第二个数组中的项，返回剩下的项
 * 使用 subArr(arr1,arr2) 就可以解决这个问题
 * 返回 [4, 5, 6]
 * @param { Array } arr1 要处理的数组1
 * @param { Array } arr2 要处理的数组2
 * @returns 相减后的数组
 */

export const subArr = (arr1, arr2) => {
  if (arr1.length > arr2.length) {
    return arr1.filter((item1) => {
      return !arr2.find((item2) => {
        return item1 === item2
      })
    })
  } else {
    return arr2.filter((item1) => {
      return !arr1.find((item2) => {
        return item1 === item2
      })
    })
  }
}
