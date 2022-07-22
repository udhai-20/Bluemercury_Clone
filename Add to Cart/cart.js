let details = JSON.parse(localStorage.getItem("cartdetails")) || [];
display(details);
function display(detail) {
  //   console.log(details);

  document.querySelector("#cartright").innerHTML = "";
  let sum = 0;
  let qty = 0;
  detail.forEach(function (elem, i) {
    sum = sum + Number(elem.price);
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
    let addqty = document.createElement("button");
    addqty.setAttribute("id", "addqty");
    addqty.innerText = "+";
    addqty.addEventListener("click", function () {
      addbtn(1);
    });
    let deductqty = document.createElement("button");
    deductqty.setAttribute("id", "deductqty");
    deductqty.innerText = "-";
    deductqty.addEventListener("click", function () {
      deductbtn(i);
    });
    parent.append(
      img,
      brandname,
      prodname,
      prodprice,
      remove,
      addqty,
      deductqty
    );
    document.querySelector("#cartright").append(parent);
  });
  document.querySelector("#totalqty").innerText = qty;
  let final = document.querySelector("#totalpriz");
  final.innerText = "$" + sum;
  let btn = document.getElementById("apply");
  btn.addEventListener("click", function () {
    discount(sum);
  });
}

function btnremove(e, i) {
  console.log(details.length);
  details.splice(i, 1);
  display(details);
  localStorage.setItem("cartdetails", JSON.stringify(details));
}
function discount(sum) {
  let form = document.getElementById("promocode").value;
  if (form === "Masai30") {
    let discunt = Math.floor(sum - sum * (30 / 100));
    document.getElementById("afterdiscount").innerText = "USD $" + discunt;
  } else {
    let promocodvalid = document.getElementById("error");
    promocodvalid.style.color = "red";
    promocodvalid.innerText = "Enter a valid discount code or gift card";
  }
}

// function addbtn(l) {
//   qtty = l;

//   console.log(qtty);
//   //   let final = document.querySelector("#totalpriz");
//   //   final.innerText = "$" + increasesum;
// }
