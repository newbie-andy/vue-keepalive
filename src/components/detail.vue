<template>
  <div class="detail">
    <button @click="back">返回</button>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {

    }
  },
  mounted() {

  },
  methods: {
      back() {
          this.$router.go(-1)
      }
  },
}
</script>

<style>

</style>
