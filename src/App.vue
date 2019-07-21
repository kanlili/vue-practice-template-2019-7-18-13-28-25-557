<template>
  <div id="app">
      请输入个数：<input type="number" v-model.number="count" />
    <counterGroup :counters="count"/>
  </div>
</template>
<script>
import counterGroup from "./components/counterGroup.vue"
export default {
  name: 'app',
  components: {
    counterGroup
  },
  data(){
    return{
      count:0
    }
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