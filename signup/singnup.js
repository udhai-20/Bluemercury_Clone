document.querySelector("form").addEventListener("submit", singnup);
// = JSON.parse(localStorage.getItem(arr)) || []
let arr = JSON.parse(localStorage.getItem("useremail")) || [];
function singnup(e) {
  // console.log(e)
  e.preventDefault();
  let name1 = document.querySelector("#name1").value;
  let name2 = document.querySelector("#name2").value;
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;
  let obj = {
    name1: name1,
    name2: name2,
    email: email,
    pass: pass,
  };
  arr.push(obj);
  if (email == "" && pass == "" && name1 == "") {
    alert("please enter input field");
  }
  if (email == "" && pass != "") {
    alert("plese enter email");
  }

  if (email !== "" && pass == "") {
    alert("plese enter pass");
  } else if (email !== "" && pass !== "" && name1 !== "") {
    window.location.href = "login.html";
  }
  localStorage.setItem("useremail", JSON.stringify(arr));
  console.log(arr);
}
