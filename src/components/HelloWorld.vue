<template>
  <div class="hello">
    <p>keep-alive使用</p>
    
    <keep-alive>
      <router-view v-if="isNeedKeepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!isNeedKeepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isNeedKeepAlive: false
    }
  },
  created() {
    this.isNeedKeepAlive = this.$router.history.current.meta.isNeedKeepAlive
  }
}
</script>

<style>

</style>
