//文章列表
<template>
  <div id="BaseList">
    <div class="BlogBox">
      <div v-for="item in blogdata" :key="item.blogname" class="Blog">
        <div class="blogname">{{ item.blogname }}</div>
        <div class="introduction">{{ item.introduction }}</div>
        <div class="tag">{{ item.tag }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const BaseList = document.getElementById("BaseList");
    BaseList.style.marginTop = window.innerHeight + "px";
  },
  props: ["blogdata"],
};
</script>

<style scoped>
#BaseList {
  position: absolute;
  width: 100%;
  z-index: 0;
}
.BlogBox {
  overflow: hidden;
  margin: 0 auto;
  width: 60%;
  height: 1000px;
  box-shadow: 0 0 20px 10px rgba(220, 220, 220, 0.3);
}
.Blog {
  margin: 30px auto;
}
.blogname {
  font-size: 24px;

  font-weight: bold;
}
</style>