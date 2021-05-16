<template>
  <div class="main-header">
    <div class="main-header-container">
      <a class="logo" href="/">
        <img alt="Vue logo" src="../assets/logo.png" />
      </a>
      <ul class="main-header-nav">
        <li class="nav-item"><a href="/" class="active">组件</a></li>
        <li class="nav-item"><a href="/">资源</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainHeader extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
