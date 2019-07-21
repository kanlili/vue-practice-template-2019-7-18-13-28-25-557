<template>
  <div id="countGroup">
 <counter v-for="n in counters" v-bind:key="n" @addSum="addTotal" @subSum="subTotal"/>
 <counter-sum :counterSum="sum"/>
  </div>
</template>

<script> 
 import counter from "./counter.vue";
 import counterSum from "./counterSum.vue";
export default {
  name: 'counterGroup',
  data(){
  return{
   count:0,
   sum:0
  }
  },
  components: {
    counter,
    counterSum
  },
  props: {
    counters:Number
  },
  methods: {
    addTotal(value){
        this.sum+=value;
    },
    subTotal(value){
      this.sum-=value;
    }
  },
}
</script>
<style >

</style>