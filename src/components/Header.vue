<template>
  <nav>
    <h1>
      <img alt="logo" src="../assets/logo.svg" />
      <span class="lt-sm-hidden">
        <span>Code Maker</span>
        <small>(v{{ appVersion }})</small>
      </span>
    </h1>

    <el-space class="links">
      <button title="View on GitHub" class="github">
        <a href="https://github.com/viodo/codemaker" target="_blank">
          <github />
        </a>
      </button>
    </el-space>
  </nav>
</template>
<script setup lang="ts">
import Github from "@/icons/Github.vue";

const appVersion = import.meta.env.APP_VERSION;
</script>
<style>
nav {
  --bg: #fff;
  --bg-light: #fff;
  --border: #ddd;
  color: var(--base);
  height: var(--nav-height);
  box-sizing: border-box;
  padding: 0 1em;
  background-color: var(--bg);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.33);
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: space-between;
}
.dark nav {
  --base: #ddd;
  --bg: #1a1a1a;
  --bg-light: #242424;
  --border: #383838;
  box-shadow: none;
  border-bottom: 1px solid var(--border);
}
h1 {
  margin: 0;
  line-height: var(--nav-height);
  font-weight: 500;
  display: inline-block;
  vertical-align: middle;
}
h1 img {
  height: 24px;
  vertical-align: middle;
  margin-right: 10px;
  position: relative;
  top: -2px;
}
@media (max-width: 480px) {
  h1 span {
    display: none;
  }
}
.links {
  display: flex;
}
.version {
  display: inline-block;
  margin-right: 12px;
  position: relative;
}
.active-version {
  cursor: pointer;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  line-height: var(--nav-height);
  padding-right: 15px;
}
.active-version:after {
  content: "";
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #aaa;
  position: absolute;
  right: 0;
  top: 22px;
}
.version:hover .active-version:after {
  border-top-color: var(--base);
}
.dark .version:hover .active-version:after {
  border-top-color: #fff;
}
.versions {
  display: none;
  position: absolute;
  left: 0;
  top: 40px;
  background-color: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 4px;
  list-style-type: none;
  padding: 8px;
  margin: 0;
  width: 200px;
  max-height: calc(100vh - 70px);
  overflow: scroll;
}
.versions a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
  cursor: pointer;
  color: var(--base);
}
.versions a:hover {
  color: #3ca877;
}
.versions.expanded {
  display: block;
}

.github {
  margin: 0 2px;
}
</style>
