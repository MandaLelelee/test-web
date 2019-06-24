<template>
  <div>
    <div class="carousel-wrap" id="carousel">
      <!--轮播图列表-->
      <transition-group tag="ul" class='slide-ul' name="list">
        <li v-for="(list,index) in slideList" :key="list.image" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
       <!--   <a :href="list.clickUrl">
            <img :src="list.image" :alt="list.desc">    </a>-->
            <img :src="list.image" :alt="list.desc">
          <!--弹出标语-->
          <span class="sloganDown">与员工同命运</span>
          <span class="sloganUp">与客户同荣耀</span>
        </li>
      </transition-group>
      <!--轮播图位置指示-->
      <div class="carousel-items">
        <span v-for="(item,index) in slideList.length" :key="item" :class="{'active':index===currentIndex}"
             @mouseover="change(index)"></span>
      </div>
    </div>
  </div>
</template>

<script>
/* import方法导入图片
   import a1 from '../assets/img/headerCarousel/a1.jpg'
   'image': a1 */

export default {
  name: 'carousel',
  data: function () {
    return {
      slideList: [
        {
          'clickUrl': '#',
          'desc': '图片1',
          'image': require('../../assets/img/headerCarousel/a1.png')
        },
        {
          'clickUrl': '#',
          'desc': '图片2',
          'image': require('../../assets/img/headerCarousel/a2.jpg')
        },
        {
          'clickUrl': '#',
          'desc': '图片3',
          'image': require('../../assets/img/headerCarousel/a3.jpg')
        },
        {
          'clickUrl': '#',
          'desc': '图片4',
          'image': require('../../assets/img/headerCarousel/a4.jpg')
        },
        {
          'clickUrl': '#',
          'desc': '图片5',
          'image': require('../../assets/img/headerCarousel/a5.jpg')
        }
      ],
      currentIndex: 0,
      timer: ''
    }
  },
  methods: {
    go () {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 3500)
    },
    stop () {
      clearInterval(this.timer)
      this.timer = null
    },
    change (index) {
      this.currentIndex = index
    },
    autoPlay () {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 3500)
    })
  }
}
</script>
<style scoped>
@import "../../assets/css/modules/carousel.css";
</style>
