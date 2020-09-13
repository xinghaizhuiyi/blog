<template>
  <div @click="showClick" class="Sidebaroff">
    <SvgLeft class="svg"></SvgLeft>
  </div>
</template>

<script>
import SvgLeft from "./svg/SvgLeft";
export default {
  components: {
    SvgLeft,
  },
  methods: {
    showClick() {
      this.$store.commit("sidebarshow");
    },
  },
};
</script>

<style scoped>
.svg {
  display: block;
}

.Sidebaroff{
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -25px;
  margin-left: -50px;
}

</style>