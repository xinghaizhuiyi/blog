//用户头像昵称
<template>
  <div class="UserBox">
    <img src="../assets/base.jpg" alt="用户头像" class="UserImg" />
    <div class="UserName">
      <p>星海追忆</p>
    </div>
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
.UserBox {
  width: 120px;
  margin: 20px auto;
}
.UserImg {
  width: 120px;
  height: 120px;
  border-radius: 100%;
}
.UserName {
  color: blue;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  margin-top: 5px;
  text-align: center;
}
</style>