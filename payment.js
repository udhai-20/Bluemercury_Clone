document.querySelector("form").addEventListener("submit", btnsub);

function btnsub(event) {
  event.preventDefault();
  console.log("added");
  let usercardnum = document.querySelector("#cardnum").value;
  let cardname = document.querySelector("#cardname").value;
  let expdate = document.querySelector("#expairydate").value;
  let cvv = document.querySelector("#CVV").value;

  if (
    usercardnum === "111222333444555" &&
    cardname === "udhaya" &&
    expdate == "2023" &&
    cvv === "000"
  ) {
    alert("Order Placed Sucessfully");
    window.location.href = "index.html";
  } else {
    alert("Please Enter Valid Details");
  }
}
