<template>
  <div>
    <div  class="ACC" v-for="( item , index) in adobeProducts" :key="index">
      <div class="ACCPhoto">
        <img :src="item.url">
      </div>
      <div class="ACCText">
        <h2>{{item.adobeName}}</h2>
        <p>{{item.adobeText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Adobe',
  data: function () {
    return {
      adobeProducts: [
        {
          'url': require('../../../../assets/img/adobePhotos/Ps.jpg'),
          'adobeName': 'Photoshop',
          'adobeText': '图像编辑和合成。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Ai.jpg'),
          'adobeName': 'Illustrator',
          'adobeText': '矢量图形和插图。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Id.jpg'),
          'adobeName': 'InDesign',
          'adobeText': '面向印刷和数字出版的页面设计和布局。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Xd.png'),
          'adobeName': 'Adobe XD',
          'adobeText': '设计和分享用户体验并为其创建原型。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Ae.jpg'),
          'adobeName': 'After Effects',
          'adobeText': '电影视觉效果和动态图形。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Pr.jpg'),
          'adobeName': 'Premiere Pro',
          'adobeText': '符合行业标准的专业视频和电影编辑。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Ap.jpg'),
          'adobeName': 'Acrobat Pro',
          'adobeText': '创建、编辑和签署 PDF 文档和表单。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Dw.jpg'),
          'adobeName': 'Dreamweaver',
          'adobeText': '设计和开发新式响应式网站。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Au.jpg'),
          'adobeName': 'Audition',
          'adobeText': '录音、混音和复原。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Lr.jpg'),
          'adobeName': 'Lightroom Classic',
          'adobeText': '以桌面为中心的照片编辑。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Ch.png'),
          'adobeName': 'Character Animator',
          'adobeText': '实时将 2D 人物制成动画。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Br.jpg'),
          'adobeName': 'Bridge',
          'adobeText': '集中管理您的创意资源。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Ic.jpg'),
          'adobeName': 'InCopy',
          'adobeText': '与文案人员和编辑合作。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/ME.jpg'),
          'adobeName': 'Media Encoder',
          'adobeText': '几乎可向任何屏幕快速输出视频文件。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/Pl.jpg'),
          'adobeName': 'Prelude',
          'adobeText': '元数据采集、记录和粗剪。'
        },
        {
          'url': require('../../../../assets/img/adobePhotos/An.jpg'),
          'adobeName': 'Animate',
          'adobeText': '适用于多个平台的交互式动画(以前称作 Flash Professional)。'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../../../assets/css/products/adobe.css";
</style>
