declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.json" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}
