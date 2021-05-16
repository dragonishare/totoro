<template>
  <div class="main-content">
    content
    <router-view />
    <div class="main-footer">footer</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainContent extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
