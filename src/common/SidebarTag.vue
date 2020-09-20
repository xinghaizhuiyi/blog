<template>
  <div class="SidebarTag" v-if="tagShow">
    <span>随笔分类</span>
  </div>
</template>

<script>
export default {
  created() {
      this.axios.put('http://localhost:3000/').then(res => {
          console.log(res.data)
          this.items=res.data.data
          this.tagShow=res.data.status
        }).catch(err => {
          console.log(err);
        });
  },
  data() {
    return {
      items: '',
      tagShow:'',
    };
  },
  methods: {

  },
};
</script>

<style scoped>
</style>