const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// JSON.parse() is take it back into whatever it was initail.
const items = JSON.parse(localStorage.getItem("items")) || [];
const checkAll = document.querySelector('#checkAll');
let checkAllItem = JSON.parse(localStorage.getItem("checkAllItem")) || false;

if(checkAllItem) {
  // checkAll.querySelector("input").checked = true;

}

function addItem(e) {
  e.preventDefault();
  // console.log(e);
  const text = (this.querySelector("[name='item']")).value;
  const item = {
    text,
    done: false,
  }
  // console.log(item);
  items.push(item);
  // console.table(items);
  populateList(items, itemsList);

  // localStorage can only use string on it
  localStorage.setItem("items", JSON.stringify(items));

  this.reset();
};

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
        <label for="item${i}">${plate.text}</label> 
      </li>
    `;
  }).join("");
}

function toggleDone(e) {
  if(!e.target.matches("input")) return; // skip this unless it's an input
  // console.log(e.target);

  const el = e.target;
  // console.log(el.dataset.index);
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("item", JSON.stringify(items));
  populateList(items, itemsList);
}

function handleCheckAll() {
  const input = this.querySelector("input");
  input.checked = !input.checked;
  if(input.checked) {
    checkAllItem = true;
    items.map((item, i) => {
      item.checked = true;
      items[i].done = true;
    })
  } else {
    checkAllItem = false;
    items.map((item, i) => {
      item.checked = false;
      items[i].done = false;
    })
  }
  localStorage.setItem("checkAllItem", checkAllItem);
  localStorage.setItem("item", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
checkAll.addEventListener("click", handleCheckAll);

populateList(items, itemsList);
