<template>
  <div>
    <headerPhoto></headerPhoto>
    <div class="allContent">
      <!--左边菜单-->
      <div class="left">
        <div class="leftList">
          <ul>
            <li class="leftListTitle"><h2>产品介绍</h2></li>
            <li v-for="(item, index) in list" :key="index" @click="sendId(item)" class="leftListMenu">
              <router-link :to="{name:item.name,query: {id: item.id}}" :class="{'active':currentId(item)}">{{item.text}}</router-link>
            </li>
          </ul>
        </div>
      </div><!--右边内容，
      且用到inline-block，
      需两个div放在一起，
      无空格--><div class="right">
      <div class="rightContent">
        <div class="rightTitle" v-for="(item , index) in list" :key="index" v-if="currentId(item)">
          {{item.text}}
        </div>
        <hr>
      <!--  <keep-alive> // 用改变component的形式，可参考about关于我们、解决方案页面
          <component  v-for="(item , index) in list" :key="index"
                      v-bind:is="currentId(item)">
          </component>
        </keep-alive>-->
        <div class="productContent">
          <div class="products" v-for="( item , index) in productList" :key="index" v-if="currentId(item)">
            <router-link :to="{name:'productDetail' ,query: {productId: item.productId}}" @click="sendProductId(item)">
              <img :src="item.photoUrl" :alt="item.alt">
            </router-link>
            <div class="productsDetail">
              <span>{{item.alt}}</span>
              <p>{{item.detail}}</p>
            </div>
            <hr>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import headerPhoto from '../../modules/sloganPhoto'
export default {
  name: 'products',
  components: {
    headerPhoto
  },
  data: function () {
    return {
      list: [
        {
          'name': 'Dr.web',
          'id': '2-1',
          'text': 'Dr.web'
        },
        {
          'name': 'Autodesk',
          'id': '2-2',
          'text': 'Autodesk'
        },
        {
          'name': 'Microsoft',
          'id': '2-3',
          'text': 'Microsoft'
        },
        {
          'name': 'Adobe',
          'id': '2-4',
          'text': 'Adobe'
        },
        {
          'name': 'Wacom',
          'id': '2-5',
          'text': 'Wacom'
        }
      ],
      productList: [
        /* Dr.web 2-1 */
        {
          'name': 'Dr.web',
          'id': '2-1',
          'productId': '2-1-1',
          'photoUrl': require('../../../assets/img/homeproductPhotos/DrWeb.jpg'),
          'alt': 'Dr.web(大蜘蛛)',
          'detail': '全球最早的反病毒产品'
        },
        /* Autodesk 2-2 */
        {
          'name': '3DS MAX',
          'id': '2-2',
          'productId': '2-2-1',
          'photoUrl': require('../../../assets/img/productsPhotos/3DMax.jpg'),
          'alt': '3DS MAX',
          'detail': '3D 建模、动画和渲染软件'
        },
        {
          'name': 'AutoCAD',
          'id': '2-2',
          'productId': '2-2-2',
          'photoUrl': require('../../../assets/img/productsPhotos/AutoCAD.jpg'),
          'alt': 'AutoCAD',
          'detail': '使用 AutoCAD® 软件中高效的创新工具创建逼真的设计并提高协作能力'
        },
        /* Microsoft 2-3 */
        {
          'name': 'Windows',
          'id': '2-3',
          'productId': '2-3-1',
          'photoUrl': require('../../../assets/img/productsPhotos/windows.jpg'),
          'alt': 'Windows',
          'detail': '到迄今为止最安全的Windows系统'
        },
        {
          'name': 'Office365',
          'id': '2-3',
          'productId': '2-3-2',
          'photoUrl': require('../../../assets/img/productsPhotos/office365.jpg'),
          'alt': 'office365',
          'detail': '你熟悉的 Office，外加更便捷的协作工具，一切只为帮助你顺利完成更多工作'
        },
        /* Adobe 2-4 */
        {
          'name': 'Adobe Creative Cloud',
          'id': '2-4',
          'productId': '2-4-1',
          'photoUrl': require('../../../assets/img/productsPhotos/ACC.jpg'),
          'alt': 'Adobe Creative Cloud',
          'detail': '16款创意应用程序套包，强大的设计组合'
        },
        /* Wacom */
        {
          'name': 'Wacom Cintiq Pro',
          'id': '2-5',
          'productId': '2-5-1',
          'photoUrl': require('../../../assets/img/wacomPhotos/wacomCP/logo.png'),
          'alt': 'Wacom Cintiq Pro',
          'detail': '为专业艺术家和设计师设计，提供世界领先的优秀的屏幕创作体验'
        },
        {
          'name': 'Wacom Intuos Pro',
          'id': '2-5',
          'productId': '2-5-2',
          'photoUrl': require('../../../assets/img/wacomPhotos/wacomIP/logo.png'),
          'alt': 'Wacom Intuos Pro',
          'detail': '为专业艺术家，设计师，摄像师等提供自然，精确，专业的数位板体验和创作力'
        }
      ]
    }
  },
  methods: {
    sendId (item) { // 路径传参，用name+params(路由name要加/:id)或者path+query
      this.$router.push({name: item.name, query: {id: item.id}})
    },
    sendProductId (item) { // 传productId
      this.$router.push({name: item.name, query: {productId: item.productId}})
    },
    /* 判断id是否相同显示高亮还有右边组件 */
    currentId (item) {
      let currentId = this.$route.query.id
      if (item.id === currentId) {
        return item.id
      }
    }
  },
  watch: {
    '$route': 'currentId'
  }
}
</script>

<style scoped>
  @import "../../../assets/css/modules/allContent.css";
  @import "../../../assets/css/modules/leftSlider.css";
  @import "../../../assets/css/products/productList.css";
</style>
