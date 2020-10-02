//主页
<template>
  <div id="app">
    <BaseHeader></BaseHeader>
    <BaseSidebar></BaseSidebar>
  </div>
</template>

<script>
import BaseSidebar from "../common/BaseSidebar";
import BaseHeader from "../common/BaseHeader";
export default {
  name: "Home",
  created() {
    this.axios
      .get("http://localhost:3000/bowen")
      .then((res) => {
        console.log(res.data);
        this.items = res.data.data;
        this.tagShow = res.data.status;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    BaseSidebar,
    BaseHeader,
  },
};
</script>

<style>
</style>
