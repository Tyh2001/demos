/**
 * 将数组中的元素转换成统一数据类型：字符串、数字、对象、数组
 * 可以通过第二个参数来转换不同的类型
 * @param { Array } arr 需要转换的数组
 * @param { String } typ 需要转换的类型：str、num、obj、arr
 * @returns 转换统一类型的数组，该方法会改变原数组，规定类型除外的会被移除
 */

export const changeArrType = (arr, typ) => {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    // 字符串元素数组
    if (typ === 'str' && typeof arr[i] === 'string') {
      newArr.push(arr[i])
    }

    // 数字元素数组
    if (typ === 'num' && typeof arr[i] === 'number') {
      newArr.push(arr[i])
    }

    // 对象元素数组
    if (typ === 'obj' && typeof arr[i] === 'object' && !arr[i].length) {
      newArr.push(arr[i])
    }

    // 数组元素数组
    if (typ === 'arr' && typeof arr[i] === 'object' && arr[i].length) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
