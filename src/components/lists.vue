<template>
  <div>
    <router-link to="/detail">Go to detail</router-link>
    <ul class="lists">
        <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Lists',
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
