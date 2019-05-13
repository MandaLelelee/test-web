<template>
  <div>
  <!--  <img src="../assets/img/carousel-img/a2.png" style="height: 200px; width: 500px">-->
    <div class="carousel-wrap" id="carousel">
      <!--轮播图列表-->
      <transition-group tag="ul" class='slide-ul' name="list">
        <li v-for="(list,index) in slideList" :key="list.image" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
       <!--   <a :href="list.clickUrl">
            <img :src="list.image" :alt="list.desc">-->
          <a>
            <img :src="list.image">
          </a>
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
   import a1 from '../assets/img/carousel-img/a1.png'
   'image': a1 */

export default {
  name: 'carousel',
  data: function () {
    return {
      slideList: [
        {
          'clickUrl': '#',
          /*  'desc': 'rsdh', */
          'image': require('../assets/img/carousel-img/a1.png')
        },
        {
          'clickUrl': '#',
          'image': require('../assets/img/carousel-img/a2.png')
        },
        {
          'clickUrl': '#',
          'image': require('../assets/img/carousel-img/a3.png')
        },
        {
          'clickUrl': '#',
          'image': require('../assets/img/carousel-img/a4.png')
        },
        {
          'clickUrl': '#',
          'image': require('../assets/img/carousel-img/a5.png')
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
      }, 4000)
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
      }, 4000)
    })
  }
}
</script>
<style scoped>
@import "../assets/css/carousel.css";
</style>
