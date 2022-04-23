<script setup lang="ts">
// import FileSelector from './FileSelector.vue'
import CodeMirror from "./codemirror/CodeMirror.vue";
// import Message from '../Message.vue'
import { debounce } from "../utils";
import { computed, inject } from "vue";
// import { Store } from "../store";

// const store = inject("store") as Store;

const onChange = debounce((code: string) => {
  //   store.state.activeFile.code = code
  console.log(code);
}, 250);

const mockCode = 'let str = "Hello World!";\nconsole.log(str);';
const mockAtiveMode = "javascript";

// const activeMode = computed(() => {
//   const { filename } = store.state.activeFile
//   return filename.endsWith('.vue') || filename.endsWith('.html')
//     ? 'htmlmixed'
//     : filename.endsWith('.css')
//     ? 'css'
//     : 'javascript'
// })
</script>

<template>
  <FileSelector />
  <div class="editor-container">
    <CodeMirror @change="onChange" :value="mockCode" :mode="mockAtiveMode" />
    <!-- <Message :err="store.state.errors[0]" /> -->
  </div>
</template>

<style scoped>
.editor-container {
  height: calc(100% - var(--header-height));
  overflow: hidden;
  position: relative;
}
</style>
