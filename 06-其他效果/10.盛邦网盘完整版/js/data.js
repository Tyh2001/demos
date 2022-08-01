// 1. id 查找元素本身
// 2. pid 查找元素父级
// 3. 查找元素所有父级
// 4. id 查找元素子集
// 5. id 查找元素所有子集
// 6. 渲染dom

var data = [
  {
    id: 0,
    pid: -1,
    title: '微云'
  },
  {
    id: 1,
    pid: 0,
    title: '我的文档'
  },
  {
    id: 2,
    pid: 0,
    title: '我的音乐'
  },
  {
    id: 2999,
    pid: 1,
    title: 'js程序设计'
  },
  {
    id: 29000,
    pid: 1,
    title: 'js权威指南'
  },
  {
    id: 23333,
    pid: 2,
    title: '王杰'
  },
  {
    id: 244444,
    pid: 2,
    title: '张国荣'
  },
  {
    id: 3,
    pid: 2,
    title: '周杰伦'
  },
  {
    id: 4000,
    pid: 3,
    title: '稻香'
  },
  {
    id: 4,
    pid: 3,
    title: '发如雪'
  },
  {
    id: 600,
    pid: 3,
    title: '夜曲'
  }
]
