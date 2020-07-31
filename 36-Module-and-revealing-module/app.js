// (function () {

//     return {

//     }
// })

// const UICtrl = (function () {
//   let text = "Hello world";

//   const _changeText = function () {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   };

//   return {
//     changeText: function () {
//       _changeText();
//     },
//   };
// })();

// UICtrl.changeText();

const itemCtrl = (function () {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log("item add");
  }

  function get(id) {
    return _data.find((item) => {
      return item.id == id;
    });
  }

  return {
    add,
    get,
  };
})();

itemCtrl.add({ id: 1, name: "moti" });

console.log(itemCtrl.get(1));
