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
        <div class="rightTitle" v-for="(item , index) in list" :key="index" v-if="currentView(item)">
          {{item.text}}
        </div>
        <hr>
        <keep-alive>
          <component  v-for="(item , index) in list" :key="index"
                      v-bind:is="currentId(item)">
          </component>
        </keep-alive>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import headerPhoto from '../../modules/sloganPhoto'
import Adobe from './Adobe'
import Autodesk from './Autodesk/Autodesk'
import Microsoft from './Microsoft'
import Drweb from './Dr.web'

export default {
  name: 'products',
  components: {
    headerPhoto,
    Adobe,
    Autodesk,
    Microsoft,
    Drweb
  },
  data: function () {
    return {
      list: [
        {
          'name': 'Adobe',
          'id': '2-1',
          'text': 'Adobe'
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
          'name': 'Drweb',
          'id': '2-4',
          'text': 'Dr.web'
        }
      ]
    }
  },
  methods: {
    sendId (item) { // 路径传参，用name+params(路由name要加/:id)或者path+query
      this.$router.push({name: item.name, query: {id: item.id}})
    },
    /* 判断id是否相同显示高亮还有右边组件 */
    currentId (item) {
      let currentId = this.$route.query.id
      if (item.id === currentId) {
        return item.name
      }
    },
    /* 判断id是否相同显示标题 */
    currentView (item) {
      let currentId = this.$route.query.id
      if (item.id === currentId) {
        return item.text
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
</style>
