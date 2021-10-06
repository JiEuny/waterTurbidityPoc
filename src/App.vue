<template>
  <div id="app">
    <el-container>
      <el-aside class="header">
        <Header />
      </el-aside>
    </el-container>
      
      <router-view class="el-main"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-aside {
  position: relative;
  color: white;
  min-width: 100%;
  min-height: 155px;
  background: #3b4346;
}

.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}

</style>
