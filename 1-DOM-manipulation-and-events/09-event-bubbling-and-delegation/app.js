// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("card title");
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("card content");
// });
// document.querySelector(".card").addEventListener("click", function () {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function () {
//   console.log("col");
// });

// delegation
// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  const item = e;
  if (e.target.parentElement.classList.contains("delete-item")) {
      const deleteParent = e.target.parentElement.parentElement;
      deleteParent.remove();
  }
}
