<template>
  <div class="UserName">
    <img src="../assets/base.jpg" alt="用户头像" class="UserImg"/>
  </div>
</template>

<script>
export default {
  methods: {
    showClick() {
      this.$store.commit("sidebarshow");
    },
  },
};
</script>

<style scoped>
.UserName{
  width: 150px;
  height: 150px;
    margin: 20px auto;
}
.UserImg{
    width: 150PX;
    height: 150PX; 
    border-radius: 100%;
}
</style>