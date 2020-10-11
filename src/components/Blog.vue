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
    <index :list="this.header"></index>
  </div>
</template>

<script>
import BaseSidebar from "../common/BaseSidebar";
import index from "../common/index";
export default {
  name: "Blog",
  created() {
    this.axios
      .get("http://localhost:3000/bowen/" + this.$route.params.bowenname)
      .then((res) => {
        this.bowen = res.data.data[0].bowen
        this.$nextTick(() => {
          let head = [].slice.call(document.querySelectorAll("h1,h2,h3"));
          let i = 0
          let keyone = 0,keytwo=0,keythree=1
          while (head[i] != undefined) {
            if(head[i].innerText.replace(/\s*/g, "")==head[0].innerText.replace(/\s*/g, "")&&i!=0){
              break
            }
            let unit = {}
            unit.localName = head[i].localName
            unit.innerText = head[i].innerText.replace(/\s*/g, "")
            unit.key = i
            if (head[i].localName == "h1") {
              keyone++
              unit.headerkey = keyone
              keytwo=1
            }
            if (head[i].localName == "h2") {
              keytwo++
              unit.headerkey = keyone+"."+keytwo
              
              keythree=1
            }
            if (head[i].localName == "h3") {
              unit.headerkey = keyone+"."+keytwo+"."+keythree
              keythree++
            }
            head[i].setAttribute("id", head[i].innerText.replace(/\s*/g, ""))
            this.header.push(unit)
            i++
          }
        })
      })
      .catch((err) => {
        console.log(err);
      })
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
  data() {
    return {
      bowen: "",
      header: [],
    };
  },
  components: {
    BaseSidebar,
    index,
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
