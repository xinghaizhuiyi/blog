<template>
  <div>
    <SidebarIcon v-if="isshow"></SidebarIcon>
    <Sidebar v-else></Sidebar>
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
  data() {
    return {
      bace: "true",
    };
  },
  computed: {
    isshow() {
      return this.$store.state.SidebarShow.isshow
    },
  },
};
</script>

<style scoped>
</style>