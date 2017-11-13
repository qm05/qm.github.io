<template lang="html">
  <div v-show="show" :class="`qm-toast-${position}`" class="qm-toast">
    <slot>{{tip}}</slot>
  </div>
</template>
<script>
  export default {
    name: 'qmToast',
    props: {
      duration: {
        type: Number,
        default: 3000
      },
      position: {
        type: String,
        default: 'center'
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.openToast();
    },
    data() {
      return {
        tip: '',
        show: this.isShow,
        timer: null
      }
    },
    methods: {
      openToast(){
        if (this.duration == 0) return;
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          this.show = false;
        }, this.duration);
      },
      hideToast(){
        this.$emit('update:isShow', false);
      }
    },
    watch: {
      isShow(value, oldValue){
        if (this.show === value) return;
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.show = value;
      },
      show(value){
        if (value) {
          this.openToast();
        } else {
          this.hideToast();
        }
      }
    }
  }
</script>
<style lang="scss">
  .qm-toast {
    position: fixed;
    padding: 15px 25px;
    left: 50%;
    max-width: 60%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .8);
    color: #fff;
    border-radius: 6px;
  }

  .qm-toast-top {
    top: 50px;
  }

  .qm-toast-center {
    top: 50%;
  }

  .qm-toast-bottom {
    bottom: 50px;
  }
</style>
