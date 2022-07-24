let ProductData = [
  {
    brand: "Kiehl's Since 1851",
    name: "Ultimate Man Body Scrub Soap",
    price: "15",
    size: "Large",
    productID: "prod_1",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700194718053-1_525x525.jpg?v=1655137288",
  },
  {
    brand: "OSEA",
    name: "Atmosphere Protection Cream",
    price: "48",
    size: "classic",
    productID: "prod_2",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025010052-1_235x.jpg?v=1657340365",
  },
  {
    brand: "NUFACE",
    name: "NuFACE® Hydrating Aqua Gel",
    price: "59",
    size: "Large",
    productID: "prod_3",
    Stock: "soldout",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-169oz-850019720099-1_235x.jpg?v=1656386023",
  },
  {
    brand: "TAMMY FENDER",
    name: "Luminous Morning Crème",
    price: "95",
    size: "Large",
    productID: "prod_4",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-853421004115-1_235x.jpg?v=1658261624",
  },
  {
    brand: "SUPERGOOP!",
    name: "PLAY Everyday Lotion SPF 50 with Sunflower Extract",
    price: "58",
    size: "Large",
    productID: "prod_5",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-title-17oz-816218022969-1_235x.jpg?v=1656523215",
  },
  {
    brand: "OSEA",
    name: "Pseudo Citrine Lotion",
    price: "60",
    size: "Large",
    productID: "prod_6",
    Stock: "soldout",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850018053587-1_235x.jpg?v=1653065275",
  },
  {
    brand: "KIEHL'S SINCE 1851",
    name: "Blue Astringent Herbal Lotion Toner",
    price: "32",
    size: "Large",
    productID: "prod_7",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-169oz-3700194721619-1_235x.jpg?v=1652805785",
  },
  {
    brand: "OSEA",
    name: "Tripeptide-R Neck Repair",
    price: "126",
    size: "Large",
    productID: "prod_8",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000555396-1_550x.jpg?v=1653070650",
  },
  {
    brand: "KIEHL'S SINCE 1851",
    name: "Vitablast C® 20% Cream",
    price: "96",
    size: "Travel",
    productID: "prod_9",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011231-1_235x.jpg?v=1653068855",
  },
  {
    brand: "KIEHL'S SINCE 1851",
    name: "woman cotton off white",
    price: "310",
    size: "Travel",
    productID: "prod_10",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-656509701018-1_235x.jpg?v=1656703207",
  },
  {
    brand: "KIEHL'S SINCE 1851",
    name: "TCurl Moisturizing Shampoo",
    price: "34",
    size: "Travel",
    productID: "prod_11",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-685428027770-1_825x.jpg?v=1658421412",
  },
  {
    brand: "MARA",
    name: "chill pill supersoft",
    price: "311",
    size: "Travel",
    productID: "prod_12",
    Stock: "soldout",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-1oz-747930000020-1_235x.jpg?v=1657026909",
  },
  {
    brand: "MARA",
    name: "Curev multi-Color",
    price: "149",
    size: "Large",
    productID: "prod_13",
    Stock: "soldout",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-ombre-860004981190-1_235x.jpg?v=1657807708",
  },
  {
    brand: "NUFACE",
    name: "Mega striple",
    price: "449",
    size: "Large",
    productID: "prod_14",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-858271002472-1_235x.jpg",
  },
  {
    brand: "MARA",
    name: "Algae Enzyme Cleansing Oil",
    price: "59",
    size: "Travel",
    productID: "prod_15",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-866003000498-1_525x525.jpg?v=1656385004",
  },
  {
    brand: "NOBLE PANACEA",
    name: "chil pill supersoft palysuit",
    price: "599",
    size: "Large",
    productID: "prod_16",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060552905647-1_825x.jpg?v=1657670868",
  },
  {
    brand: "Noble Panacea",
    name: "The Brilliant Prime Radiance Serum Refill",
    price: "232",
    size: "Travel",
    productID: "prod_17",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-1230000065061-1_235x.jpg?v=1656692051?rnd=20200526195200",
  },
  {
    brand: "SISLEY-PARIS",
    name: "Advanced Skincare Wand with Red Light Therapy",
    price: "149",
    size: "Travel",
    productID: "prod_18",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-rosegold-860004981183-1_525x525.jpg?v=1658421893",
  },
  {
    brand: "SISLEY-PARIS",
    name: "Black Rose Cream Mask",
    price: "149",
    size: "Travel",
    productID: "prod_19",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3473311400000-1_235x.jpg?v=1656386796",
  },
  {
    brand: "111SKIN",
    name: "Vitamin C BrighteningKanirootr",
    price: "986",
    size: "Travel",
    productID: "prod_25",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-856862008124-1_235x.jpg",
  },
  {
    brand: "SISLEY-PARIS",
    name: "Sisleÿa L'Integral Anti-Age Eye & Lip Contour Cream",
    price: "1347",
    size: "Travel",
    productID: "prod_21",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3473311510112-1_525x525.jpg?v=1658450103",
  },
  {
    brand: "Estée Lauder",
    name: "Revitalizing Supreme+ Global Anti-Aging Cell Power Crème",
    price: "88",
    size: "Travel",
    productID: "prod_22",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-5treatments-857124004069-1_235x.jpg?v=1656383135",
  },
  {
    brand: "Estée Lauder",
    name: "Retinol Resurfacing Pad",
    price: "456",
    size: "Large",
    productID: "prod_23",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-027131349624-1.jpg?v=1658456863393",
  },
  {
    brand: "111SKIN",
    name: "woman cotton off white",
    price: "986",
    size: "S,X,L",
    productID: "prod_24",
    Stock: "available",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060280370083-1_235x.jpg?v=1656378238",
  },
];

let details = JSON.parse(localStorage.getItem("cartdetails")) || [];
let wishdetails = JSON.parse(localStorage.getItem("whishlist")) || [];

display(ProductData);

function display(data) {
  document.querySelector(".right").innerHTML = "";
  // console.log(data);
  data.forEach(function (elem, i) {
    let prod = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", elem.img);
    let brand = document.createElement("h4");
    brand.innerText = elem.brand;
    let name = document.createElement("p");
    name.innerText = elem.name;
    let price = document.createElement("p");
    price.innerText = "$" + elem.price;
    let bagbtn = document.createElement("button");
    bagbtn.innerText = "Add to Bag";
    bagbtn.addEventListener("click", function () {
      cartbtn(elem, i);
    });
    let wishbtn = document.createElement("button");
    wishbtn.innerText = "Wishlist";
    wishbtn.addEventListener("click", function () {
      wishlistbtn(elem, i);
    });
    prod.append(img, brand, name, price, bagbtn, wishbtn);
    document.querySelector(".right").append(prod);
  });
}
document
  .getElementById("filterbyprice")
  .addEventListener("change", filterprice);
document
  .getElementById("filterbybrand")
  .addEventListener("change", filterbrand);
document
  .getElementById("filterbystock")
  .addEventListener("change", filterbystock);
document
  .getElementById("filterbysize")
  .addEventListener("change", filterbysize);

function filterbysize() {
  let select = document.getElementById("filterbysize").value;
  if (select === "filterbysize") {
    display(ProductData);
  } else {
    let sizefilter = ProductData.filter(function (elem) {
      return select === elem.size;
    });
    display(sizefilter);
    console.log(sizefilter);
  }
}

function filterbystock() {
  let select = document.getElementById("filterbystock").value;
  if (select === "filterbystock") {
    display(ProductData);
  } else {
    let stockfilter = ProductData.filter(function (elem) {
      return select === elem.Stock;
    });
    display(stockfilter);
    console.log(stockfilter);
  }
}

function filterbrand() {
  let select = document.getElementById("filterbybrand").value;
  if (select === "filterbybrand") {
    display(ProductData);
  } else {
    let filtered = ProductData.filter(function (elem) {
      return select === elem.brand;
    });
    display(filtered);
    console.log(filtered);
  }
}

function filterprice() {
  // console.log("select");
  let select = document.getElementById("filterbyprice").value;
  if (select === "ascending") {
    ProductData.sort(function (a, b) {
      return +a.price - +b.price;
    });
    display(ProductData);
    console.log(ProductData);
  } else if (select === "descending") {
    ProductData.sort(function (a, b) {
      return +b.price - +a.price;
    });
    display(ProductData);
  } else {
    if (select === "filterbyprice") {
      // console.log(ProductData);
      display(ProductData);
      window.location.reload();
    }
  }
}

function cartbtn(elem, i) {
  let flag = "false";
  for (let i = 0; i < details.length; i++) {
    if (elem.productID === details[i].productID) {
      flag = "true";
    }
  }
  if (flag == "true") {
    alert("Product Already added to bag");
  } else if (flag == "false") {
    alert("Product added to bag");
    details.push(elem);
    localStorage.setItem("cartdetails", JSON.stringify(details));
  }

  console.log(details);
}
let loginuser = JSON.parse(localStorage.getItem("login"));

if (loginuser != null) {
  let name = document.getElementById("username");
  name.style.color = "blue";
  name.innerText = loginuser.name1;
}

function wishlistbtn(elem, i) {
  let flag = "false";
  for (let i = 0; i < wishdetails.length; i++) {
    if (elem.productID === wishdetails[i].productID) {
      flag = "true";
    }
  }
  if (flag == "true") {
    alert("Product Already added to wishlist");
  } else if (flag == "false") {
    alert("Product added to wishlist");
    wishdetails.push(elem);
    localStorage.setItem("whishlist", JSON.stringify(wishdetails));
  }

  console.log(wishdetails);
}
