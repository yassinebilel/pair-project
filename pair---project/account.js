var arr = [];

var storedUsers = JSON.parse(localStorage.getItem("users"));

if (storedUsers !== null) {
  arr = storedUsers;
}

function makeaccount() {
  return {
    validatename: validatename,
    validatephone: validatephone,
    validatepassword: validatepassword,
    handleaccountcreation: handleaccountcreation,
    savetoaccount: savetoaccount,
  };
}

function validatename(name, lastname) {
  return name.length > 0 && lastname.length > 0;
}

function validatephone(phone) {
  return phone.length > 6;
}

function validatepassword(password) {
  var havupper = false;
  var havnumber = false;
  var havspecialcarac = false;

  for (var i = 0; i < password.length; i++) {
    var char = password[i];

    if (char >= "A" && char <= "Z") {
      havupper = true;
    } else if (char >= "0" && char <= "9") {
      havnumber = true;
    } else if (char.match(/[.?{}]/)) {
      havspecialcarac = true;
    }
  }
  return havupper && havnumber && havspecialcarac;
}

function handleaccountcreation(name, lastname, phone, password) {
  if (
    validatename(name, lastname) &&
    validatephone(phone) &&
    validatepassword(password)
  ) {
    alert("Account created successfully");
    return true;
  } else {
    alert("Invalid name, phone, or password");
    return false;
  }
}

function savetoaccount(name, lastname, phone, password) {
  var user = {
    name: name,
    lastname: lastname,
    phone: phone,
    email: document.querySelector('input[placeholder="Email"]').value,
    password: password,
  };
  arr.push(user);
  localStorage.setItem("users", JSON.stringify(arr));
}

$(document).ready(function () {
  var account = makeaccount();

  $("form").on("submit", function (e) {
    e.preventDefault();

    var name = document.querySelector('input[placeholder="First Name"]').value;
    var lastname = document.querySelector(
      'input[placeholder="Last Name"]'
    ).value;
    var phone = document.querySelector(
      'input[placeholder="Phone Number"]'
    ).value;
    var password = document.querySelector(
      'input[placeholder="Password"]'
    ).value;

    if (account.handleaccountcreation(name, lastname, phone, password)) {
      account.savetoaccount(name, lastname, phone, password);
      window.location.href = "index.htm";
    }
  });
});
