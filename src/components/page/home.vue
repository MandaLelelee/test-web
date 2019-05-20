<template>
  <div>
    <carousel></carousel>
    <div class="content">
      <div class="contentTop">
        <h2><span>关于三体</span><p></p></h2>
        <div class="contentParagraph">
        <p>三体技术(广州)有限公司（Somtay 3体）总部位于广州市天河区，注册资金200万,是集研发、生产、服务和销售于一体的民营高新技术企业。
          三体公司自成立起，就始终秉承“与员工同命运，与客户同荣耀”的发展理念和服务宗旨，在管理上坚持以人为本，不断革新进步；在业务上坚持质量第一、服务第一，与广大客户共赢共进。
        </p>
        <p>当前，三体公司结合国内产业的特点和需求整合资源，致力于为大中企业提供专业的定制解决方案和智能化服务。
          同时，代理Dr.Web、微软、Adobe等国际知名软件，将先进技术和产品引入国内，为本地区的产业转型升级带来新的契机。
          我们将不会辜负时代慷慨赋予我们的历史性机遇，为构建万物互联的智能世界，一往无前。
        </p>
        </div>
        <officePhotos></officePhotos>
        <a href="/about"><button class="browseMore">了解更多信息</button></a>
      </div>
      <div class="contentBottom">
        <h2><span>推荐产品</span><p></p></h2>
        <productPhotos></productPhotos>
        <a href="/products"><button class="browseMore">浏览更多产品</button></a>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from '../modules/homeCarousel'
import officePhotos from '../modules/homeOfficePhotos'
import productPhotos from '../modules/homeProductPhotos'

export default {
  name: 'home',
  components: {
    carousel,
    officePhotos,
    productPhotos
  }
}
</script>

<style scoped>
@import "../../assets/css/home.css";
</style>
