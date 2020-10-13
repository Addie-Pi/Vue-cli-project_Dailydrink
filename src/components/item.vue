<template>
  <div class="item">
    <slot></slot>
  </div>
</template>




<style scoped>
.item {
  border: 1px solid black;
  padding: 15px 30px;
  margin: 30px;
  display: inline-block;
  width: 350px;
  height: 150px;
  border-radius: 10px;
  cursor: pointer;
}

.upperSection {
  display: flex;
}

input {
  border: none;
  width: 150px;
  margin: 10px 5px;
  color: rgb(28, 78, 214);
  font-size: 20px;
}

.newNote textarea {
  border: none;
  box-sizing: border-box;
  resize: none;
  margin: 10px 5px;
  width: 200px;
  height: 50px;
  color: rgb(95, 95, 95);
  font-size: 14px;
  padding: 5px;
}

.lowerSection {
  display: flex;
  justify-content: space-between;
}

.funtionalBtn {
  display: inline-block;
  padding-bottom: 30px;
  text-align: end;
  align-self: flex-end;
}

.group_1,
.group_2 {
  display: inline-block;
}

.group_1 {
  display: none;
}

.btn {
  cursor: pointer;
}

.btn.delete {
  background: red;
}

.btn.save {
  background: green;
  color: #fff;
}
</style>