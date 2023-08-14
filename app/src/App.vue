<template>
  <div id="app">
    <h1>我是微应用</h1>

    <h3>使用 docx-preview</h3>
    <hr />
    <div ref="preview">
    </div>
    <h3>使用 vue-office-docx</h3>
    <hr />
    <div style="height: 400px">
      <vue-office-docx :src="src" />
    </div>
  </div>
</template>

<script>
import VueOfficeDocx from "@vue-office/docx";
import "@vue-office/docx/lib/index.css";

import docx from "./docx";

export default {
  name: "App",
  data(){
    return {
     src: 'http://localhost:3000/test.docx'
    }
  },
  mounted() {
    this.renderDocx();
  },
  methods: {
    async renderDocx() {
      const container = this.$refs.preview;

      docx
        .getData(this.src)
        .then((res) => docx.getBlob(res))
        .then((fileData) => docx.render(fileData, container))
        .catch((e) => {
          alert(e)
          console.error(e);
          docx.render("", container);
        });
    },
  },
  components: {
    VueOfficeDocx,
  },
};
</script>
