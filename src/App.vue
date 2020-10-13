<template>
  <div id="app">
    <app-header></app-header>
    <app-itemGrid></app-itemGrid>
    <app-newItem></app-newItem>
  </div>
</template>

<script>
import header from "./components/header";
import newItem from "./components/newItem";
import itemGrid from "./components/itemGrid";

export default {
  components: {
    "app-header": header,
    "app-newItem": newItem,
    "app-itemGrid": itemGrid,
  },
};
</script>

<style>
</style>
