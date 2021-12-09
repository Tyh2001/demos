// 获取 class
function $(Class) {
  return typeof Class === "string" ? document.querySelector(Class) : null;
}

// 获取全部
function $Al(ClassAll) {
  return typeof ClassAll === "string"
    ? document.querySelectorAll(ClassAll)
    : null;
}

// 获取id
function $D(id) {
  return typeof id === "string" ? document.getElementById(id) : null;
}
