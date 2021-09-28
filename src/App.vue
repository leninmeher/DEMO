<template>
  <Cover />
</template>

<script>
import Cover from './components/Cover'

export default {
  name: 'App',
  components: {
    Cover
  }
}
</script>

<style>
/* *{
    margin: 0;
    padding:0;
  } */
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
