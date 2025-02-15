<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About2</router-link>
    </nav>
    <button v-if="deferredPrompt" @click="installApp">添加到桌面</button>
    <router-view />
  </div>
</template>

<script lang="ts">
// @ts-check
export default {
  data() {
    return {
      deferredPrompt: null as any, // 保存 beforeinstallprompt 事件对象
    };
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", (event) => {
      // 阻止浏览器默认的安装提示
      event.preventDefault();
      this.deferredPrompt = event; // 保存事件对象
    });
  },
  methods: {
    installApp() {
      if (this.deferredPrompt) {
        // 调用 `prompt()` 显示安装提示
        this.deferredPrompt.prompt();
        this.deferredPrompt.userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === "accepted") {
            console.log("用户已添加应用到主屏幕");
          } else {
            console.log("用户拒绝了添加到主屏幕");
          }
          this.deferredPrompt = null; // 重置事件对象
        });
      }
    },
  } as any,
} as any;
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
