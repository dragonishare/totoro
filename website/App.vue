<template>
  <div id="app">
    <MainSider />
    <MainHeader />
    <MainContent />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MainSider from "@/components/MainSider.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainContent from "@/components/MainContent.vue";

@Component({
  components: { MainSider, MainHeader, MainContent },
})
export default class App extends Vue {
  @Prop() private msg!: string;
}
</script>

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
  font-size: 14px;
  color: #2c3e50;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;
  overflow: hidden;
}
</style>
