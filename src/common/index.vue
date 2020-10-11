//文章的索引
<template>
  <div class="indexBox">
    <ul class="indexList">
      <li
        v-for="item in list"
        :key="item.key"
        :class="item.localName"
        class="index"
      >
        <a @click="changeHash('#' + item.innerText)">{{ item.headerkey }}{{ item.innerText }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {},
  props: ["list"],
  methods: {
    changeHash: function (idName) {
      document.querySelector(idName).scrollIntoView(true);
    },
  },
};
</script>

<style scoped>
.indexBox {
  position: fixed;
  top: 0;
  right: 2em;
  box-shadow: 0 0 30px 20px rgba(220, 220, 220, 0.3);
  width: 300px;
  background-color: white;
  z-index: 2;
}
.indexList {
}
.index.h1 {
  padding-left: 0.2em;
}
.index.h2 {
  padding-left: 0.6em;
}
.index.h3 {
  padding-left: 1em;
}
.index a:hover {
  cursor: pointer;
  color: blue;
}
</style>