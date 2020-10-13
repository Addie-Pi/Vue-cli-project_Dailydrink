import Vue from "vue";
import App from "./App.vue";

export const itemBus = new Vue({
  methods: {
    addItem(name, price, note) {
      this.$emit("addedItem", name, price, note);
    }
  }
});

new Vue({
  el: "#app",
  render: (h) => h(App)
});
