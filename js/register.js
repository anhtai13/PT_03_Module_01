function handleSumit() {
  const emailValue = document.querySelector("#email").value;
  const passwordValue = document.querySelector("#psw").value;
  const passwordRepeatValue = document.querySelector("#psw-repeat").value;

  const user = {
    email: emailValue,
    password: passwordValue,
    repeat: passwordRepeatValue,
  };

  const userLocal = JSON.parse(localStorage.getItem("user")) ?? [];
  let isDuplicate = false;
  userLocal.forEach((user) => {
    if (user.email === emailValue) {
      isDuplicate = true;
    }
  });

  if (!isDuplicate) {
    userLocal.push(user);
    localStorage.setItem("user", JSON.stringify(userLocal));
    window.location = "loginUser.html";
  } else {
    alert("Vui lòng đăng ký lại");
  }
}

function validate(user) {
  const error = {
    isError: false,
    emailMsg: "",
    passwordMsg: "",
  };
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!user.email.math(re)) {
    error.isError = true;
    error.emailMsg = "Email của bạn không đúng định dạng. Vui lòng nhập lại.";
  }

  if (user.password.length < 8) {
    error.isError = true;
    error.passwordMsg = "Password không được dưới 8 ký tự. Vui lòng nhập lại.";
  }
  return error;
}
