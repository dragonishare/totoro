<template>
  <div class="main-sider">
    sider <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainSider extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-sider {
  position: fixed;
  top: 64px;
  left: 0;
  z-index: 8;
  width: 280px;
  height: calc(100% - 64px);
  box-sizing: border-box;
  border-right: 1px solid #f0f0f0;
}
</style>
