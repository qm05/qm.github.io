<template lang="html">
  <div class="page-toast">
    <div>提示信息</div>
    <div class="btn" @click="showToast1">默认三秒关闭</div>
    <div class="btn" @click="showToast2">指定关闭时间</div>
    <div class="btn" @click="showToast3">自定义样式</div>
    <div class="btn" @click="showToast4">不一样的引用方式</div>
    <qm-toast :position="pos1" :isShow.sync="isShow1">
      <div>三秒后自动关闭</div>
    </qm-toast>
    <qm-toast :position="pos2" :isShow.sync="isShow2" :duration="10000">
      <div>十秒后自动关闭</div>
    </qm-toast>
    <qm-toast :position="pos3" :isShow.sync="isShow3">
      <div class="box">
        <img src="../assets/logo.png" alt="">
        自定义样式,3秒后关闭
      </div>
    </qm-toast>
  </div>
</template>
<script>
  //  import PmToast from '../plugins/toast/toast';
  export default {
    data() {
      return {
        isShow1: false,
        isShow2: false,
        isShow3: false,
        pos1: 'top',
        pos2: 'center',
        pos3: 'bottom'
      }
    },
    components: {
//      PmToast
    },
    methods: {
      showToast1() {
        this.isShow1 = true;
      },
      showToast2() {
        this.isShow2 = true;
      },
      showToast3() {
        this.isShow3 = true;
      },
      showToast4(){
        console.info(this.$qmToast);
        this.$qmToast('我是不一样的烟火', {
          duration: 2000,
          position: 'top',
        });
      }
    }
  }
</script>
<style lang="scss">
  .page-toast {

  .btn {
    margin: 10px auto 0;
    width: 120px;
    padding: 10px;
    color: #fff;
    background: #69c964;
    cursor: pointer;
  }

  .box {

  img {
    width: 20px;
    height: 20px;
  }

  }
  }
</style>
