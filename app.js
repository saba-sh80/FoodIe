// آرایه ای شامل غذاها و قیمت آنها
const foods = [
  { id: 1, name: "Chicken Burgur", price: 3.50 },
  { id: 2, name: "Chicken Pizza", price: 4.20 },
  { id: 3, name: "Chicken Fry", price: 5.00 },
  { id: 4, name: "Grill Sandwich", price: 4.80 },
  { id: 5, name: "Tacco Traifi", price: 3.63 },
  { id: 6, name: "Noddle's Ramen", price: 6.50 },
];

//متغیرها
const $ = document;
const priceElem = $.getElementById("price");
const choosenFood = $.getElementById("choosen-food");
const showPriceBtn = $.getElementById("show-price-btn");
const foodNumber = $.getElementById("food-number");
const orderBtn = $.getElementById("order");
const orderModal = $.getElementById("exampleModal-3");

// تعریف عمومی متغیر totalPrice
let totalPrice = 0;

//ایونت برای نشان دادن قیمت کل
showPriceBtn.addEventListener("click", function () {
  const orders = foods.find((food) => {
    return food.name === choosenFood.value;
  });

  if (orders) {
    const prisceOfFood = orders.price;
    if (prisceOfFood) {
      const numberOfFood = Number(foodNumber.value);
      totalPrice = prisceOfFood * numberOfFood;
      priceElem.innerHTML = `${totalPrice}$`;
    } else {
      alert("Please fill out the fields correctly!");
    }
  } else {
    alert("Please fill out the fields correctly!");
  }
});


// فانکشن برای ذخیره سازی قیمت کل در LocalStorage
function saveDataFunc() {
  // ذخیره کردن قیمت نهایی سفارش
  localStorage.setItem('totalPrice', totalPrice);

  // خواندن قیمت نهایی سفارش از LocalStorage
  const savedTotalPrice = localStorage.getItem('totalPrice');
  if (savedTotalPrice) {
    console.log(`Total price of order: ${savedTotalPrice}$`);
  } else {
    console.log("No total price is saved!");
  }

  orderBtn.setAttribute("data-bs-dismiss", "modal");
}
orderBtn.addEventListener("click", saveDataFunc);

