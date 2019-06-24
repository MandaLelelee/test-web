<template>
  <div>
    <headerPhoto></headerPhoto>
    <div class="contact">
      <h2><span>联系我们</span><p></p></h2>
      <div class="contactUs">
        <span>三体技术(广州)有限公司</span><br>
        <span>座机号码：</span>020-83726070<br>
        <span>手机号码：</span>15875000453（周经理）<br>
        <span>邮箱：</span>anson@somtay.com<br>
        <span>地址：</span>广州市天河区翰景路1号金星大厦5楼<br>
      </div>
      <div id="allmap"></div>
    </div>
  </div>
</template>

<script>
import headerPhoto from '../../modules/sloganPhoto'
import BMap from 'BMap'
export default {
  name: 'contact',
  components: {
    headerPhoto
  },
  mounted () {
    this.ready()
  },
  methods: {
    ready: function () {
      var map = new BMap.Map('allmap')

      var point = new BMap.Point(113.353667, 23.149757)

      map.centerAndZoom(point, 18)

      map.addControl(new BMap.MapTypeControl())

      map.enableScrollWheelZoom(true)

      map.enableDoubleClickZoom(true)

      var marker = new BMap.Marker(point) // 创建标注

      map.addOverlay(marker) // 将标注添加到地图中
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/contact/contact.css";
</style>
