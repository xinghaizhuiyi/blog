<template>
  <div class="box">
    <div class="Sidebar">
      <nav></nav>
      <User-name></User-name>
      <Sidebar-off></Sidebar-off>
    </div>
    <div class="Sidebarout"  @click='showClick'></div>
  </div>
</template>

<script>
import SidebarOff from "./SidebarOff"
import UserName from "./UserName"
export default {
  components: {
    SidebarOff,
    UserName,
  },
  methods:{
    showClick(){
      this.$store.commit('sidebarshow')
    }
  }
};
</script>

<style scoped>
.box{
  z-index: 2;
}
.Sidebar {
  position: fixed;
  width: 250px;
  height: 100%;
  background-color: gray;
}
.Sidebarout {
  position: fixed;
  left: 250px;
  width: calc(100% - 250px);
  height: 100%;
  opacity: 0.2;
  background-color: gray;
}

</style>