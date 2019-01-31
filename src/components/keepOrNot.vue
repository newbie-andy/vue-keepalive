<template>
  <ul>
    <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'keepOrNot',
  data () {
    return {
      lists: []
    }
  },
  created() {
    console.log('我被执行了');
    let arr = [];
    for(let i = 0; i<5; i++) {
      arr.push(arr.push(parseInt(Math.random(0,1)*10)))
    }
    this.lists = arr;
  },
  activated() {
    console.log("看到我就说明我被缓存了");
  }
}
</script>

<style>

</style>
