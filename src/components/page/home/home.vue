<template>
  <div>
    <carousel></carousel>
    <div class="content">
      <div class="contentTop">
        <h2><span>关于三体</span><p></p></h2>
        <div class="contentParagraph">
          <p>三体技术(广州)有限公司（Somtay 3体）总部位于广州市天河区，注册资金200万，
            是集研发、生产、服务和销售于一体的信息技术服务提供商。</p>
          <p>三体公司自成立起，就始终秉承“与员工同命运，与客户同荣耀”的发展理念和服务宗旨，在管理上坚持以人为本，
            不断革新进步；在业务上坚持质量第一、服务第一，与广大客户共赢共进。</p>
          <p>当前，三体公司结合国内产业的特点和需求整合资源，为企业和个人提供专业的定制解决方案和智能化服务,
            帮助企业实现转型升级,推进地区产业融合发展，并致力于物联网、人工智能、无人机、大数据、区块链等新应用技术的研发。
            同时，我们还代理Adobe、微软、Dr.web、Wacom等知名产品，构建了以珠三角地区为核心、渠道遍布全国的销售网络。</p>
          <p>我们将不会辜负时代慷慨赋予我们的历史性机遇，为构建万物互联的智能世界，一往无前。</p>
        </div>
        <officePhotos></officePhotos>
        <router-link :to="{name:'About',query: {id: '1-1'}}">
          <button class="browseMore">了解更多信息</button>
        </router-link>
      </div>
      <div class="contentBottom">
        <h2><span>推荐产品</span><p></p></h2>
        <productPhotos></productPhotos>
        <router-link :to="{name:'Products',query: {id: '2-1'}}" >
          <button class="browseMore">浏览更多产品</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from '../../modules/carousel'
import officePhotos from './homeOfficePhotos'
import productPhotos from './homeProductPhotos'

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
@import "../../../assets/css/home/home.css";
</style>
