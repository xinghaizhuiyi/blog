<template>
  <div id="app">
    <BaseSidebar></BaseSidebar>
     <router-view></router-view>
  </div>
</template>

<script>
import BaseSidebar from "./common/BaseSidebar";

export default {
  name: "App",
  components: {
    BaseSidebar,
  },
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
