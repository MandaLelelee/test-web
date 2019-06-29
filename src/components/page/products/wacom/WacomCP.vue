<template>
  <keep-alive>
  <div class="WCP">
    <div class="introduce">
      <h3>Wacom Cintiq Pro搭配了Wacom最新的液晶数位屏技术，为专业艺术家和设计师设计，提供世界领先的优秀的屏幕创作体验。
      </h3>

      <p>1. <span>世界领先的笔技术</span> – 自然的笔体验，提供四倍的精确度及压力感应</p>

      <p>2. <span>杰出的显示性能</span> – 栩栩如生的色彩，4K分辨率（15.6”），为你带来出色的创作体验</p>

      <p>3. <span>轻薄设计及可选尺寸</span> – 选择最合适的产品，13英寸 (13.3”)与16英寸 (15.6”)</p>

      <p>4. <span>自然的交互</span> – 支持多点触控，自定义ExpressKey（可选），径向菜单，触控式快捷菜单，加速你的工作流程</p>
    </div><br>

    <div class="location">
      <h3>产品定位</h3>
      <h4>应用领域：</h4>
      <p>插图，插画，平面设计，ID设计，摄影&修图，动画，漫画，游戏开发，视频&电影编辑，3D渲染等</p>

      <h4>主要目标用户：</h4>
      <p>个人用户：插图，插画，平面设计，ID设计，摄影&修图，动画，漫画，游戏开发，视频&电影编辑，3D渲染等</p>
      <p>行业用户：艺术院校，数码娱乐公司，视频制作公司，CG教育培训机构，大中型企事业内部相关的设计部门，摄影工作室，设计公司，游戏公司以及个人工作室等</p>

    </div><br>

    <div class="photos" v-for="(item , index) in photos" :key="index">
      <h3>{{item.alt}}</h3>
      <img :src="item.url" :alt="item.alt">
    </div><br>

    <div class="guarantee">
      <h3>保修政策</h3>
      <p>液晶数位屏及压感笔提供2年保修服务</p>
      <p>电源适配器，连接线，笔座，转换接头提供1年保修服务</p>
    </div>
  </div>
  </keep-alive>
</template>

<script>
export default {
  name: 'WacomCP',
  data: function () {
    return {
      photos: [
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/front.png'),
          'alt': '前视图'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/side1.png'),
          'alt': '侧视图'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/side2.png'),
          'alt': ' '
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/side3.png'),
          'alt': ' '
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/side4.png'),
          'alt': ' '
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/after.png'),
          'alt': '后视图'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/pen.png'),
          'alt': 'Wacom Pro Pen 2'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/link.png'),
          'alt': 'Wacom Link 多媒体适配器'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/pen2.png'),
          'alt': 'WPro Pen 2 笔座'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/remote.png'),
          'alt': 'ExpressKey Remote（选配）'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/move.png'),
          'alt': 'Wacom移动支架（选配）'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/move2.png'),
          'alt': ' '
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/bag.png'),
          'alt': 'Carrying Case – 便携包（选配）'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/msg.png'),
          'alt': '产品基本信息'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/vs.png'),
          'alt': '产品线对比'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomCP/list.png'),
          'alt': '产品包装清单'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .WCP{
    line-height: 2em;
  }
  .introduce span{
    color: #18a6f0;
    font-size: 16px;
  }

  .photos{
    text-align: center;
  }
  .photos img{
    width: 800px;
    height: 400px;
  }
  .photos h3{
    text-align: left;
  }
</style>
