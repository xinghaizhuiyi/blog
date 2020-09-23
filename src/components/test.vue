<template>
  <div>
    <h2>{{ msg }}{{ this.$route.params.blogtag }}</h2>
  </div>
</template>

<script>
export default {
  name: "test",
  created() {
    this.axios
      .get("http://localhost:3000/tag"+this.$route.params.blogtag)
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
      msg: "test",
    };
  },
};
</script>

<style>
</style>

