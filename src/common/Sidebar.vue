<template>
  <div class="Sidebarbox">
    <div class="Sidebar">
      <nav></nav>
      <User-box></User-box>
      <Sidebar-off></Sidebar-off>
      <el-calendar v-model="value" class="Calendar"></el-calendar>
      <Sidebar-tag></Sidebar-tag>
    </div>
    <div class="Sidebarout" @click="showClick"></div>
  </div>
</template>

<script>
import SidebarOff from "./SidebarOff";
import UserBox from "./UserBox";
import SidebarTag from "./SidebarTag";
export default {
  data() {
    return {
      value: new Date(),
    };
  },
  components: {
    SidebarOff,
    UserBox,
    SidebarTag,
  },
  methods: {
    showClick() {
      this.$store.commit("sidebarshow");
    },
  },
};
</script>

<style scoped>
.Sidebarbox {
  z-index: 2;
}
.Sidebarbox .Sidebar {
  position: fixed;
  width: 250px;
  height: 100%;
  background-color: #DCDCDC;
  overflow: auto;
}
.Sidebarbox .Sidebarout {
  position: fixed;
  left: 250px;
  width: calc(100% - 250px);
  height: 100%;
  opacity: 0.2;
}
</style>
<style>
.el-calendar.Calendar{
  width: 230px;
  height: 245px;
  margin: 0px auto; 
  z-index: 2;
  background-color: #DCDCDC;
 
}
.Calendar .el-calendar__header{
  padding: 2px 6px;
  align-items: center;
  border: 0;
}
.Calendar .el-calendar__title{
  font-size: 12px;
  padding-left: 4px;
}
.Calendar .el-calendar__body .el-calendar-table{
  width: 200px;
}
.Calendar .el-calendar__body .el-calendar-table__row .el-calendar-day {
  width: 28px;
  height: 28px;
  text-align: center;
  line-height:28px;
  padding: 0px;
}
.Calendar .el-calendar-table td.is-selected{
  font-size: 17px;
}

.Calendar .el-button-group .el-button--mini{
  padding: 4px 6px;
}
.Calendar .el-calendar__body{
      padding: 8px 15px;
}
.Calendar .el-calendar__body th{
  padding: 0px;
  font-size: 14px;
}
.Calendar .el-button-group button{
  background-color: #DCDCDC;
  border: 1px white solid;
}
</style>