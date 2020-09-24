<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  height: 2000px;
}
body,
p,
h1,
h2,
h3,
h4,
dl,
dd,
figure {
  margin: 0;
}
ol,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
fieldset,
img {
  border: 0;
}
</style>
