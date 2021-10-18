import Vue from "vue";
import Router from "vue-router";
import { trailingSlash } from "@/util/helpers";
import { layout, route } from "@/util/routes";

Vue.use(Router);

const router = new Router({
  made: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes: [
    layout("Default", [
      route("Dashboard"),
      // // Pages
      // route("UserProfile", null, "components/profile"),

      // // Components
      // route("Notifications", null, "components/notifications"),

      // // Tables
      // route("Regular Tables", null, "tables/regular"),
    ]),
  ],
});

router.beforeEach((to, from, next) => {
  return to.path.endsWith("/") ? next() : next(trailingSlash(to.path));
});

export default router;

// import Vue from "vue";
// import Router from "vue-router";
// import AuthLayout from "@/layouts/Auth";
// import Login from "@/views/auth/Login";
// import AdminLayout from "@/layouts/Admin";
// import Dashboard from "@/views/Dashboard";
// import i18n from "@/i18n";

// Vue.use(Router);

// const routes = [
//   {
//     path: "",
//     redirect: "login",
//     component: AuthLayout,
//     children: [
//       {
//         path: "/login",
//         name: "login",
//         component: Login,
//         meta: {
//           title: i18n.t("routes.login"),
//         },
//       },
//     ],
//   },
//   {
//     path: "",
//     redirect: "admin",
//     component: AdminLayout,
//     meta: {
//       title: i18n.t("routes.home"),
//     },
//     children: [
//       {
//         path: "/dashboard",
//         name: "dashboard",
//         component: Dashboard,
//         meta: {
//           title: i18n.t("routes.dashboard"),
//         },
//       },
//     ],
//   },
// ];

// export default new Router({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });
