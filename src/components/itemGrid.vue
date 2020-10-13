<template>
  <div class="itemGrid">
    <app-item v-for="(item, index) in allItems" :data-index="index">
      <div class="upperSection">
        <div class="newName">
          Name:
          <input v-model="item.newName" readonly class="nameInput" />
        </div>
        <div class="newPrice">
          Price:
          <input v-model="item.newPrice" readonly class="priceInput" />
        </div>
      </div>
      <div class="lowerSection">
        <div class="newNote">
          Notes:
          <br />
          <textarea v-model="item.newNote" readonly class="noteInput" />
        </div>
        <div class="funtionalBtn">
          <div class="group_1">
            <button class="btn delete" :clickIndex="index" @click="deleteItem">
              Delete
            </button>
            <button class="btn save" :clickIndex="index" @click="saveInfo">
              Save
            </button>
          </div>
          <div class="group_2">
            <button class="btn edit" :clickIndex="index" @click="editInfo">
              Edit
            </button>
          </div>
        </div>
      </div>
    </app-item>
  </div>
</template>

<script>
import { itemBus } from "../main";
import item from "./item";

export default {
  data: function () {
    return {
      allItems: [],
      showEditBlock: false,
      index: null,
    };
  },
  created() {
    itemBus.$on("addedItem", (name, price, note) => {
      var container = { newName: "", newPrice: null, newNote: "" };
      container.newName = name;
      container.newPrice = price;
      container.newNote = note;

      this.allItems.push(container);
    });
  },
  components: {
    "app-item": item,
  },
  methods: {
    deleteItem(e) {
      var deleteIndex = e.target.attributes.clickindex.value;
      var group_1 = document.getElementsByClassName("group_1")[deleteIndex];
      var group_2 = document.getElementsByClassName("group_2")[deleteIndex];
      var nameInput = document.getElementsByClassName("nameInput")[deleteIndex];
      var priceInput = document.getElementsByClassName("priceInput")[
        deleteIndex
      ];
      var noteInput = document.getElementsByClassName("noteInput")[deleteIndex];

      this.allItems.splice(deleteIndex, 1);

      // group_1、group_2 to hide/show
      group_1.style.display = "none";
      group_2.style.display = "block";

      // remove readonly attr
      nameInput.setAttribute("readonly", "");
      priceInput.setAttribute("readonly", "");
      noteInput.setAttribute("readonly", "");

      // set border color
      nameInput.style.border = "none";
      priceInput.style.border = "none";
      noteInput.style.border = "none";
    },
    editInfo(e) {
      var editIndex = e.target.attributes.clickindex.value;
      var group_1 = document.getElementsByClassName("group_1")[editIndex];
      var group_2 = document.getElementsByClassName("group_2")[editIndex];
      var nameInput = document.getElementsByClassName("nameInput")[editIndex];
      var priceInput = document.getElementsByClassName("priceInput")[editIndex];
      var noteInput = document.getElementsByClassName("noteInput")[editIndex];

      // group_1、group_2 to show/ hide
      group_1.style.display = "block";
      group_2.style.display = "none";

      // remove readonly attr
      nameInput.removeAttribute("readonly");
      priceInput.removeAttribute("readonly");
      noteInput.removeAttribute("readonly");

      // set border color
      nameInput.style.border = "1px solid black";
      priceInput.style.border = "1px solid black";
      noteInput.style.border = "1px solid black";
    },
    saveInfo(e) {
      var saveIndex = e.target.attributes.clickindex.value;
      var group_1 = document.getElementsByClassName("group_1")[saveIndex];
      var group_2 = document.getElementsByClassName("group_2")[saveIndex];
      var nameInput = document.getElementsByClassName("nameInput")[saveIndex];
      var priceInput = document.getElementsByClassName("priceInput")[saveIndex];
      var noteInput = document.getElementsByClassName("noteInput")[saveIndex];

      // group_1、group_2 to hide/show
      group_1.style.display = "none";
      group_2.style.display = "block";

      // remove readonly attr
      nameInput.setAttribute("readonly", "");
      priceInput.setAttribute("readonly", "");
      noteInput.setAttribute("readonly", "");

      // set border color
      nameInput.style.border = "none";
      priceInput.style.border = "none";
      noteInput.style.border = "none";
    },
  },
};
</script>

<style scoped>
.itemGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h2 {
  text-align: center;
  margin: 30px auto;
  font-size: 30px;
}
</style>