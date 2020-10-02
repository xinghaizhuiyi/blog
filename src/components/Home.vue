//主页
<template>
  <div>
    <Base-header></Base-header>
    <Base-sidebar></Base-sidebar>
    <Base-list v-bind:blogdata="this.items"></Base-list>
  </div>
</template>

<script>
import BaseHeader from "../common/BaseHeader";
import BaseSidebar from "../common/BaseSidebar";
import BaseList from "../common/BaseList";
export default {
  name: "Home",
  created() {
    this.axios
      .get("http://localhost:3000/bowen")
      .then((res) => {
        console.log(res.data);
        this.items = res.data.data;
        this.bowenShow = res.data.status;
      })
      .catch((err) => {
        console.log(err);
      });
  },
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
