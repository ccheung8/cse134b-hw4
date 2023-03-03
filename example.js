// items array that contains all todo items
// JSON.parse is used to parse the stringified items from localStorage
// if localStorage is empty, make the items letiable an empty array
let items = JSON.parse(localStorage.getItem("todo-list")) || [];

// function to add item to the items array
function addItem() {
  // get the value of the input box with querySelector
  let inputBox = document.querySelector("#todo-input");
  let item = inputBox.value;

  // If input box is empty, return and alert the user
  // You can also do some more validation if here if you want
  if (item === "") return alert("Please enter data");

  // If input is valid, add item to items array
  items.push({
    value: item,
    time: new Date().toLocaleDateString("en-US"),
  });

  // then convert to a string with JSON.stringify and save to localStorage
  localStorage.setItem("todo-list", JSON.stringify(items));

  // call function to list all items
  listItems();

  // clear input box
  inputBox.value = "";
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function markAsDone(index) {
  items[index].done = !items[index].done;
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

// function to run when page loads
(function () {
  listItems();
})();
