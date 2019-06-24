<template>
    <div class="productContent">
      <div class="products" v-for="( item , index) in list" :key="index">
        <router-link :to="{name:item.name ,query: {id: item.id}}" >
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
          'name': 'Windows',
          'id': '2-3-1',
          'photoUrl': require('../../../assets/img/productsPhotos/windows.jpg'),
          'alt': 'windows',
          'detail': '到迄今为止最安全的Windows系统'
        },
        {
          'name': 'Office365',
          'id': '2-3-2',
          'photoUrl': require('../../../assets/img/productsPhotos/office365.jpg'),
          'alt': 'office365',
          'detail': '你熟悉的 Office，外加更便捷的协作工具，一切只为帮助你顺利完成更多工作'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/products/M.css";
</style>
