//首屏的气泡效果
<template>
  <div>
    <canvas id="HeaderCanvas"></canvas>
    <Header-down></Header-down>
  </div>
</template>

<script>
import HeaderDown from "../common/HeaderDown";
let canvas;
let ctx;
export default {
  components: {
    HeaderDown,
  },
  data() {
    return {
      blogname: "",
      tagShow: "",
    };
  },
  mounted() {
    this.initCanvas();
    this.draw(1);
    // 当调整窗口大小时重绘canvas
    window.onresize = () => {
      this.initCanvas();
      this.draw(0);
    };
  },
  methods: {
    initCanvas() {
      canvas = document.getElementById("HeaderCanvas");
      ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    },
    draw(flag) {
      //通过flag来判断是初次绘制还是重绘
      clearInterval(timer);
      let num = 100; //气泡个数
      let ballX = []; //球心的横坐标
      let ballY = []; //球心的初始纵坐标，使球初次绘制时不在同一平面上
      let ballR = []; //球的半径
      let ballF = []; //小球的振幅
      let speed = []; //小球向上的速度
      let colours = [
        "rgb(91,155,213)",
        "rgb(180,199,231)",
        "rgb(0,0,255)",
        "rgb(46,177,182)",
        "rgb(68,114,196)",
      ]; //小球颜色
      let finalCol = [];

      //小球的数据全部通过随机数产生
      for (let i = 0; i < num; i++) {
        let radius = Math.floor(Math.random() * 15 + 10);
        let x = Math.floor(Math.random() * canvas.width);
        let y = Math.floor(Math.random() * canvas.height);
        let fudu = Math.floor(Math.random() * 10 + 5);
        let sp = Math.floor(Math.random() * 30 + 5);
        let color = colours[Math.floor(Math.random() * colours.length)];
        ballX.push(x);
        ballY.push(y);
        ballR.push(radius);
        ballF.push(fudu);
        speed.push(sp);
        finalCol.push(color);
      }

      let reX;//实际Y轴
      let reY;//实际X轴
      let ballK = [];//相当于时间，用于计算距离

      //使小球向上做曲线运动
      function move() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < num; i++) {
          (function (i) {
            if (ballK[i] == null) {
              ballK[i] = 0;
            }
            reX = ballK[i] * speed[i] + ballY[i];//曲线运动的X轴，实际的Y轴
            reY = Math.sin(ballK[i]) * ballF[i] + ballX[i];//曲线运动的Y轴，实际的X轴，通过振幅计算左右偏移量
            if (reX + 2*ballR[i] <= 0) {//到达顶部后重置
              ballY[i] = canvas.height;
              ballK[i] = 0;
              reX = ballK[i] * speed[i] + ballY[i];
            }
            ctx.beginPath();
            ctx.fillStyle = finalCol[i];//选择颜色
            ctx.globalAlpha = 0.5;//透明度
            ctx.arc(reY, reX, ballR[i], 0, Math.PI * 2);//画圆
            ctx.fill();//填色
            ballK[i] -= 0.1;
            ballK.splice(i, 1, ballK[i]);//修改ballK
          })(i);
        }
      }
      var timer = setInterval(move, 20); //定时器
      if (flag == 1) {
        //初次绘制
        timer;
        this.$store.state.Timer.timer = timer;
      }
      if (flag == 0) {
        //重排清空定时器
        clearInterval(this.$store.state.Timer.timer);
        timer;
        this.$store.state.Timer.timer = timer;
      }
    },
  },
};
</script>

<style scoped>
#HeaderCanvas {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 2;
}
</style>