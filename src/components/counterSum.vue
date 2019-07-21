 <template>
  <div id="countersum">
  <p>总和:{{counterSum}}</p>
  </div>
</template>

<script>
export default {
  name: 'countersum',
  props: {
    counterSum:Number
  },

}
</script>
