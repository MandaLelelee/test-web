<template>
<div class="partner">
  <div class="partnerPhotos" v-for="(item, index) in photos" :key="index">
        <img :src="item.photoUrl" :alt="item.alt">
  </div>
  <div>（注意：排名不分前后）</div>
</div>
</template>

<script>
export default {
  name: 'partner',
  data: function () {
    return {
      photos: [
        {
          'pageUrl': '#',
          'photoUrl': require('../../../assets/img/homeproductPhotos/adobe.png'),
          'alt': 'Adobe',
          'desc': 'Adobe'
        },
        {
          'pageUrl': '#',
          'photoUrl': require('../../../assets/img/homeproductPhotos/Microsoft.png'),
          'alt': 'Microsoft',
          'desc': 'Microsoft'
        },
        {
          'pageUrl': '#',
          'photoUrl': require('../../../assets/img/homeproductPhotos/DrWeb.jpg'),
          'alt': 'Dr.Web',
          'desc': 'Dr.Web'
        },
        {
          'pageUrl': '#',
          'photoUrl': require('../../../assets/img/homeproductPhotos/autodesk.png'),
          'alt': 'Autodesk',
          'desc': 'Autodesk'
        }
      ]
    }
  }
}
</script>

<style scoped>
  @import "../../../assets/css/about/partner.css";
</style>
