/**
 * 获取本地存储
 * @param { String } name 本地存储名称
 */

export const getStorage = (name) => {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
