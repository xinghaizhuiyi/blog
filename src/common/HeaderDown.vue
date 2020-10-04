//首屏的翻页键
<template>
  <div @click="todown" id="HeaderDown">
    <Svg-down class="svg"></Svg-down>
  </div>
</template>

<script>
import SvgDown from "./svg/SvgDown";
export default {
  components: {
    SvgDown,
  },
  methods: {
    todown() {
      let down = document.getElementById("HeaderDown");
      let distance = down.offsetTop + 100-document.documentElement.scrollTop;
      let spead = 1;
      function move() {
        if (distance > spead) {
          document.documentElement.scrollTop =
            document.documentElement.scrollTop + spead;
          distance -= spead;
          if (spead < 25) {
            spead++;
          }
        }
        if (distance <= spead) {
          document.documentElement.scrollTop =
            document.documentElement.scrollTop + distance;
          distance = 0;
          clearInterval(timer);
        }
      }
      let timer = setInterval(move, 20); //定时器
      timer;
    },
  },
};
</script>

<style scoped>
#HeaderDown {
  position: absolute;
  left: 50%;
  margin-left: -50px;
  bottom: 0;
  z-index: 2;
  width: 100px;
  height: 100px;
}
</style>