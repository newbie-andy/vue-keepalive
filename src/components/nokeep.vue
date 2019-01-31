<template>
  <div class="hello">
    <button @click="toggleFun1">keep</button>
    <button @click="toggleFun2">no keep</button>
    <div class="box">
       <keep-alive>
          <ul v-if="canShow1">
            <li><span>keep</span></li>
            <li v-for="(item, index) in lists1" :key="index">{{ item }}</li>
          </ul>
        </keep-alive>

        
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      canShow1: true,
      canShow2: true,
      lists1: [],
      lists2: []
    }
  },
  created() {
    let arr = [];
    for(let i = 0; i<5; i++) {
      arr.push(arr.push(parseInt(Math.random(0,1)*10)))
    }
    this.lists1 = arr;
    this.lists2 = arr;
  },
  methods: {
    toggleFun1() {
      this.canShow1 = !this.canShow1
    },
    toggleFun2() {
      this.canShow2 = !this.canShow2
    }
  }
}
</script>

<style>

</style>
