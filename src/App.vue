<template>
  <div id="app">

    <p>{{count}}</p>
    <button @click="add">点我+</button>
    <button @click="sub">点我-</button>
    <aaa></aaa>
  </div>
</template>

<script>

import aaa from './components/MutiCount'
export default {
  name: 'app',
  data:function(){
     return{
       count:0
     }
  },
  methods:{
    add:function(){
    this.count++;
    },
    sub:function(){
    this.count--;
    }
  },
  components:{
    aaa
  }
};
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
