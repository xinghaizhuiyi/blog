<template>
  <div class="SidebarTag" v-if="tagShow">
    <span>随笔分类</span>
    <li href="" v-for="item in items" :key="item.tag" @click="goToTag(item.tag)">
      {{ item.tag }}({{ item.quantity }})
    </li>
    <router-view></router-view>
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
        name:'test',
        params:{ blogtag: tag}
      })

    },
  },
};
</script>

<style scoped>
</style>