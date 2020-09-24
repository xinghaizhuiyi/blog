<template>
  <div>
    <mavon-editor
      class="md"
     value="# 欢迎使用马克飞象"
     :subfield = "prop.subfield"
     :defaultOpen = "prop.defaultOpen"
     :toolbarsFlag = "prop.toolbarsFlag"
     :editable="prop.editable"
     :scrollStyle="prop.scrollStyle"
  ></mavon-editor>
  </div>
</template>

<script>
export default {
  name: "Blog",
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
  components: {},
};
</script>

<style>
</style>
