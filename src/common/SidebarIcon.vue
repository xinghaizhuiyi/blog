//侧边栏小图标
<template>
  <button class="SidebarIcon" @click='showClick'>
    <div class="flexbox">
      <svg-category class="svg"></svg-category>
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
  margin-left: 2em;
  margin-top: 1em;
  border: 2px solid black;
  border-radius:12px;
  z-index: 3;
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