(function () {
  var nowId = 0 //当前选中的文件夹
  var topId = 0 // 顶层id
  var topPid = -1 // 顶层pid

  /* 数据操作 */
  // 获取自己
  function getSelf (id) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        return data[i]
      }
    }
  }

  // 获取子级
  function getChild (id) {
    var child = []
    for (var i = 0; i < data.length; i++) {
      if (data[i].pid == id) {
        child.push(data[i])
      }
    }
    return child
  }

  // 获取父级
  function getParent (pid) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == pid) {
        return data[i]
      }
    }
  }

  // 获取所有父级
  function getAllParent (pid) {
    var allParent = []
    while (pid > -1) {
      var parent = getParent(pid)
      pid = parent.pid
      allParent.unshift(parent)
    }
    return allParent
  }

  // 添加子级
  function add (pid) {
    var newData = {
      id: Date.now(),
      title: getNewName(pid),
      pid: pid
    }
    data.push(newData)
  }

  // 获取一个新的文件夹名字
  function getNewName (pid) {
    var nowDatas = getChild(pid)
    var names = []
    for (var i = 0; i < nowDatas.length; i++) {
      var title = nowDatas[i].title
      if (
        (title.substr(0, 6) === "新建文件夹("
          && Number(title.substring(6, title.length - 1)) >= 2
          && title[title.length - 1] === ")")
        || title == "新建文件夹") {
        names.push(title)
      }
    }
    names.sort(function (n1, n2) {
      n1 = n1 == "新建文件夹" ? 0 : Number(n1.substring(6, title.length - 1))
      n2 = n2 == "新建文件夹" ? 0 : Number(n2.substring(6, title.length - 1))
      return n1 - n2
    })
    if (names[0] !== "新建文件夹") {
      return "新建文件夹"
    }
    for (var i = 1; i < names.length; i++) {
      if (names[i] != "新建文件夹(" + (i + 1) + ")") {
        return "新建文件夹(" + (i + 1) + ")"
      }
    }
    return "新建文件夹(" + (i + 1) + ")"
  }

  // 获取所有子级
  function getAllChild (pid) {
    var child = getChild(pid)
    for (var i = 0; i < child.length; i++) {
      if (getChild(child[i].id).length > 0) {
        child = child.concat(getChild(child[i].id))
      }
    }
    return child
  }
  // 删除子级
  function removeData (id) {
    var self = getSelf(id)
    var removeItem = getAllChild(id).concat(self)
    for (var i = 0; i < removeItem.length; i++) {
      var index = data.indexOf(removeItem[i])
      data.splice(index, 1)
    }
  }
  // 判断是否重名
  function testName (title, pid, id) {
    var child = getChild(pid)
    for (var i = 0; i < child.length; i++) {
      if (child[i].title == title
        && child[i].id != id) {
        return true
      }
    }
    return false
  }

  // 判断是否是它自己或它的子目录
  function testSelf (id, pid) {
    if (id == pid) {
      return true
    }
    var child = getAllChild(id)
    for (var i = 0; i < child.length; i++) {
      if (child[i].id == pid) {
        return true
      }
    }
    return false
  }

  // 判断当前是否全选
  function isCheckedAll () {
    var child = getChild(nowId)
    for (var i = 0; i < child.length; i++) {
      if (!child[i].checked) {
        return false
      }
    }
    return true
  }
  // 获取选中的文件夹
  function getCheckedData () {
    var child = getChild(nowId)
    var checkedData = []
    for (var i = 0; i < child.length; i++) {
      if (child[i].checked) {
        checkedData.push(child[i])
      }
    }
    return checkedData
  }

  /* 视图渲染 */
  var treeMenu = document.getElementById("tree-menu")

  // 渲染 侧边栏 无限级菜单
  treeMenu.innerHTML = createTreeMenu(topPid, 0)

  //获取当前这项是否需要展开
  function isOpen (id, open) {
    // id 当前数据项id 
    //  open 是否传入open状态
    if (open) { //如果传入了open状态代表目前我们需要open
      return true
    }
    // 如果没有 open 状态，判断当前项 是否是 nowId 或者 他的父级
    if (id == nowId) {
      return true
    }
    var nowAllParent = getAllParent(nowId)
    for (var i = 0; i < nowAllParent.length; i++) {
      if (id == nowAllParent[i].id) {
        return true
      }
    }
    return false
  }

  // 无限级菜单渲染
  function createTreeMenu (pid, level, open) {
    // level 当前处在第几级，我们需要根据它的层级给一个缩进
    // 这里注意 移动到弹窗 每一项都需要展开而侧边栏导航只有 nowId 当前选中这项或这项的所有父级才需要展开,如果传入了 open 我们就认为是移动到弹窗的
    var nowData = getChild(pid)//获取到当前组的内容
    var inner = "<ul>"//inner 用来存放我们的内容

    for (var i = 0; i < nowData.length; i++) {
      var hasChild = getChild(nowData[i].id).length > 0 //获取当前项是否有子项
      inner += '<li class="' + (isOpen(nowData[i].id, open) ? "open" :
        "") + '">'
      inner += '<p data-id="' + nowData[i].id + '" style="padding-left:' + (level * 20 + 40) + 'px" class="' + (hasChild ? 'has-child' : '') + " " + (nowId == nowData[i].id ? "active" : "") + '"><span>' + nowData[i].title + '</span></p>'
      if (hasChild) {//如果当前项有子项，就在这里再生成一个子级的ul
        inner += createTreeMenu(nowData[i].id, level + 1, open)
      }
      inner += '</li>'
    }
    inner += "</ul>"
    return inner
  }

  // 渲染路径导航
  var breadNav = document.querySelector(".bread-nav")
  breadNav.innerHTML = createBreadNav()
  function createBreadNav () {
    var inner = ""
    var self = getSelf(nowId)
    var allParent = getAllParent(self.pid)
    for (var i = 0; i < allParent.length; i++) {
      inner += '<a data-id="' + allParent[i].id + '">' + allParent[i].title + '</a>'
    }
    inner += '<span>' + self.title + '</span>'
    return inner
  }

  //渲染文件夹区域
  var folders = document.getElementById("folders")
  var checkedAll = document.getElementById("checked-all")
  folders.innerHTML = createFolders()
  function createFolders () {
    var child = getChild(nowId)
    var inner = ""
    if (child.length == 0) {
      folders.classList.add("folders-empty")
      checkedAll.checked = false
      return ""
    }
    folders.classList.remove("folders-empty")
    checkedAll.checked = isCheckedAll()
    for (var i = 0; i < child.length; i++) {
      inner += '<li class="folder-item ' + (child[i].checked ? "active" : "") + '" data-id="' + child[i].id + '">'
      inner += '<img src="img/folder-b.png" alt="">'
      inner += '<span class="folder-name">' + child[i].title + '</span>'
      inner += '<input type="text" class="editor" value="">'
      inner += '<label class="checked">'
      inner += '<input type="checkbox" ' + (child[i].checked ? "checked" : "") + ' />'
      inner += '<span class="iconfont icon-checkbox-checked"></span>'
      inner += '</label>'
      inner += '</li>'
    }
    return inner
  }
  /* 三大视图点击切换 */

  // 左侧菜单点击切换
  treeMenu.onclick = function (e) {
    var item
    switch (e.target.tagName) {
      case "P":
        item = e.target
        break
      case "SPAN":
        item = e.target.parentNode
        break
    }
    if (item) {
      nowId = item.dataset.id
      treeMenu.innerHTML = createTreeMenu(topPid, 0)
      breadNav.innerHTML = createBreadNav()
      folders.innerHTML = createFolders()
    }
  }
  //路径导航点击事件添加
  breadNav.onclick = function (e) {
    if (e.target.tagName == "A") {
      nowId = e.target.dataset.id
      treeMenu.innerHTML = createTreeMenu(topPid, 0)
      breadNav.innerHTML = createBreadNav()
      folders.innerHTML = createFolders()
    }
  }
  //文件夹视图点击切换
  folders.onclick = function (e) {
    var item
    switch (e.target.tagName) {
      case "LI":
        item = e.target
        break
      case "IMG":
        item = e.target.parentNode
        break
    }
    if (item) {
      nowId = item.dataset.id
      treeMenu.innerHTML = createTreeMenu(topPid, 0)
      breadNav.innerHTML = createBreadNav()
      folders.innerHTML = createFolders()
    } else if (e.target.className == "folder-name") { //文件夹重命名
      item = e.target.parentNode
      rename(item)
    }
  }

  /* 新建文件夹 */
  var createBtn = document.querySelector(".create-btn")
  createBtn.onclick = function () {
    add(nowId)
    treeMenu.innerHTML = createTreeMenu(topPid, 0)
    folders.innerHTML = createFolders()
    successPopup("添加文件成功")
  }

  /* 各种弹窗 */

  // 操作成功提示
  var alertSuccess = document.querySelector(".alert-success")
  var successTimer = 0
  function successPopup (info) {
    // info 需要提示的信息
    alertSuccess.innerHTML = info
    alertSuccess.classList.add("alert-show")
    clearTimeout(successTimer)
    successTimer = setTimeout(function () {
      alertSuccess.classList.remove("alert-show")
    }, 2000)
  }

  // 操作失败提示
  var alertWarning = document.querySelector(".alert-warning")
  var warningTimer = 0
  function warningPopup (info) {
    // 需要提示信息
    alertWarning.innerHTML = info
    alertWarning.classList.add("alert-show")
    clearTimeout(warningTimer)
    warningTimer = setTimeout(function () {
      alertWarning.classList.remove("alert-show")
    }, 2000)
  }

  /* 右键菜单 */
  var contextmenu = document.querySelector("#contextmenu")
  var contextmenuBtn = contextmenu.children
  document.oncontextmenu = function () {
    contextmenu.style.display = "none"
    return false
  }

  // 文件夹右键菜单
  var active_id = 0
  folders.oncontextmenu = function (e) {
    var item
    switch (e.target.tagName) {
      case "LI":
        item = e.target
        break
      case "IMG":
        item = e.target.parentNode
        break
    }
    if (item) {
      active_id = item.dataset.id
      contextmenu.style.left = e.clientX + "px"
      contextmenu.style.top = e.clientY + "px"
      contextmenu.style.display = "block"
      e.cancelBubble = true
      return false
    }
  }
  document.onmousedown = function () {
    contextmenu.style.display = "none"
  }
  contextmenu.onmousedown = function (e) {
    e.cancelBubble = true
  }

  // 删除当前文件夹
  contextmenuBtn[0].onclick = function () {
    showConfirm("确定删除当前文件夹吗?", function () {
      removeData(active_id)
      treeMenu.innerHTML = createTreeMenu(topPid, 0)
      folders.innerHTML = createFolders()
      successPopup("删除文件夹成功")
    })
    contextmenu.style.display = "none"
  }
  // 移动当前文件夹
  contextmenuBtn[1].onclick = function () {
    contextmenu.style.display = "none"
    showMoveAlert(function () {
      // move_pid 移动到的目录
      // active_id 当前目录
      var self = getSelf(active_id)
      if (testName(self.title, move_pid)) {
        warningPopup("文件夹有重名不能移动")
        return
      }
      if (testSelf(active_id, move_pid)) {
        warningPopup("不能移动到《" + self.title + "》及其子目录下")
        return
      }
      self.pid = move_pid
      moveAlert.classList.remove("move-alert-show")
      mask.style.display = "none"
      nowId = move_pid
      treeMenu.innerHTML = createTreeMenu(topPid, 0)
      folders.innerHTML = createFolders()
      breadNav.innerHTML = createBreadNav()
      successPopup("文件夹移动成功")
    })
  }

  // 文件夹重命名
  function rename (el) {
    var folderName = el.querySelector(".folder-name")
    var editor = el.querySelector(".editor")
    var id = el.dataset.id
    var self = getSelf(id)
    folderName.style.display = "none"
    editor.value = folderName.innerHTML
    editor.style.display = "block"
    editor.select()
    editor.onblur = function () {
      var newName = editor.value
      if (newName.trim() === "") {
        warningPopup("请输入内容")
        editor.focus()
        return
      }
      if (testName(newName, nowId, id)) {
        warningPopup("重名了，再起个名字吧")
        editor.focus()
        return
      }
      self.title = newName
      folderName.innerHTML = newName
      folderName.style.display = "block"
      editor.style.display = "none"
      treeMenu.innerHTML = createTreeMenu(topPid, 0)
      successPopup("重命名成功")
    }
  }
  contextmenuBtn[2].onclick = function () {
    var folderItem = folders.querySelector('.folder-item[data-id="' + active_id + '"]')
    contextmenu.style.display = "none"
    rename(folderItem)
  }

  /* 文件夹的全选操作 */

  // 全选按钮的操作
  checkedAll.onchange = function () {
    var nowData = getChild(nowId)
    for (var i = 0; i < nowData.length; i++) {
      nowData[i].checked = this.checked
    }
    folders.innerHTML = createFolders()
  }
  // 每个文件夹的选中操作
  folders.onchange = function (e) {
    if (e.target.parentNode.className == "checked") {
      var folderItem = e.target.parentNode.parentNode
      var self = getSelf(folderItem.dataset.id)
      self.checked = e.target.checked
      if (self.checked) {
        folderItem.classList.add("active")
      } else {
        folderItem.classList.remove("active")
      }
      checkedAll.checked = isCheckedAll()
    }
  }
  // 框选操作
  document.onselectstart = function () {
    return false
  }
  folders.onmousedown = function (e) {
    if (e.target == folders) {
      // 在空白区域按下准备话框
      var selectBox = null
      var startClient = {
        x: e.clientX,
        y: e.clientY
      }
      var folderItem = folders.querySelectorAll(".folder-item")
      document.onmousemove = function (e) {
        var nowClient = {
          x: e.clientX,
          y: e.clientY
        }
        if (!selectBox) {
          selectBox = document.createElement("div")
          selectBox.id = "select-box"
          document.body.appendChild(selectBox)
        }
        selectBox.style.left = Math.min(nowClient.x, startClient.x) + "px"
        selectBox.style.top = Math.min(nowClient.y, startClient.y) + "px"
        selectBox.style.width = Math.abs(nowClient.x - startClient.x) + "px"
        selectBox.style.height = Math.abs(nowClient.y - startClient.y) + "px"
        for (var i = 0; i < folderItem.length; i++) {
          var checked = folderItem[i].querySelector('input[type="checkbox"]')
          var self = getSelf(folderItem[i].dataset.id)
          self.checked = checked.checked = isCollision(folderItem[i], selectBox)
          if (self.checked) {
            folderItem[i].classList.add("active")
          } else {
            folderItem[i].classList.remove("active")
          }
        }
        checkedAll.checked = isCheckedAll()
      }
      document.onmouseup = function () {
        if (selectBox) {
          document.body.removeChild(selectBox)
        }
        document.onmousemove = document.onmouseup = null
      }
    }
  }
  // 碰撞检测
  function isCollision (el, el2) {
    var elRect = el.getBoundingClientRect()
    var el2Rect = el2.getBoundingClientRect()
    if (elRect.top > el2Rect.bottom
      || el2Rect.top > elRect.bottom
      || elRect.left > el2Rect.right
      || el2Rect.left > elRect.right) {
      return false//没有碰撞
    }
    return true//碰撞
  }

  /* 文件夹批量操作 */

  // 批量删除文件夹
  var delBtn = document.querySelector(".del-btn")
  delBtn.onclick = function () {
    var checkedData = getCheckedData()
    if (checkedData.length == 0) {
      warningPopup("请先选择要操作的文件夹")
      return
    }
    showConfirm("确定删除选中的文件夹吗", function () {
      for (var i = 0; i < checkedData.length; i++) {
        removeData(checkedData[i].id)
      }
      treeMenu.innerHTML = createTreeMenu(topPid, 0)
      folders.innerHTML = createFolders()
      successPopup("删除文件夹成功")
    })
  }

  // 批量移动文件夹
  var moveBtn = document.querySelector(".move-btn")
  moveBtn.onclick = function () {
    var checkedData = getCheckedData()
    if (checkedData.length == 0) {
      warningPopup("请先选择要操作的文件夹")
      return
    }
    showMoveAlert(function () {
      for (var i = 0; i < checkedData.length; i++) {
        if (testName(checkedData[i].title, move_pid)) {
          warningPopup("文件夹有重名不能移动")
          return
        }
        if (testSelf(checkedData[i].id, move_pid)) {
          warningPopup("不能移动到《" + checkedData[i].title + "》及其子目录下")
          return
        }
      }
      for (var i = 0; i < checkedData.length; i++) {
        checkedData[i].pid = move_pid
      }
      moveAlert.classList.remove("move-alert-show")
      mask.style.display = "none"
      nowId = move_pid
      treeMenu.innerHTML = createTreeMenu(topPid, 0)
      folders.innerHTML = createFolders()
      breadNav.innerHTML = createBreadNav()
      successPopup("文件夹移动成功")
    })
  }

  /* confirm 弹窗 */
  var elConfirm = document.querySelector(".confirm")
  var confirmClos = elConfirm.querySelector(".clos")
  var confirmTxt = elConfirm.querySelector(".confirm-text")
  var confirmBtns = elConfirm.querySelectorAll(".confirm-btns a")
  var mask = document.getElementById("mask")
  function showConfirm (txt, cb) {
    mask.style.display = "block"
    elConfirm.classList.add("confirm-show")
    confirmTxt.innerHTML = txt
    confirmBtns[0].onclick = confirmClos.onclick = function () {
      elConfirm.classList.remove("confirm-show")
      mask.style.display = "none"
      cb && cb()
    }
  }
  confirmBtns[1].onclick = confirmClos.onclick = function () {
    elConfirm.classList.remove("confirm-show")
    mask.style.display = "none"
  }

  /* 移动到弹窗 */
  var moveAlert = document.querySelector(".move-alert")
  var moveClos = moveAlert.querySelector(".clos")
  var moveAlertMenu = moveAlert.querySelector(".move-alert-menu")
  var moveBtns = moveAlert.querySelectorAll(".confirm-btns a")
  var move_pid = 0
  moveAlertMenu.onclick = function (e) {
    var item
    switch (e.target.tagName) {
      case "P":
        item = e.target
        break
      case "SPAN":
        item = e.target.parentNode
        break
    }
    if (item) {
      var p = moveAlertMenu.querySelectorAll("p")
      move_pid = item.dataset.id
      for (var i = 0; i < p.length; i++) {
        p[i].classList.remove("active")
      }
      item.classList.add("active")
    }
  }
  moveClos.onclick = moveBtns[1].onclick = function () {
    mask.style.display = "none"
    moveAlert.classList.remove("move-alert-show")
  }
  function showMoveAlert (cb) {
    move_pid = nowId
    moveAlertMenu.innerHTML = createTreeMenu(topPid, 0, true)
    mask.style.display = "block"
    moveAlert.classList.add("move-alert-show")
    moveBtns[0].onclick = function () {
      cb()
    }
  }
})();
