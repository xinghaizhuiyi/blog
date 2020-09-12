<template>
  <button class="SidebarIcon" @click='showClick'>
    <div class="flexbox">
      <SvgCategory class="svg"></SvgCategory>
      <p class="p">MENU</p>
    </div>
  </button>
</template>

<script>
import SvgCategory from "./svg/SvgCategory";
export default {
  components: {
    SvgCategory,
  },
  methods:{
    showClick(){
      this.$store.commit('sidebarshow')
    }
  }
};
</script>

<style scoped>
.SidebarIcon {
  position: fixed;
  margin-left: 20px;
  margin-top: 10px;
  border: 2px solid black;
  z-index: 2;
}

.flexbox {
  display: flex;
  align-items: center;
}
.svg {
  margin-right: -3px;
}

.SidebarIcon:hover {
  opacity: 0.3;
  transition: 0.2s;
  cursor: pointer;
}

.p {
  margin: 6px 8px;
  font-size: 14px;
}
</style>