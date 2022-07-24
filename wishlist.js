let wishdetails = JSON.parse(localStorage.getItem("whishlist")) || [];
// let branddetails = JSON.parse(localStorage.getItem("Newbrand")) || [];

display(wishdetails);

function display(detail) {
  console.log(detail);
  document.querySelector("#wishlistcontainer").innerHTML = "";
  let qty = 0;
  detail.forEach(function (elem, i) {
    qty++;
    console.log(elem);
    let parent = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", elem.img);
    let brandname = document.createElement("h4");
    brandname.innerText = elem.brand;
    let prodname = document.createElement("p");
    prodname.innerText = elem.name;
    let prodprice = document.createElement("p");
    prodprice.innerText = "$" + elem.price;
    let remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.innerText = "Remove";
    remove.addEventListener("click", function () {
      btnremove(elem, i);
    });
    // let addqty = document.createElement("button");
    // addqty.setAttribute("id", "addqty");
    // addqty.innerText = "+";
    // addqty.addEventListener("click", function () {
    //   addbtn(1);
    // });
    // let deductqty = document.createElement("button");
    // deductqty.setAttribute("id", "deductqty");
    // deductqty.innerText = "-";
    // deductqty.addEventListener("click", function () {
    //   deductbtn(i);
    // });
    parent.append(img, brandname, prodname, prodprice, remove);
    document.querySelector("#wishlistcontainer").append(parent);
  });
  document.querySelector("#wishqty").innerText = qty;
}

function btnremove(e, i) {
  console.log(wishdetails.length);
  wishdetails.splice(i, 1);
  display(wishdetails);
  localStorage.setItem("whishlist", JSON.stringify(wishdetails));
}
let loginuser = JSON.parse(localStorage.getItem("login"));

if (loginuser != null) {
  let name = document.getElementById("username");
  name.style.color = "blue";
  name.innerText = loginuser.name1;
}
