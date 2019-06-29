<template>
  <keep-alive>
<div class="partner">
  <div class="partnerPhotos" v-for="(item, index) in photos" :key="index">
        <img v-lazy="item.photoUrl" :alt="item.alt">
  </div><br><br>
  <div>（注意：排名不分前后）</div>
</div>
  </keep-alive>
</template>

<script>
export default {
  name: 'partner',
  data: function () {
    return {
      photos: [
        {
          'photoUrl': require('../../../assets/img/homeproductPhotos/adobe.png'),
          'alt': 'Adobe',
          'desc': 'Adobe'
        },
        {
          'photoUrl': require('../../../assets/img/homeproductPhotos/wacom.png'),
          'alt': 'Wacom',
          'desc': 'Wacom'
        },
        {
          'photoUrl': require('../../../assets/img/homeproductPhotos/Microsoft.png'),
          'alt': 'Microsoft',
          'desc': 'Microsoft'
        },
        {
          'photoUrl': require('../../../assets/img/homeproductPhotos/autodesk.png'),
          'alt': 'Autodesk',
          'desc': 'Autodesk'
        },
        {
          'photoUrl': require('../../../assets/img/homeproductPhotos/DrWeb.jpg'),
          'alt': 'Dr.Web',
          'desc': 'Dr.Web'
        }
      ]
    }
  }
}
</script>

<style scoped>
  @import "../../../assets/css/about/partner.css";
</style>
