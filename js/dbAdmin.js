const dbAdmin = [
  {
    adminName: "admin@gmail.com",
    password: "123456",
  },
];
const adminDb = localStorage.getItem("admin");
if (!adminDb) {
  localStorage.setItem("admin", JSON.stringify(dbAdmin));
}

function handleClick() {
  const nameValue = document.querySelector("#email").value;
  const passwordValue = document.querySelector("#password").value;

  const adminLocal = JSON.parse(localStorage.getItem("admin")) ?? [];

  adminLocal.forEach((item) => {
    if (item.adminName === nameValue && item.password === passwordValue) {
      window.location = "homeAdmin.html";
      alert("Login successful");
    } else {
      alert("Login failed!!!!");
    }
  });
}

function handleLogout() {
  localStorage.removeItem("adminLocal");
  window.location = "logInAdmin.html";
}
