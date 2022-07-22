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

// let slideimage2 = [
//     {
//       brand: "Puma",
//       name: "PCA SKIN",
//       price: "$53",
//       size: "X,XX,XXL",
//       productID: "women1",
//       catagory: "Casual",
//       img:" https://cdn.shopify.com/s/files/1/0283/0185/2747/p…lobal_images-390205025008-1_600x.jpg?v=1656609271",
//     },
//     {
//       brand: "Gap",
//       name: "balck bella",
//       price: "1347",
//       size: "X,M,L,XX,XXL",
//       productID: "women2",
//       catagory: "festive",
//       img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025010052-1_235x.jpg?v=1657340365",
//     },
//     {
//       brand: "Puma",
//       name: "chil pill supersoft palysuit",
//       price: "799",
//       size: "M,L,XX,XXS",
//       productID: "women3",
//       catagory: "party",
//       img: https://cdn.shopify.com/s/files/1/0283/0185/2747/p…lobal_images-390205025008-1_600x.jpg?v=1656609271",
//     },
//     {
//       brand: "Gap",
//       name: "plus size womens",
//       price: "2000",
//       size: "X,M,L,XXS,XXL",
//       productID: "women4",
//       catagory: "formal",
//       img: https://cdn.shopify.com/s/files/1/0283/0185/2747/p…lobal_images-390205025008-1_600x.jpg?v=1656609271",
//     },
//     {
//       brand: "Bady Moo",
//       name: "balck bella",
//       price: "1347",
//       size: "X,M,L",
//       productID: "women5",
//       catagory: "workout",
//       img: https://cdn.shopify.com/s/files/1/0283/0185/2747/p…lobal_images-390205025008-1_600x.jpg?v=1656609271",
//     },
//     {
//       brand: "Pepe jeans",
//       name: "plus size womens",
//       price: "979",
//       size: "XXS,M,L",
//       productID: "women6",
//       catagory: "travel",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_228327501_1_857abfa6.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Puma",
//       name: "chil pill supersoft palysuit",
//       price: "2000",
//       size: "XXL,M,L",
//       productID: "women7",
//       catagory: "sports",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0769_1_90caf4b3.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Gap",
//       name: "chil pill supersoft palysuit",
//       price: "1347",
//       size: "X,M,L,XX",
//       productID: "women8",
//       catagory: "Casual",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kazo-123019black_1_85f6e006.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Bady Moo",
//       name: "balck bella",
//       price: "976",
//       size: "XS,M,L,XX",
//       productID: "women9",
//       catagory: "festive",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Gap",
//       name: "woman cotton off white",
//       price: "456",
//       size: "X,L,XX",
//       productID: "women10",
//       catagory: "party",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/h/ahtufrgfe19523_1_e0416277.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Bee bay",
//       name: "woman cotton off white",
//       price: "986",
//       size: "M,L,XXS",
//       productID: "women11",
//       catagory: "formal",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwkea595-1_dc090828.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Kaniroot",
//       name: "chill pill supersoft",
//       price: "567",
//       size: "S,M,L,XXl",
//       productID: "women12",
//       catagory: "workout",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/3/238451501_1_43bf9c90.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Bee bay",
//       name: "Curev multi-Color",
//       price: "765",
//       size: "S,X,L,XXl",
//       productID: "women13",
//       catagory: "travel",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Gap",
//       name: "Mega striple",
//       price: "9999",
//       size: "S,M,X,XXL",
//       productID: "women14",
//       catagory: "sports",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_119512401_1_e2d71be7.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Puma",
//       name: "balck bella",
//       price: "1347",
//       size: "S,M,X,XXL",
//       productID: "women15",
//       catagory: "Casual",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/4/146117301_1_7fcd0574.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Kaniroot",
//       name: "chil pill supersoft palysuit",
//       price: "799",
//       size: "S,M,L,XXL",
//       productID: "women16",
//       catagory: "festive",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwsivc466_1_a6c9da54.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Puma",
//       name: "plus size womens",
//       price: "2000",
//       size: "S,XX",
//       productID: "women17",
//       catagory: "party",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/ind158-pnk_1_3dc181e4.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Gap",
//       name: "balck bella",
//       price: "1347",
//       size: "S,M,XX,XXL",
//       productID: "women18",
//       catagory: "formal",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/h/pheeta-pht0067_1_96256fbd.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Bee bay",
//       name: "plus size womens",
//       price: "979",
//       size: "M,XXL,XX",
//       productID: "women19",
//       catagory: "workout",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_228327501_1_857abfa6.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Puma",
//       name: "chil pill supersoft palysuit",
//       price: "2000",
//       size: "M,X,L,XXL",
//       productID: "women20",
//       catagory: "travel",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0769_1_90caf4b3.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Puma",
//       name: "chil pill supersoft palysuit",
//       price: "1347",
//       size: "M,L,XXL",
//       productID: "women21",
//       catagory: "sport",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kazo-123019black_1_85f6e006.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Gap",
//       name: "balck bella",
//       price: "976",
//       size: "S,XX",
//       productID: "women22",
//       catagory: "Casual",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Puma",
//       name: "woman cotton off white",
//       price: "456",
//       size: "XXL",
//       productID: "women23",
//       catagory: "festive",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/h/ahtufrgfe19523_1_e0416277.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Gap",
//       name: "woman cotton off white",
//       price: "986",
//       size: "S,X,L",
//       productID: "women24",
//       catagory: "party",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwkea595-1_dc090828.jpg?rnd=20200526195200",
//     },
//     {
//       brand: "Kaniroot",
//       name: "chill pill supersoft",
//       price: "567",
//       size: "S,XXL,XX",
//       productID: "women25",
//       catagory: "formal",
//       img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/3/238451501_1_43bf9c90.jpg?rnd=20200526195200",
//     },
//   ];

// let Leftbtn1 = document.querySelector("#leftbtn1");
// let Rightbtn1 = document.querySelector("#rightbtn1");
// let img1 = document.getElementById("crauser");
// let slidecount1 = 0;
// Rightbtn.addEventListener("click", function () {
//   slidecount1++;
//   if (slidecount === slidemage.length) {
//     slidecount = 0;
//   }
//   img.src = slidemage[slidecount];
// });
// Leftbtn.addEventListener("click", function () {
//   if (slidecount === 0) {
//     slidecount = slidemage.length;
//   }
//   slidecount--;
//   img.src = slidemage[slidecount];
// });
