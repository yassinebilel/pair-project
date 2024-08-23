function makelogin() {
  return {
    validatemail: validatemail,
    validatepassword: validatepassword,
    handlelogin: handlelogin,
    rememberme: rememberme,
  };
}

function validatemail(email) {
  var at = false;
  var dot = false;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      at = true;
    } else if (email[i] === ".") {
      dot = true;
    }
  }
  return at && dot;
}

function validatepassword(password) {
  var havupper = false;
  var havnumber = false;
  var havspecialcarac = false;

  for (let i = 0; i < password.length; i++) {
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

function handlelogin(email, password) {
  if (validatemail(email) && validatepassword(password)) {
    alert("login successful");
  } else {
    alert("invalid email or password");
  }
}

function rememberme(email, password) {
  var remembercheckbox = document.getElementById("rememberMe");
  if (remembercheckbox.checked) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }
}

$(document).ready(function () {
  var login = makelogin();

  var storedemail = localStorage.getItem("email");
  var storedpassword = localStorage.getItem("password");

  if (storedemail && storedpassword) {
    $('input[type="text"]').val(storedemail);
    $('input[type="password"]').val(storedpassword);
    $("#rememberMe").prop("checked", true);
  }

  $("form").on("submit", function (e) {
    e.preventDefault();

    var email = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;
    login.handlelogin(email, password);
    login.rememberme(email, password);
    window.location.href = "sdsdq.htm";
  });
});
