<template>
  <div>
    <Sidebar-icon v-if="isshow"></Sidebar-icon>
    <Sidebar v-if="!isshow"></Sidebar>
  </div>
</template>

<script>
import SidebarIcon from "../common/SidebarIcon";
import Sidebar from "../common/Sidebar";
export default {
  components: {
    SidebarIcon,
    Sidebar,
  },
  computed: {
    isshow() {
      return this.$store.state.SidebarShow.isshow;
    },
  },
};
</script>

<style scoped>
</style>