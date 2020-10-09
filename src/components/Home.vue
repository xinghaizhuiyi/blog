//主页
<template>
  <div>
    <Base-header></Base-header>
    <Base-sidebar></Base-sidebar>
    <Base-list></Base-list>
  </div>
</template>

<script>
import BaseHeader from "../common/BaseHeader";
import BaseSidebar from "../common/BaseSidebar";
import BaseList from "../common/BaseList";
export default {
  name: "Home",
  components: {
    BaseSidebar,
    BaseHeader,
    BaseList,
  },
  data() {
    return {
      items: "",
      bowenShow: "",
    };
  },
};
</script>

<style>
</style>
