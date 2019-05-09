<template>
  <div class="headerMenu">
    <!-- 激活的菜单样式为  active 类 -->
    <!-- 为了阻止链接在点击时跳转，我们使用了 "prevent" 修饰符 (preventDefault 的简称)。 -->

    <nav v-bind:class="active" v-on:click.prevent>

      <!-- 当菜单上的链接被点击时，我们调用了 makeActive 方法, 该方法在 Vue 实例中创建。 -->

      <a href="#" class="home" v-on:click="makeActive('home')">首页</a>
      <a href="#" class="products" v-on:click="makeActive('products')">产品介绍</a>
      <a href="#" class="successfulExamples" v-on:click="makeActive('successfulExamples')">成功案例</a>
      <a href="#" class="about" v-on:click="makeActive('about')">关于我们</a>
      <a href="#" class="contact" v-on:click="makeActive('contact')">联系我们 </a>
    </nav>

    <!-- 以下 "active" 变量会根据当前选中的值来自动变换 -->

    <p>您选择了 <b>{{active}} 菜单</b></p>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  // 定义属性，初始化值
  data: function () {
    return {
      active: 'home'
    }
  },
  // 点击菜单使用的函数
  methods: {
    makeActive: function (item) {
      // 模型改变，视图会自动更新
      this.active = item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/header.css';
</style>
