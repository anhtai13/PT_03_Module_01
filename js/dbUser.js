const dbUser = [
  {
    id: 1,
    image: "/img/Zinzu Chan Lee.jpg",
    Customer: "Zinzu Chan Lee",
    Location: "Seoul",
    Gmail: "ZinzuChanLee@gmail.com",
    Role: "User",
    Status: "Offline",
  },
  {
    id: 2,
    image: "/img/Sonal Gharti.jpg",
    Customer: "Sonal Gharti",
    Location: "Tokyo",
    Gmail: "SonalGharti@gmail.com",
    Role: "User",
    Status: "Online",
  },
];
const usersDb = localStorage.getItem("users");
if (!usersDb) {
  localStorage.setItem("users", JSON.stringify(dbUser));
}

const users = JSON.parse(localStorage.getItem("users")) ?? [];

renderUser(users);
// render users
function renderUser(data) {
  //B1. Xác định element sẽ thay đổi
  const tbodyElement = document.querySelector("tbody");
  let contentTbody = "";
  data.forEach((user, index) => {
    contentTbody += `
        <tr>
        <td>${index + 1}</td>
        <td><img src="${user.image}"/></td>
        <td>${user.Customer}</td>
        <td>${user.Location}</td>
        <td>${user.Gmail}</td>
        <td>${user.Role}</td>
        <td>${user.Status}</td>
        <td><button class="btn btn-danger" onclick="handleDelete(${
          user.id
        })">Delete</button></td></td>
        
        </tr>
        `;
  });
  tbodyElement.innerHTML = contentTbody;
}
// handle Delete
function handleDelete(id) {
  const isDelete = confirm("Bạn chắc chắn muốn xóa");

  // Nếu người dùng muốn xóa thì sẽ kết thúc function
  if (!isDelete) {
    return;
  }
  console.log(1111, id);

  const users = JSON.parse(localStorage.getItem("users"));
  users.forEach((user, i) => {
    if (user.id == id) {
      users.splice(i, 1);
    }
  });
  localStorage.setItem("users", JSON.stringify(users));
  renderUser(users);
}
// search
function btnSearch() {
  let searchValue = document.querySelector("#search").value;
  const users = JSON.parse(localStorage.getItem("users")) ?? [];
  const listUser = users.filter((user) => {
    return Object.values(user.Customer)
      .join("")
      .toLocaleLowerCase()
      .includes(searchValue.toLowerCase());
  });
  renderUser(listUser);
}
function handleLogout() {
  localStorage.removeItem("adminLocal");
  window.location = "logInAdmin.html";
}
