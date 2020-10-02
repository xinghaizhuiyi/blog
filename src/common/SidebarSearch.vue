//侧边栏搜索
<template>
  <div class="SearchBox">
    <input
      class="SearchIn"
      type="text"
      v-on:keyup.enter="searchblog"
      v-model="blogname"
      placeholder="搜索你想看的文章"
    />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      blogname: "",
      tagShow: "",
    };
  },
  methods: {
    searchblog() {
      console.log(this.blogname);
    },
    goToTag(tag) {
      this.$router.push({
        name: "tag",
        params: { blogtag: tag },
      });
    },
  },
};
</script>

<style scoped>
.SearchBox {
  width: 100%;
  text-align: center;
  margin: 4px 0;
}
.SearchIn{
    text-align: center;
}
</style>