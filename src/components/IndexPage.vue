<template>
  <div class="page-index">
    <div class="q-header">
      <h1 class="q-title">QM-Vue UI</h1>
    </div>
    <div class="q-cont">
      <div class="q-item" @click="$router.push('/toast')">
        提示 Toast
      </div>
      <div class="q-item" @click="$router.push('/loading')">
        加载中 Loading
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/styles/pages/index.scss';
  export default{
    data (){
      return {}
    }
  }
</script>
