<template>
  <div class="code-maker">
    <Header />
    <SplitPane layout="vertical1">
      <template #left>
        <Editor />
      </template>
      <template #right>
        <div>right</div>
      </template>
    </SplitPane>
  </div>
</template>
<script setup lang="ts">
import Header from "./components/Header.vue";
import SplitPane from "./components/SplitPane.vue";
</script>
<style>
body {
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  --base: #444;
  --nav-height: 50px;
}
</style>
<style scoped>
.code-maker {
  --bg: #fff;
  --bg-soft: #f8f8f8;
  --border: #ddd;
  --text-light: #888;
  --font-code: Menlo, Monaco,  Consolas, "Courier New", monospace;
  --color-branding: #42b883;
  --color-branding-dark: #416f9c;
  --header-height: 38px;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  overflow: hidden;
  background-color: var(--bg-soft);
  height: 100vh;
}
.dark .vue-repl {
  --bg: #1a1a1a;
  --bg-soft: #242424;
  --border: #383838;
  --text-light: #aaa;
  --color-branding: #42d392;
  --color-branding-dark: #89ddff;
}
:deep(button) {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  background-color: transparent;
}
</style>
