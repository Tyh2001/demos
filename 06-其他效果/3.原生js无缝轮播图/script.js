// var container = document.getElementById("container");
var list = document.getElementById('list')
var buttons = document.getElementById('buttons').getElementsByTagName('span')
var desc = document.getElementById('desc')
var prev = document.getElementById('prev')
var next = document.getElementById('next')
var index = 1
// 动画状态存放，防止在动画切换过程中时点击按钮还在切换，所以要保证动画切换完成了，才可以手动切换下一张
var animated = false
var timer

// 显示小圆点
function showButton() {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].className == 'on') {
      buttons[i].className = ''
      break
    }
  }
  buttons[index - 1].className = 'on'
}

// 切换图片
function cutPage(offset) {
  animated = true
  var newLeft = parseInt(list.style.left) + offset

  // 平缓滑动切换的动画效果
  var time = 300 // 位移总时间
  var interval = 10 // 位移时间间隔
  var speed = offset / (time / interval) //每次位移量
  function go() {
    if (
      (speed < 0 && parseInt(list.style.left) > newLeft) ||
      (speed > 0 && parseInt(list.style.left) < newLeft)
    ) {
      list.style.left = parseInt(list.style.left) + speed + 'px'
      setTimeout(go, interval)
    } else {
      animated = false

      list.style.left = newLeft + 'px'
      // 无限滚动
      if (newLeft > -400) {
        list.style.left = -2000 + 'px'
      }
      if (newLeft < -2000) {
        list.style.left = -400 + 'px'
      }
    }
  }
  go()
}

// 切换文本
function cutText() {
  var imgs = list.children
  for (var i = 0; i < imgs.length; i++) {
    var alt = imgs[i].getAttribute('alt')
    if (alt == index) {
      var text = imgs[parseInt(alt)].getAttribute('title')
      //   desc.firstChild.nodeValue = text;
      break
    }
  }
}

// 箭头切换图片
next.onclick = function () {
  console.log(index)
  if (index == 5) {
    index = 1
  } else {
    index += 1
  }
  showButton()
  cutText()
  if (!animated) {
    cutPage(-400)
  }
}
prev.onclick = function () {
  if (index == 1) {
    index = 5
  } else {
    index -= 1
  }
  showButton()
  cutText()
  if (!animated) {
    cutPage(400)
  }
}

// 点击圆点切换图片
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    if (this.className == 'on') {
      return
    }
    var myindex = parseInt(this.getAttribute('index'))
    var offset = -400 * (myindex - index)
    cutPage(offset)
    index = myindex
    showButton()
  }
}

// 自动切换
function play() {
  timer = setInterval(function () {
    next.onclick()
  }, 3000)
}
function stop() {
  clearInterval(timer)
}

container.onmouseout = play
container.onmouseover = stop
play()
