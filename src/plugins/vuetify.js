import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#9652ff",
    secondary: "#3cd1d2",
    warning: "#ffaa2c",
    error: "#f83e70"
  }
});
