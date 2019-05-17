<template>
<div class="productPhotoBox">
  <div class="responsive" v-for="(item, index) in productPhotos" :key="index">
    <div class="productPhotos">
      <a :href="item.pageUrl">
        <img :src="item.photoUrl" :alt="item.alt">
      </a>
      <div class="desc">{{item.desc}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'productPhotos',
  data: function () {
    return {
      productPhotos: [
        {
          'pageUrl': '#',
          'photoUrl': require('../../assets/img/productPhotos/adobe.png'),
          'alt': 'Adobe',
          'desc': 'Adobe'
        },
        {
          'pageUrl': '#',
          'photoUrl': require('../../assets/img/productPhotos/autodesk.png'),
          'alt': 'Autodesk',
          'desc': 'Autodesk'
        },
        {
          'pageUrl': '#',
          'photoUrl': require('../../assets/img/productPhotos/Microsoft.png'),
          'alt': 'Microsoft',
          'desc': 'Microsoft'
        },
        {
          'pageUrl': '#',
          'photoUrl': require('../../assets/img/productPhotos/DrWeb.jpg'),
          'alt': 'Dr.Web',
          'desc': 'Dr.Web'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/homeProductPhotos.css";
</style>
