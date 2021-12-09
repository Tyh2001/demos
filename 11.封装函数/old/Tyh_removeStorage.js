/**
 * 删除本地存储数据
 * @param { String } name 本地存储名称
 */

export const removeStorage = name => {
    return window.localStorage.removeItem(name)
}
