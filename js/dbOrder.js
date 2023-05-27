const dbOrder = [
  {
    id: "1",
    image: "/img/aoKhoac-muaDong-nu.jpg",
    nameProduct: "Áo khoác mùa đông nữ",
    price: "70.000 đ",
    quantity: "1",
    Customer: "Zinzu Chan Lee",
    Location: "Seoul",
    Gmail: "ZinzuChanLee@gmail.com",
    decription: "Áo khoác mùa đồng (nữ).",
  },
  {
    id: "2",
    image: "/img/aothun-angel-xxii.jpg",
    nameProduct: "Áo thun angel",
    price: "50.000 đ",
    quantity: "1",
    Customer: "Sonal Gharti",
    Location: "Tokyo",
    Gmail: "SonalGharti@gmail.com",
    decription: "Áo thun có in hình angel (nữ).",
  },
];
const orderDb = localStorage.getItem("orders");
if (!orderDb) {
  localStorage.setItem("orders", JSON.stringify(dbOrder));
}

const orders = JSON.parse(localStorage.getItem("orders"));

// Get the modal
let modal = document.getElementById("myModal");

let modalEdit = document.getElementById("myModal-edit");

// Get the button that opens the modal(add)
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const closes = document.querySelector(".closes");
const myModaledit = document.querySelector("#myModal-edit");

closes.onclick = function () {
  myModaledit.style.display = "none";
};

renderOrder(orders);
// render order
function renderOrder(data) {
  //B1. Xác định element sẽ thay đổi
  const tbodyElement = document.querySelector("tbody");
  let contentTbody = "";
  data.forEach((order, index) => {
    contentTbody += `
        <tr>
        <td>${index + 1}</td>
        <td><img src="${order.image}"/></td>
        <td>${order.nameProduct}</td>
        <td>${order.quantity}</td>
        <td>${order.price}</td>
        <td>${order.Customer}</td>
        <td>${order.Gmail}</td>
        <td><button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="handleEdit(${
          order.id
        })">View</button>
        </tr>
        `;
  });
  tbodyElement.innerHTML = contentTbody;
}
function handleEdit(id) {
  // render vào modal

  const myModaledit = document.querySelector("#myModal-edit");

  myModaledit.style.display = "block";
  const getProduct = JSON.parse(localStorage.getItem("orders"));
  let order;
  getProduct.forEach((prod) => {
    if (prod.id == id) {
      order = prod;
    }
  });
  renderModal(order);
}
// Render modal
function renderModal(order) {
  const idElement = document.querySelector("#product-view");
  const imgElement = document.querySelector("#product-img-view");
  const nameElement = document.querySelector("#name-product-view");
  const priceElement = document.querySelector("#price-product-view");
  const decriptionElement = document.querySelector("#decription-product-view");

  idElement.value = order?.id;
  imgElement.src = order?.image;
  nameElement.value = order?.nameProduct;
  priceElement.value = order?.price;
  decriptionElement.value = order?.decription;
}
function handleUpdate() {
  const idValue = document.querySelector("#product-view").value;
  const imgValue = document.querySelector("#product-img-view").src;
  const nameValue = document.querySelector("#name-product-view").value;
  const priceValue = document.querySelector("#price-product-view").value;
  const decriptionValue = document.querySelector(
    "#decription-product-view"
  ).value;
  const newProdouct = {
    id: idValue,
    image: imgValue,
    nameProduct: nameValue,
    price: priceValue,
    decription: decriptionValue,
  };

  // Lấy dữ liệu từ local về
  const products = JSON.parse(localStorage.getItem("products"));
  products.forEach((product, i) => {
    if (product.id == idValue) {
      products.splice(i, 1, newProdouct);
    }
  });
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct(products);
}
// search
function btnSearch() {
  let searchValue = document.querySelector("#search").value;
  const listOrder = orders.filter((order) => {
    return Object.values(order.nameProduct)
      .join("")
      .toLocaleLowerCase()
      .includes(searchValue.toLowerCase());
  });
  renderOrder(listOrder);
}

function handleLogout() {
  localStorage.removeItem("adminLocal");
  window.location = "logInAdmin.html";
}
