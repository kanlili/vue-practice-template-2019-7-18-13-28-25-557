 <template>
  <div id="countersum" >
 <input v-model="compluted" > <!-- 总和:{{counterSum}} -->
  </div>
</template>

<script>
export default {
  name: 'countersum',
  props: {
    counterSum:Number
  },
  computed:{
     compluted(){
       return this.$store.getters.result;
     }
  }

}
</script>
