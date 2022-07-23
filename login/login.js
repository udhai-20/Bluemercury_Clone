document.querySelector("form").addEventListener("submit", login);
// let loginuser = JSON.parse(localStorage.getItem("login")) || [];
let userlogindetails = JSON.parse(localStorage.getItem("useremail")) || [];
function login(e) {
  console.log(e);
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;
  let obj = {
    loginemail: email,
    loginpassword: pass,
  };
  if (email == "" || pass == "") {
    alert("please fill input field");
  } else {
    let flag = "false";

    userlogindetails.forEach(function (e) {
      if (obj.loginemail == e.email && obj.loginpassword == e.pass) {
        flag = "true";
        // loginuser.push(e);
        alert("logged in sucessful");
        localStorage.setItem("login", JSON.stringify(e));
        window.location.href = "index.html";
      }
    });
    if (flag === "false") {
      alert("Please check the entered email or password incorrect");
    }
  }
}
// username
let loginuser = JSON.parse(localStorage.getItem("login"));

if (loginuser != null) {
  let name = document.getElementById("username");
  name.style.color = "blue";
  name.innerText = loginuser.name1;
}
