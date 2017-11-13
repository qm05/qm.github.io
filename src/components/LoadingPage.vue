<template lang="html">
  <div class="page-loading">
    <h1>加载中Loading</h1>
    <div class="btn" @click="showLoading">加载Loading</div>
    <div class="btn" @click="hideLoading">关闭Loading</div>
    <div class="btn" @click="showJsLoading">Js方式加载Loading</div>
    <div class="btn" @click="hideJsLoading">Js方式关闭Loading</div>
    <qm-loading :isShow.sync="isShow"></qm-loading>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      showLoading (){
        this.isShow = true;
      },
      hideLoading (){
        this.isShow = false;
      },
      showJsLoading(){
        this.$qmLoading(true, '加载中...');
      },
      hideJsLoading(){
        this.$qmLoading(false);
      }
    },
    components: {}
  }
</script>
<style lang="scss">
  .page-loading {

  .btn {
    position: relative;
    margin: 10px auto 0;
    width: 120px;
    padding: 10px;
    color: #fff;
    background: #69c964;
    cursor: pointer;
    z-index: 1000;
  }

  }
</style>
