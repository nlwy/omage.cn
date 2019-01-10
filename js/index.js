// index js animation
var index = {
  init(){
    this.showAnimation()
  },
  showAnimation(){
    document.querySelectorAll('[data-animate]').forEach(item => {
      var wHeight = document.documentElement.clientHeight || document.body.clientHeight
      var wTop = document.documentElement.scrollTop || document.body.scrollTop
      item.querySelectorAll('.hide').forEach(ele =>{
        if ((ele.offsetTop - wHeight < wTop) && ele.className.indexOf('show') === -1) {
          ele.className = ele.className + ' show'
        }
      })
      // if ((item.offsetTop - wHeight < wTop) && item.className.indexOf('show') === -1) {
      //   item.className = item.className + ' show'
      // }
    })
  }
}

window.addEventListener('load',()=> {
  index.init()
},false)
window.addEventListener('scroll', ()=> {
  index.showAnimation()
}, false)