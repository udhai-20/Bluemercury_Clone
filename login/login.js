document.querySelector("form").addEventListener("submit", login);
function login(e) {
  console.log(e);
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;
  if (email == "" || pass == "") {
    alert("please fill input field");
  }
  let obj = {
    loginemail: email,
    loginpassword: pass,
  };
  let flag = "false";
  let userlogindetails = JSON.parse(localStorage.getItem("useremail"));
  userlogindetails.forEach(function (e) {
    if (obj.loginemail == e.email && obj.loginpassword == e.pass) {
      flag = "true";
    }
  });
  if (flag == "true") {
    alert("logged in sucessful");
    window.location.href = "navbar.html";
  } else if (flag == "false") {
    alert("Please check the entered email or password incorrect");
  }
}
