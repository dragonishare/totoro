// 使typescript将.md文件作为vue对象引入
declare module "*.md" {
  import Vue from "vue";
  export default Vue;
}
