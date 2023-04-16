<template>
<div>
  <div style="padding-left: 0px;padding-right: 0px;" class="container-fluid">
    <KyupidView
    />
  </div>
</div>

</template>

<script>

import KyupidView from './components/kyupidView.vue'


export default {
  name: 'App',
  components: {
    KyupidView
},

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
