<template>
  <div class="newItem">
    <div class="itemBasicInfo">
      <div class="itemName">
        <span class="name">Name:</span>
        <input type="text" v-model="itemName" placeholder="Item name" />
      </div>
      <div class="itemPrice">
        <span>Price:</span>

        <input type="text" v-model="itemPrice" placeholder="Item price" />
      </div>
      <div class="itemNote">
        <span>Notes:</span>

        <textarea
          v-model="itemNote"
          placeholder="Please insert notes if any"
        ></textarea>
      </div>
    </div>
    <div class="btnSection">
      <button class="submitBtn" @click="newItem">Submit</button>
    </div>
  </div>
</template>

<script>
import { itemBus } from "../main";

export default {
  data: function () {
    return {
      itemName: "",
      itemPrice: null,
      itemNote: "",
    };
  },
  methods: {
    newItem() {
      itemBus.addItem(this.itemName, this.itemPrice, this.itemNote);
      this.itemName = "";
      this.itemPrice = null;
      this.itemNote = "";
    },
  },
};
</script>

<style scoped>
span {
  display: block;
  padding: 10px 0;
}

.newItem {
  width: 600px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
}
.itemName,
.itemPrice {
  display: inline-block;
  padding: 20px;
}

.itemNote {
  padding: 20px;
}

.itemNote textarea {
  resize: none;
  width: 447px;
  height: 83px;
}

.submitBtn {
  cursor: pointer;

  width: 60px;
  height: 60px;
  margin: 0 20px;

  position: relative;
  top: 65%;
}
</style>