/**
 * 将一段小写数字转换为大写数字
 * 例如将 1234 转换为 一二三四
 * 注：该函数只能将数字转换为大写并返回，如果字符串中携带字母，则会被删除
 * @param { String Number } str 需要转换的字符串或者数字
 * @returns 转换为的大写数字
 */

export const changeStrSize = (str) => {
  if (typeof str !== 'string') {
    try {
      var str2 = str.toString()
    } catch (err) {
      console.error(err)
      return
    }
  }

  const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const array2 = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '零']
  const res = []

  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (str2[i] === array[j]) {
        res.push(array2[j])
      }
    }
  }

  let result = ''

  for (let m = 0; m < res.length; m++) {
    result += res[m]
  }

  return result
}
