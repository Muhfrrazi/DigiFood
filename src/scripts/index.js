import "regenerator-runtime";
import "./component/nav-web";
import "./component/hero-web";
import "./component/foot-web";
import "../styles/style.css";
import "../styles/responsive.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  menuButton: document.querySelector("#menu-button"),
  closeButton: document.querySelector("#close-button"),
  sideBar: document.querySelector("#sidebar-menu"),
  content: document.querySelector("#main-content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
