<template>
  <div class="SidebarTag" v-if="tagShow">
    <span>随笔分类</span>
    <ul>
      <li
        href=""
        v-for="item in items"
        :key="item.tag"
        @click="goToTag(item.tag)"
      >
        {{ item.tag }}({{ item.quantity }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.axios
      .put("http://localhost:3000/tag")
      .then((res) => {
        console.log(res.data);
        this.items = res.data.data;
        this.tagShow = res.data.status;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      items: "",
      tagShow: "",
    };
  },
  methods: {
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
</style>