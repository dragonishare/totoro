<template>
  <div id="app">
    <div class="main-sider">
      sider <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="main-header">
      <div class="main-header-container">
        <a class="logo" href="/">
          <img alt="Vue logo" src="./assets/logo.png" />
        </a>
        <ul class="main-header-nav">
          <li class="nav-item"><a href="/" class="active">组件</a></li>
          <li class="nav-item"><a href="/">资源</a></li>
        </ul>
      </div>
    </div>
    <div class="main-content">
      content
      <router-view />
      <div class="main-footer">footer</div>
    </div>
  </div>
</template>

<style lang="scss">
html,
body,
div,
ul,
a,
img {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
ul {
  list-style: none;
}
#app {
  height: calc(100% - 80px);
  height: calc(100% - 64px);
  padding-top: 80px;
  padding-top: 64px;
  padding-left: 280px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 14px;
  color: #2c3e50;
  color: rgba(0, 0, 0, 0.85);
  overflow: hidden;
}
.main-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  width: 280px;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid #f0f0f0;
}
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  height: 64px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 40px;
  }
  .logo {
    display: inline-block;
    img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
  }
  .main-header-nav {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .nav-item {
    a {
      position: relative;
      display: block;
      height: 64px;
      line-height: 64px;
      padding: 0 22px;
      color: #1989fa;
      text-decoration: none;
      opacity: 0.5;
      &.active:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: calc(50% - 15px);
        display: inline-block;
        width: 30px;
        height: 2px;
        background: #409eff;
      }
      &.active,
      &:hover {
        opacity: 1;
      }
    }
  }
}
.main-content {
  height: 100%;
  padding: 40px;
  padding-bottom: 80px;
  overflow-y: auto;
}
.main-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
</style>
