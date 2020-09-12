<template>
  <div class="box">
    <div class="Sidebar">
      <nav></nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "HelloWorld",
    };
  },
};
</script>

<style scoped>
.Sidebar {
  position: fixed;
  z-index: 2;
  width: 200px;
  height: 100%;
  background-color: gray;
}
</style>