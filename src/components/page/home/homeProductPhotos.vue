<template>
  <keep-alive>
<div class="productPhotoBox">
  <div class="responsive" v-for="(item, index) in productPhotos" :key="index">
    <div class="productPhotos">
      <router-link :to="{name:item.name ,query: {id: item.id}}" >
        <img :src="item.photoUrl" :alt="item.alt">
      </router-link>
      <div class="desc">{{item.desc}}</div>
    </div>
  </div>
</div>
  </keep-alive>
</template>

<script>
export default {
  name: 'productPhotos',
  data: function () {
    return {
      productPhotos: [
        {
          'name': 'Dr.web',
          'id': '2-1',
          'photoUrl': require('../../../assets/img/homeproductPhotos/DrWeb.jpg'),
          'alt': 'Dr.Web',
          'desc': 'Dr.Web'
        },
        {
          'name': 'Adobe',
          'id': '2-4',
          'photoUrl': require('../../../assets/img/homeproductPhotos/adobe.png'),
          'alt': 'Adobe',
          'desc': 'Adobe'
        },
        {
          'name': 'Autodesk',
          'id': '2-2',
          'photoUrl': require('../../../assets/img/homeproductPhotos/autodesk.png'),
          'alt': 'Autodesk',
          'desc': 'Autodesk'
        },
        {
          'name': 'Microsoft',
          'id': '2-3',
          'photoUrl': require('../../../assets/img/homeproductPhotos/Microsoft.png'),
          'alt': 'Microsoft',
          'desc': 'Microsoft'
        },
        {
          'name': 'Wacom',
          'id': '2-5',
          'photoUrl': require('../../../assets/img/homeproductPhotos/wacom.png'),
          'alt': 'Wacom',
          'desc': 'Wacom'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/home/homeProductPhotos.css";
</style>
