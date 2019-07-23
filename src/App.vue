<template>
  <div id="app">
      请输入个数：<input type="number" v-model.number="count" />
    <counterGroup :counters="count"/>
    <!-- <component v-bind:is="component" ></component> -->
     <router-view/>
  </div>
</template>
<script>
import counterGroup from "./components/counterGroup.vue"
// import HelloWorld from "./components/HelloWorld.vue"
export default {
  name: 'app',
  components: {
    counterGroup,
    
  },
  data(){
    return{
      count:0,
      //current:fff('/hello')? HelloWorld: counterGroup,
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