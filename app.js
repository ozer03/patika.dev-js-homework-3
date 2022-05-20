const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


function displayFood(country){
  itemAlani.innerHTML = `
   ${itemCreat(country[0], country[0], country[0], country[0], )}
   ${itemCreat(country[1], country[1], country[1], country[1], )}
   ${itemCreat(country[2], country[2], country[2], country[2], )}
   `;
 }


 
 function displayAll(){
  itemAlani.innerHTML = `
  ${itemCreat(menu[0], menu[0], menu[0], menu[0], )}
  ${itemCreat(menu[1], menu[1], menu[1], menu[1], )}
  ${itemCreat(menu[2], menu[2], menu[2], menu[2], )}
  ${itemCreat(menu[3], menu[3], menu[3], menu[3], )}
  ${itemCreat(menu[4], menu[4], menu[4], menu[4], )}
  ${itemCreat(menu[5], menu[5], menu[5], menu[5], )}
  ${itemCreat(menu[6], menu[6], menu[6], menu[6], )}
  ${itemCreat(menu[7], menu[7], menu[7], menu[7], )}
  ${itemCreat(menu[8], menu[8], menu[8], menu[8], )}
`;
}

//DOMS
let buttonAlani = document.querySelector("#btnField");
let itemAlani = document.querySelector("#itemField");


//Oluşturulan Buttonların sayfaya yerleştirilmesi

buttonAlani.innerHTML = `
<button type="button" id="btnAll" class="btn btn-outline-dark btn-item">All</button>
<button type="button" id="btnKorea" class="btn btn-outline-dark btn-item">Korea</button>
<button type="button" id="btnJapan" class="btn btn-outline-dark btn-item">Japan</button>
<button type="button" id="btnChina" class="btn btn-outline-dark btn-item">China</button>
`;

//Button DOM
let btnTum = document.querySelector("#btnAll");
let btnKor = document.querySelector("#btnKorea");
let btnJap = document.querySelector("#btnJapan");
let btnChi = document.querySelector("#btnChina");

//Fonksiyonlar

function itemCreat( pic, baslik, des, fiyat ){
  return `
    <div class="menu-items col-lg-6 col-sm-12">
    <img class="photo" src="${pic.img}">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${baslik.title}</h4>
        <h4 class="price">${fiyat.price}</h4>
      </div>
      <div class="menu-text">${des.desc}</div>
    </div>
    </div>
  `;
}

itemAlani.innerHTML = `
  ${itemCreat(menu[0], menu[0], menu[0], menu[0], )}
  ${itemCreat(menu[1], menu[1], menu[1], menu[1], )}
  ${itemCreat(menu[2], menu[2], menu[2], menu[2], )}
  ${itemCreat(menu[3], menu[3], menu[3], menu[3], )}
  ${itemCreat(menu[4], menu[4], menu[4], menu[4], )}
  ${itemCreat(menu[5], menu[5], menu[5], menu[5], )}
  ${itemCreat(menu[6], menu[6], menu[6], menu[6], )}
  ${itemCreat(menu[7], menu[7], menu[7], menu[7], )}
  ${itemCreat(menu[8], menu[8], menu[8], menu[8], )}
`;

let koreanFood = menu.filter(cat => cat.category === "Korea");
let japanFood = menu.filter(cat => cat.category === "Japan");
let chineseFood = menu.filter(cat => cat.category === "China");

//eventler


btnTum.addEventListener("click", function(event){
  event.preventDefault;
  displayAll();
}) 


btnKor.addEventListener("click", function(event){
  event.preventDefault;
  displayFood(koreanFood);
}) 

btnJap.addEventListener("click", function(event){
  event.preventDefault;
  displayFood(japanFood);
}) 

btnChi.addEventListener("click", function(event){
  event.preventDefault;
  displayFood(chineseFood);
}) 

