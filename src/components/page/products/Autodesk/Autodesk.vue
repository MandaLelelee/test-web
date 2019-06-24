<template>
  <div class="productContent">
    <div class="products" v-for="( item , index) in list" :key="index">
      <router-link :to="{name:item.name}" >
        <img :src="item.photoUrl" :alt="item.alt">
      </router-link>
      <div class="productsDetail">
        <span>{{item.alt}}</span>
        <p>{{item.detail}}</p>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Microsoft',
  data: function () {
    return {
      list: [
        {
          'name': 'threeDSMAX',
          'photoUrl': require('../../../../assets/img/productsPhotos/3DMax.jpg'),
          'alt': '3DS MAX',
          'detail': '3D 建模、动画和渲染软件'
        },
        {
          'name': 'AutoCAD',
          'photoUrl': require('../../../../assets/img/productsPhotos/AutoCAD.jpg'),
          'alt': 'AutoCAD',
          'detail': '使用 AutoCAD® 软件中高效的创新工具创建逼真的设计并提高协作能力'
        }
      ]
    }
  }
}
</script>

<style scoped>
  @import "../../../../assets/css/products/M.css";
</style>
