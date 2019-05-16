<template>
<div>
  <h2 style="text-align:center">响应式图片相册</h2>
  <div class="responsive">
    <div class="img">
      <a target="_blank" href="img_fjords.jpg">
        <img src="//www.runoob.com/wp-content/uploads/2016/04/img_fjords.jpg" alt="Trolltunga Norway" width="300" height="200">
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
  <div class="responsive">
    <div class="img">
      <a target="_blank" href="img_forest.jpg">
        <img src="//www.runoob.com/wp-content/uploads/2016/04/img_forest.jpg" alt="Forest" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
  <div class="responsive">
    <div class="img">
      <a target="_blank" href="img_lights.jpg">
        <img src="//www.runoob.com/wp-content/uploads/2016/04/img_lights.jpg" alt="Northern Lights" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
  <div class="responsive">
    <div class="img">
      <a target="_blank" href="img_mountains.jpg">
        <img src="//www.runoob.com/wp-content/uploads/2016/04/img_mountains.jpg" alt="Mountains" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
  <div class="clearfix"></div>
  <div style="padding:6px;"><h4>重置浏览器大小查看效果</h4></div>
</div>
</template>

<script>
export default {
  name: 'productPhotos'
}
</script>

<style scoped>
@import "../../assets/css/productPhotos.css";
</style>
