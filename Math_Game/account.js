let users = JSON.parse(localStorage.getItem("users")) || [];

function makeaccount() {
  return {
    validatename,
    validatephone,
    validatepassword,
    handleaccountcreation,
    savetoaccount,
  };
}

function validatename(name, lastname) {
  return name.length > 0 && lastname.length > 0;
}

function validatephone(phone) {
  return phone.length > 6;
}

function validatepassword(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[.?{}]/.test(password);
  return hasUpper && hasNumber && hasSpecialChar;
}

function handleaccountcreation(name, lastname, phone, password) {
  if (validatename(name, lastname) && validatephone(phone) && validatepassword(password)) {
    alert("Account created successfully");
    return true;
  } else {
    alert("Invalid name, phone, or password");
    return false;
  }
}

function savetoaccount(name, lastname, phone, password) {
  const user = {
    name,
    lastname,
    phone,
    email: document.querySelector('input[placeholder="Email"]').value,
    password,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

$(document).ready(function () {
  const account = makeaccount();

  $("form").on("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="First Name"]').value;
    const lastname = document.querySelector('input[placeholder="Last Name"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    if (account.handleaccountcreation(name, lastname, phone, password)) {
      account.savetoaccount(name, lastname, phone, password);
      window.location.href = "index.htm";
    }
  });
});
