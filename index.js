let slidemage = [
  "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/m61-perfect-cleanse-hero-des-2_2000x.jpg?v=1658264119",
  "https://cdn.shopify.com/s/files/1/0283/0185/2747/collections/beauty-alfresco-brand-hero-wide_052e7430-8caa-4d17-a3c5-88094c058c80_2880x650.jpg?v=1651847695",
  "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/beauty-alfresco-summer-skin-repair-hero-des_2000x.jpg?v=1657297982",
];
console.log(slidemage);

let Leftbtn = document.querySelector("#leftbtn");
let Rightbtn = document.querySelector("#rightbtn");
let img = document.getElementById("crauser");
let slidecount = 0;
Rightbtn.addEventListener("click", function () {
  slidecount++;
  if (slidecount === slidemage.length) {
    slidecount = 0;
  }
  img.src = slidemage[slidecount];
});
Leftbtn.addEventListener("click", function () {
  if (slidecount === 0) {
    slidecount = slidemage.length;
  }
  slidecount--;
  img.src = slidemage[slidecount];
});
let loginuser = JSON.parse(localStorage.getItem("login"));

if (loginuser != null) {
  let name = document.getElementById("username");
  name.style.color = "blue";
  name.innerText = loginuser.name1;
}
