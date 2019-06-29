<template>
    <div>
      <header-photo></header-photo>
      <div class="detailAll" v-for="( item , index) in productDetail" :key="index" v-if="currentId(item)">
        <div class="goBack"><a @click="$router.back()">产品介绍>>{{item.group}}</a>>>{{item.productName}}</div>
        <div class="detailTop">
          <div class="detailPhoto"><img :src="item.photoUrl" :alt="item.alt"></div><!--
      --><div class="detailTitle">
        <div class="detailName">
          <h2> {{item.productName}}</h2>
        </div>
        <div class="detail">
          {{item.detail}}
        </div>
      </div>
      </div>

      <div class="detailText">
        <div class="detailTextTitle">详细信息 ↓</div>
        <keep-alive>
          <component  v-for="(item , index) in productDetail" :key="index"
                      v-bind:is="currentView(item)">
          </component>
        </keep-alive>
<!--
        <div v-html="item.detailText">{{item.detailText}}</div>-->
      </div>
    </div>
    </div>
</template>

<script>
import HeaderPhoto from '../../modules/sloganPhoto'
import Adobe from './adobe/adobe'
import threeDSMAX from './autodesk/threeDSMAX'
import AutoCAD from './autodesk/autoCAD'
import Windows from './microsoft/windows'
import Office from './microsoft/office365'
import Drweb from './Drweb/Drweb'
import WacomCP from './wacom/WacomCP'
import WacomIP from './wacom/WacomIP'

export default {
  name: 'productDetail',
  components: {
    HeaderPhoto,
    Adobe,
    threeDSMAX,
    AutoCAD,
    Windows,
    Office,
    Drweb,
    WacomCP,
    WacomIP
  },
  data: function () {
    return {
      productDetail: [
        /* Dr.web----------------------------------------------------------------------------------- */
        {
          'productName': 'Dr.web',
          'group': 'Dr.web',
          'id': '2-1',
          'productId': '2-1-1',
          'photoUrl': require('../../../assets/img/homeproductPhotos/DrWeb.jpg'),
          'alt': 'Dr.web(大蜘蛛)',
          'detail': '全球最早的反病毒产品',
          'detailText': 'Drweb'
        },
        /* Autodesk 2-2----------------------------------------------------------------------------------- */
        {
          'productName': '3DS MAX',
          'group': 'Autodesk',
          'id': '2-2',
          'productId': '2-2-1',
          'photoUrl': require('../../../assets/img/productsPhotos/3DMax.jpg'),
          'alt': '3DS MAX',
          'detail': '3D 建模、动画和渲染软件',
          'detailText': 'threeDSMAX'
        },
        {
          'productName': 'AutoCAD',
          'group': 'Autodesk',
          'id': '2-2',
          'productId': '2-2-2',
          'photoUrl': require('../../../assets/img/productsPhotos/AutoCAD.jpg'),
          'alt': 'AutoCAD',
          'detail': '使用 AutoCAD® 软件中高效的创新工具创建逼真的设计并提高协作能力',
          'detailText': 'AutoCAD'
        },
        /* Microsoft 2-3----------------------------------------------------------------------------------- */
        {
          'productName': 'Windows',
          'group': 'Microsoft',
          'id': '2-3',
          'productId': '2-3-1',
          'photoUrl': require('../../../assets/img/productsPhotos/windows.jpg'),
          'alt': 'Windows',
          'detail': '到迄今为止最安全的Windows系统',
          'detailText': 'Windows'
        },
        {
          'productName': 'Office365',
          'group': 'Microsoft',
          'id': '2-3',
          'productId': '2-3-2',
          'photoUrl': require('../../../assets/img/productsPhotos/office365.jpg'),
          'alt': 'office365',
          'detail': '你熟悉的 Office，外加更便捷的协作工具，一切只为帮助你顺利完成更多工作',
          'detailText': 'Office'
        },
        /* Adobe 2-4 ----------------------------------------------------------------------------------- */
        {
          'productName': 'Adobe Creative Cloud',
          'group': 'Adobe',
          'id': '2-4',
          'productId': '2-4-1',
          'photoUrl': require('../../../assets/img/productsPhotos/ACC.jpg'),
          'alt': 'Adobe Creative Cloud',
          'detail': '16款创意应用程序套包，强大的设计组合',
          'detailText': 'Adobe'
        },
        /* Wacom----------------------------------------------------------------------------------- */
        {
          'productName': 'Wacom Cintiq Pro',
          'group': 'Wacom',
          'id': '2-5',
          'productId': '2-5-1',
          'photoUrl': require('../../../assets/img/wacomPhotos/wacomCP/logo.png'),
          'alt': 'Wacom Cintiq Pro',
          'detail': '为专业艺术家和设计师设计，提供世界领先的优秀的屏幕创作体验',
          'detailText': 'WacomCP'
        },
        {
          'productName': 'Wacom Intuos Pro',
          'group': 'Wacom',
          'id': '2-5',
          'productId': '2-5-2',
          'photoUrl': require('../../../assets/img/wacomPhotos/wacomIP/logo.png'),
          'alt': 'Wacom Intuos Pro',
          'detail': '为专业艺术家，设计师，摄像师等提供自然，精确，专业的数位板体验和创作力',
          'detailText': 'WacomIP'
        }
      ]
    }
  },
  methods: {
    currentId (item) {
      let currentId = this.$route.query.productId
      if (item.productId === currentId) {
        return item.productId
      }
    },
    currentView (item) {
      let currentView = this.$route.query.productId
      if (item.productId === currentView) {
        return item.detailText
      }
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/products/productDetail.css";
</style>
