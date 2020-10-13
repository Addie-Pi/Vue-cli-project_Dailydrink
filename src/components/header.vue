<template>
  <div class="header">
    <h2>{{ title }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Dailydrinks-Order List",
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 30px auto;
  font-size: 30px;
}
</style>