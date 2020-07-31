// Storage controller

const DataManager = (function () {
  return {
    loadItems: () => {
      if (localStorage.getItem("item-list") === null) {
        // localStorage.setItem("item-list", [1,23]);
        return [];
      } else {
        //    console.log(localStorage.getItem("item-list"));
        const item = JSON.parse(localStorage.getItem("item-list"));

        return item;
      }
    },
    saveItem: (lst) => {
      localStorage.setItem("item-list", JSON.stringify(lst));
    },
  };
})();

// Item Controller
const itemCtrl = (function () {
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  const data = {
    items: [],
    currentItem: null,
    totalCalories: 0,
  };

  // public methods
  return {
    getItems: () => {
      return data.items;
    },
    addItem: (obj) => {
      // create id
      let id = 1;
      if (data.items.length > 0) {
        id = data.items[data.items.length - 1].id + 1;
      }
      obj.id = id;
      obj.calories = parseInt(obj.calories);
      const newItem = new Item(id, obj.name, obj.calories);
      data.items.push(newItem);

      return newItem;
    },
    logData: () => {
      return data;
    },
    getTotalCalories: () => {
      calories = data.items.reduce((acc, cur) => (acc += cur.calories), 0);
      return calories;
    },
    getItemById: function (id) {
      return data.items.filter((x) => x.id === id)[0];
    },
    setItems: (items) => {
      data.items = items;
    },
    updateItem: function (name, calories) {
      calories = parseInt(calories);
      const input = itemCtrl.getItemById(data.currentItem.id);
      input.name = name;
      input.calories = calories;

      return input;
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem() {
      return data.currentItem;
    },
    deleteByID(id) {
      const item = itemCtrl.getItemById(id);
      //  const index = data.items.findIndex(item);
      data.items = data.items.filter((item) => {
        return item.id !== id;
      });
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories",
    listItems: "#item-list li",
  };

  // private methods
  const _populateItemList = (items) => {
    let html = "";

    items.forEach((item) => {
      html += `<li id='item-${item.id}' class='collection-item '>
            <strong>${item.name}</strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
            </li>
            `;
    });

    document.querySelector(UISelectors.itemList).innerHTML = html;
  };
  /// public methods
  return {
    populateItemList: (items) => {
      _populateItemList(items);
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },
    addListItem: function (item) {
      UICtrl.showList();
      // create li element
      const li = document.createElement("li");
      li.className = "collection-item";
      li.id = `item-${item.id}`;
      li.innerHTML = ` <strong>${item.name}</strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },
    updateItem: (item) => {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      listItems = Array.from(listItems);
      listItems.forEach((listItem) => {
        const id = parseInt(listItem.id.split("-")[1]);
        console.log(listItem.id);
        if (id === item.id) {
          document.querySelector(
            `#${listItem.id}`
          ).innerHTML = ` <strong>${item.name}</strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        }
      });
    },
    deleteItem: (currenetItem) => {
      let li = document.querySelectorAll(UISelectors.listItems);
      li = Array.from(li);

      li.forEach((item) => {
        if (item.id === `item-${currenetItem.id}`) {
          item.remove();
        }
      });
    },
    clearFields: () => {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },
    hideList: () => {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    showList: () => {
      document.querySelector(UISelectors.itemList).style.display = "block";
    },
    setTotalCalories() {
      const totalCalories = itemCtrl.getTotalCalories();
      document.querySelector(
        UISelectors.totalCalories
      ).textContent = totalCalories;
    },
    clearEditState: function () {
      UICtrl.clearFields();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },
    getSelectors: function () {
      return UISelectors;
    },
    addItemToForm: function () {
      const currentItem = itemCtrl.getCurrentItem();
      console.log(currentItem);
      document.querySelector(UISelectors.itemNameInput).value =
        currentItem.name;
      document.querySelector(UISelectors.itemCaloriesInput).value =
        currentItem.calories;

      UICtrl.showEditState();
    },
  };
})();

let text = "";
// App Controller
const App = (function (itemCtrl, UICtrl) {
  // load event listeners
  const loadEventListeners = function () {
    // get ui selectors
    const UISelectors = UICtrl.getSelectors();
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", addItemSubmit);

    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemEditClick);

    // update item event
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener("click", itemUpdateSumit);

    document
      .querySelector(UISelectors.backBtn)
      .addEventListener("click", (e) => {
        e.preventDefault();
        UICtrl.clearEditState();
      });

    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener("click", deleteItem);
  };

  document.addEventListener("keypress", (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }
  });

  const addItemSubmit = function (e) {
    e.preventDefault();
    // Get form input from ui control
    const input = UICtrl.getItemInput();
    if (input.name !== "" && input.calories !== "") {
      // add item to the the item controler
      const newItem = itemCtrl.addItem(input);
      // add item to the ui list
      UICtrl.addListItem(newItem);
      // get total calories
      UICtrl.setTotalCalories();
      // Clear form
      UICtrl.clearFields();
      DataManager.saveItem(data.items);
    }
  };

  const itemEditClick = function (e) {
    e.preventDefault();
    if (e.target.classList.contains("edit-item")) {
      //  get list item id
      const li = e.target.parentNode.parentNode;
      const id = parseInt(li.id.split("-")[1]);
      input = itemCtrl.getItemById(id);
      itemCtrl.setCurrentItem(input);
      UICtrl.addItemToForm();
      UICtrl.setTotalCalories();
      DataManager.saveItem(itemCtrl.getItems());
    }
  };

  const itemUpdateSumit = function (e) {
    e.preventDefault();

    // get item input
    const input = UICtrl.getItemInput();

    const updatedItem = itemCtrl.updateItem(input.name, input.calories);
    console.log("app", updatedItem);
    // update ui
    UICtrl.updateItem(updatedItem);
    UICtrl.clearEditState();
    UICtrl.setTotalCalories();
    DataManager.saveItem(itemCtrl.getItems());
  };

  const deleteItem = (e) => {
    e.preventDefault();
    // update item ctrl - item list
    itemCtrl.deleteByID(itemCtrl.getCurrentItem().id);
    // delete in the ui
    UICtrl.deleteItem(itemCtrl.getCurrentItem());
    UICtrl.clearEditState();
    UICtrl.setTotalCalories();
    DataManager.saveItem(data.items);
  };

  // public methods
  return {
    init: function () {
      console.log("initialzing app...");
      UICtrl.clearEditState();
      // fetch items from db
      itemCtrl.setItems(DataManager.loadItems());
      const items = itemCtrl.getItems();
      if (items.length == 0) {
        UICtrl.hideList();
      } else {
        UICtrl.showList();
      }

      // populate list
      UICtrl.populateItemList(items);

      // load event listeners
      loadEventListeners();
    },
  };
})(itemCtrl, UICtrl);

App.init();
