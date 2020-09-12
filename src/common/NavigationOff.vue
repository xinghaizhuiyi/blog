<template>
  <div class="NavigationOff" @click='showClick'>
    <div class="flexbox">
      <SvgCategory class="svg"></SvgCategory>
    </div>
  </div>
</template>

<script>
import DoubleArrowLeft from "./svg/Double-arrow-left";
export default {
  components: {
    SvgCategory,
  },
  methods:{
    showClick(){
      this.$emit('showSwitch');
    }
  }
};
</script>

<style scoped>

</style>