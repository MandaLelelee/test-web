<template>
  <keep-alive>
    <div class="WIP">
      <div class="introduce">
      <h3>Wacom Intuos Pro数位板采用了全新的Wacom笔技术，为专业艺术家，设计师，摄像师等提供自然，精确，专业的数位板体验和创作力。</h3>

      <p>1. <span>世界领先的笔技术</span> – 自然的笔体验，提供四倍压力感应</p>

      <p>2. <span>从纸上素描到数字作品</span> – 在任何地方使用Wacom Finetip Pen在纸上进行创作，数字内容将会被同时保存到数位板，并可以轻松传到PC或Mac上</p>

      <p>3. <span>连接PC或Mac</span> – 通过蓝牙或USB，连接数位板到PC或Mac，使用2D，3D软件进一步完成创作</p>

      <p>4. <span>提高效率</span> – 使用多点触控，自定义ExpressKey，触控环等，使创作更加自然便捷</p>
      </div><br>
      <div class="location">
        <h3>产品定位</h3>
        <h4>应用领域：</h4>
        <p>插图，插画，平面设计，ID设计，摄影&修图，动画，漫画，游戏开发，视频&电影编辑，3D渲染等</p>

        <h4>主要目标用户：</h4>
        <p>个人用户：专业创意人士或者创意发烧友</p>
        <p>行业用户：艺术院校，数码娱乐公司，视频制作公司，CG教育培训机构，大中型企事业内部相关的设计部门，摄影工作室，设计公司，游戏公司以及个人工作室等</p>

      </div><br>

      <div class="photos" v-for="(item , index) in photos" :key="index">
        <h3>{{item.alt}}</h3>
        <img :src="item.url" :alt="item.alt">
      </div><br>

      <div class="guarantee">
        <h3>保修政策</h3>
        <p>数位板及压感笔提供1年保修服务</p>
      </div>
    </div>
  </keep-alive>
</template>

<script>
export default {
  name: 'WacomIP',
  data: function () {
    return {
      photos: [
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomIP/front.png'),
          'alt': '前视图'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomIP/after.png'),
          'alt': '侧视图'
        },
        {
          'url': require('../../../../assets/img/wacomPhotos/wacomIP/side.png'),
          'alt': '后视图'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .WIP{
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
