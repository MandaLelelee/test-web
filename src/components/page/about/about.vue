<template>
  <div>
    <headerPhoto></headerPhoto>
    <div class="allContent">
      <!--左边菜单-->
      <div class="left">
        <div class="leftList">
          <ul>
            <li class="leftListTitle"><h2>关于我们</h2></li>
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
import Partner from './partner'
import CompanyProfile from './companyProfile'

export default {
  name: 'about',
  components: {
    CompanyProfile,
    Partner,
    headerPhoto
  },
  data: function () {
    return {
      list: [
        {
          'name': 'CompanyProfile',
          'id': '1-1',
          'text': '公司简介'
        },
        {
          'name': 'Partner',
          'id': '1-2',
          'text': '合作伙伴'
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
