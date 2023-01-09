<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: YouSheBiaoTiHei;
  src: url("./assets/youshebiaotihei.ttf");
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width:100%;
  height:100vh;
}
.flex-row{
  display: flex;
}
.flex-col{
  display: flex;
  flex-direction: column;
}
</style>
