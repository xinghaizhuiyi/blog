//文章列表
<template>
  <div id="BaseList">
    <div class="BlogBox">
      <div v-for="item in blogdata" :key="item.bowenname" class="Blog">
        <p class="bowenname" @click="toBowen(item.bowenname)">
          {{ item.bowenname }}
        </p>
        <div class="introduction">简介：{{ item.introduction }}</div>
        <div class="tag">{{ item.tag }}<svg-tag></svg-tag></div>
      </div>
      <el-pagination
        @current-change="currentPageChange"
        layout="prev, pager, next"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import SvgTag from "./svg/SvgTag";

export default {
  components: {
    SvgTag,
  },
  data() {
    return {
      blogdata: this.blogdata,
      count: 0,
      bowenname:""
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/pagination/1")
      .then((res) => {
        this.blogdata = res.data.data.rows;
        this.count = res.data.data.count;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    currentPageChange(val) {
      this.axios
        .get("http://localhost:3000/pagination/" + val)
        .then((res) => {
          this.blogdata = res.data.data.rows;
          this.count = res.data.data.count;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toBowen(bowenname) {
      this.$router.push({
        name: "Blog",
        params: { bowenname },
      });
    },
  },
};
</script>

<style scoped>
#BaseList {
  width: 100%;
  z-index: 0;
}
.BlogBox {
  overflow: hidden;
  margin: 0 auto;
  width: 60%;
  box-shadow: 0 20px 20px 10px rgba(220, 220, 220, 0.3);
  z-index: 0;
}
.Blog {
  margin: 30px auto;
}
.Blog:after {
  content: "";
  display: block;
  border: 1px solid #e9e9e9;
  margin-left: -5px;
  background: #fff;
  border-radius: 100%;
  box-shadow: rgba(255, 255, 255, 0.7) 0 0 0 5px;
}
.bowenname {
  font-size: 24px;
  font-weight: bold;
  padding-left: 1em;
}
.bowenname:hover{
  cursor: pointer;
}
.introduction {
  margin: 10px auto;
  padding-left: 1em;
}
.tag {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-right: 1em;
  margin-bottom: 2px;
}
</style>