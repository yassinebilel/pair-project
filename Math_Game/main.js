function makelogin() {
  return {
    validatemail,
    validatepassword,
    handlelogin,
    rememberme,
  };
}

function validatemail(email) {
  return email.includes("@") && email.includes(".");
}

function validatepassword(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[.?{}]/.test(password);
  return hasUpper && hasNumber && hasSpecialChar;
}

function handlelogin(email, password) {
  if (validatemail(email) && validatepassword(password)) {
    alert("Login successful");
  } else {
    alert("Invalid email or password");
  }
}

function rememberme(email, password) {
  const rememberCheckbox = document.getElementById("rememberMe");
  if (rememberCheckbox.checked) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }
}

$(document).ready(function () {
  const login = makelogin();
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (storedEmail && storedPassword) {
    $('input[type="text"]').val(storedEmail);
    $('input[type="password"]').val(storedPassword);
    $("#rememberMe").prop("checked", true);
  }

  $("form").on("submit", function (e) {
    e.preventDefault();
    const email = $('input[type="text"]').val();
    const password = $('input[type="password"]').val();
    login.handlelogin(email, password);
    login.rememberme(email, password);
    window.location.href = "sdsdq.htm";
  });
});
