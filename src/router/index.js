import Vue from "vue";
import Router from "vue-router";
import AuthLayout from "@/layouts/Auth";
import Login from "@/views/auth/Login";
import AdminLayout from "@/layouts/Admin";
import Dashboard from "@/views/Dashboard";
import i18n from "@/i18n";

Vue.use(Router);

const routes = [
  {
    path: "",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
          title: i18n.t("routes.login"),
        },
      },
    ],
  },
  {
    path: "",
    redirect: "admin",
    component: AdminLayout,
    meta: {
      title: i18n.t("routes.home"),
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
          title: i18n.t("routes.dashboard"),
        },
      },
    ],
  },
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
