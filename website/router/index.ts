import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import langs from "../i18n/lang.js";
import navConfig from "./nav.json";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [];

langs.forEach(({ lang }, index) => {
  console.log("语言", lang);
  routes.push({
    path: `/${lang}/component`,
    redirect: `/${lang}/changelog`,
    children: [],
    // route level code-splitting
    // this generates a separate chunk (changelog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "changelog" */ "../views/Changelog.vue"),
  });
  navConfig[lang].forEach(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navItem: {
      path: string;
      children: any[];
      groups: any[];
      name: string;
    }) => {
      console.log("当前navItem", JSON.stringify(navItem), "===index===", index);
      if (navItem.path === "changelog") {
        routes.push({
          path: `/${lang}/changelog`,
          children: [],
          name: "Changelog",
          // route level code-splitting
          // this generates a separate chunk (changelog.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              /* webpackChunkName: "changelog" */ "../views/Changelog.vue"
            ),
        });
      } else {
        if (navItem.children) {
          navItem.children.forEach((subNavItem) =>
            addRoute(subNavItem, lang, index)
          );
        } else if (navItem.groups) {
          navItem.groups.forEach((group) => {
            group.list.forEach((nav: { name: string; path: string }) =>
              addRoute(nav, lang, index)
            );
          });
        }
      }
    }
  );
});

function addRoute(
  nav: { name: string; path: string },
  lang: string,
  index: number
) {
  const child = {
    name: `component-${lang}-${nav.name}`,
    path: `/${lang}${nav.path}`,
    component: () => {
      return import(`../docs/${lang}${nav.path}`);
    },
    meta: {
      title: `Totoro-UI ${nav.name}`,
      name: nav.name,
      path: nav.path,
      lang: lang,
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  console.log(routes);
  routes[index].children.push(child);
}
const defaultPath = "zh-CN";

routes.push({
  path: "/",
  redirect: `/${defaultPath}/component`,
});

const router = new VueRouter({
  routes,
});

export default router;
