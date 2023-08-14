<template>
  <div id="root">
    <h2>微应用的内容</h2>
    <div ref="container"></div>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'

export default {
  name: 'App',
  mounted(){
    this.app = loadMicroApp({
      name: 'aaaa',
      entry: 'http://localhost:3000/',
      container: this.$refs.container
    }, {
      // sandbox: false
    })
  }
}
</script>
