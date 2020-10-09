<template>
  <div>
    <Base-sidebar></Base-sidebar>
    <div class="BowenBox">
      <mavon-editor
        class="md"
        v-model="bowen"
        :subfield="prop.subfield"
        :defaultOpen="prop.defaultOpen"
        :toolbarsFlag="prop.toolbarsFlag"
        :editable="prop.editable"
        :scrollStyle="prop.scrollStyle"
      ></mavon-editor>
    </div>
    <a @click="changeHash('#欢迎使用Markdown在线编辑器MdEditor')">123</a>
  </div>
</template>

<script>
import BaseSidebar from "../common/BaseSidebar";
export default {
  name: "Blog",
  created() {
    this.axios
      .get("http://localhost:3000/bowen/" + this.$route.params.bowenname)
      .then((res) => {
        this.bowen = res.data.data[0].bowen;
        this.$nextTick(() => {
          let head = [].slice.call(document.querySelectorAll("h1,h2,h3"));
          let i = 0;
          while (head[i] != undefined) {
            let unit = {};
            unit.localName = head[i].localName;
            unit.innerText = head[i].innerText;
            head[i].setAttribute("id", head[i].innerText.replace(/\s*/g,""));
            this.header.push(unit);
            i++;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    prop() {
      let data = {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true,
      };
      return data;
    },
  },
  methods: {
    changeHash: function (idName) {
      document.querySelector(idName).scrollIntoView(true)
      }
  },
  data() {
    return {
      bowen: "",
      header: [],
    };
  },
  components: {
    BaseSidebar,
  },
};
</script>

<style scoped>
</style>

<style>
.BowenBox {
  position: relative;
  z-index: 1;
}
.md {
  width: 60%;
  margin: 0 auto;
}
</style>
