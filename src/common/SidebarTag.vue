//侧边栏tag
<template>
  <div class="SidebarTag" v-if="tagShow=='ok'">
    <span class="taghead">随笔分类</span>
    <ul>
      <li
        class="taglist"
        v-for="item in items"
        :key="item.tag"
        @click="goToTag(item.tag)"
      >
        <svg-tag></svg-tag> {{ item.tag }}({{ item.quantity }})
      </li>
    </ul>
  </div>
</template>

<script>
import SvgTag from "./svg/SvgTag";

export default {
  created() {
    this.axios
      .get("http://localhost:3000/tag")
      .then((res) => {
        this.items = res.data.data;
        this.tagShow = res.data.status;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    SvgTag,
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
.taghead{
  display: block;
  text-align: center;
}
.taglist {
  display: flex;
  align-items: center;
  margin-left: 1em;
}
.taglist:hover {
  color: red;
  transition: 0.2s;
  cursor: pointer;
}
</style>