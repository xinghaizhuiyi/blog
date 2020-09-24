//根据tag显示相应文章
<template>
  <div>
    <h2>{{ msg }}{{ this.$route.params.blogtag }}</h2>
  </div>
</template>

<script>
export default {
  name: "tag",
  created() {
    this.axios
      .get("http://localhost:3000/tag/"+this.$route.params.blogtag)
      .then((res) => {
        console.log(res.data);
        this.items = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  data() {
    return {
      msg: "test",
      items:""
    };
  },
};
</script>

<style>
</style>

