<template>
<div class="scrollTop" @click="toTop" v-show="toTopIsShow">
     返回顶部↑
</div>
</template>

<script>
export default {
  name: 'scrollTop',
  data () {
    return {
      toTopIsShow: false// 控制回到顶部按钮是否显示
    }
  },
  // window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    // 点击回到顶部，加计时器是为了过渡顺滑
    toTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5) // 为负
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed // 为正
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    },
    // 为了计算距离顶部的高度，当高度大于300显示回顶部图标，小于300则隐藏
    scrollToTop () {
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 兼容
      that.scrollTop = scrollTop
      if (that.scrollTop > 300) {
        that.toTopIsShow = true
      } else {
        that.toTopIsShow = false
      }
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/scrollTop.css";
</style>
