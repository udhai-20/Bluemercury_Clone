document.querySelector("form").addEventListener("submit", btn);

function btn(event) {
  event.preventDefault();
  console.log("added");
  let useremail = document.querySelector("#Email").value;
  let country = document.querySelector("#country").value;
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let doornum = document.querySelector("#doorno").value;
  let address = document.querySelector("#address").value;
  let zipcode = document.querySelector("#postalcode").value;

  if (
    useremail === "" ||
    country === "" ||
    fname === "" ||
    lname === "" ||
    doornum === "" ||
    address === "" ||
    zipcode === ""
  ) {
    alert("Please Enter Valid Details");
  } else {
    window.location.href = "payment.html";
  }
}
