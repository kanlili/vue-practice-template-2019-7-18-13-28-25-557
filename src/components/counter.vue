<template>
  <div id="coute">
   {{count}}
   <br/>
  <button @click="add" >点我+</button>
  <button @click="sub" >点我－</button>
  </div>
</template>
<script>
export default {
  name: 'counter',
  data(){
  return{
   count:0,
  }
  },
methods: {
  add() {
  this.count++;
  this.$store.commit('add');
  // this.$emit('addSum',1);
  },
  sub() {
  this.count--;
  this.$store.commit('sub');
  // this.$emit('addSum', -1);
    }
  }
}
</script>
<style>

</style>