<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    mounted(){
      let _this = this;
//      this.$toast.bottom('这是我的测试啦lalalalalala~~~');
//      this.$loading('正在加载中...','show');
//      _this.$loading('正在加载中...');
//      setTimeout(function () {
//        _this.$loading.close();
//      }, 5000);
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
