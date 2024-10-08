// Dữ liệu của sản phẩm
const products = [
  {
    id: 1,
    name: "Samsung Galaxy A04",
    type: "GALAXY A",
    price: "2.390.000",
    image: "a04.jpg",
    link: "samsung_galaxy_A04.html",
  },
  {
    id: 2,
    name: "Samsung Galaxy A04 - 64GB",
    type: "GALAXY A",
    price: "2.790.000",
    image: "a04-64GB.jpg",
    link: "samsung_galaxy_A04_64GB.html",
  },
  {
    id: 3,
    name: "Samsung Galaxy A05",
    type: "GALAXY A",
    price: "3.390.000",
    image: "a05.jpg",
    link: "samsung_galaxy_A05.html",
  },
  {
    id: 4,
    name: "Samsung Galaxy A05s",
    type: "GALAXY A",
    price: "3.390.000",
    image: "A05s.jpeg",
    link: "samsung_galaxy_A05s.html",
  },
  {
    id: 5,
    name: "Samsung Galaxy A14",
    type: "GALAXY A",
    price: "3.190.000",
    image: "a14.jpg",
    link: "samsung_galxay_a14.html",
  },
  {
    id: 6,
    name: "Samsung Galaxy A24",
    type: "GALAXY A",
    price: "5.990.000",
    image: "A24.jpg",
    link: "samsung_galxay_a24.html",
  },
  {
    id: 7,
    name: "Samsung Galaxy A34",
    type: "GALAXY A",
    price: "7.490.000",
    image: "a34.jpg",
    link: "samsung_galxay_a34.html",
  },
  {
    id: 8,
    name: "Samsung Galaxy A54",
    type: "GALAXY A",
    price: "9.790.000",
    image: "a54.jpg",
    link: "samsung_galxay_a54.html",
  },
  {
    id: 9,
    name: "Samsung Galaxy M34",
    type: "GALAXY M",
    price: "7.490.000",
    image: "m34.jpg",
    link: "samsung_galxay_m34.html",
  },
  {
    id: 10,
    name: "Samsung Galaxy M54",
    type: "GALAXY M",
    price: "10.490.000",
    image: "galaxy-m54.jpg",
    link: "samsung_galxay_m54.html",
  },
  {
    id: 11,
    name: "Samsung Galaxy S21 FE",
    type: "GALAXY S",
    price: "11.990.000",
    image: "S21-FE.jpg",
    link: "samsung_galxay_s21fe.html",
  },
  {
    id: 12,
    name: "Samsung Galaxy S22 Ultra",
    type: "GALAXY S",
    price: "16.990.000",
    image: "S22-Ultra.jpg",
    link: "samsung_galxay_s22ultra.html",
  },
  {
    id: 13,
    name: "Samsung Galaxy S23",
    type: "GALAXY S",
    price: "22.990.000",
    image: "s23.jpg",
    link: "samsung_galxay_s23.html",
  },
  {
    id: 14,
    name: "Samsung Galaxy S23 FE",
    type: "GALAXY S",
    price: "12.990.000",
    image: "S23FE.jpg",
    link: "samsung_galxay_s23fe.html",
  },
  {
    id: 15,
    name: "Samsung Galaxy S23 Ultra",
    type: "GALAXY S",
    price: "28.990.000",
    image: "s23ULTRA.jpg",
    link: "samsung_galxay_s23ultra.html",
  },
  {
    id: 16,
    name: "Samsung Galaxy Z FLIP4",
    type: "GALAXY Z",
    price: "11.990.000",
    image: "z-flip4.jpg",
    link: "samsung_galxay_zflip4.html",
  },
  {
    id: 17,
    name: "Samsung Galaxy Z FLIP 5",
    type: "GALAXY Z",
    price: "23.990.000",
    image: "z-flip5.jpg",
    link: "samsung_galxay_zflip5.html",
  },
  {
    id: 18,
    name: "Samsung Galaxy Z FLOP 4",
    type: "GALAXY Z",
    price: "22.990.000",
    image: "z-flop4.jpg",
    link: "samsung_galxay_zflop4.html",
  },
  {
    id: 19,
    name: "Samsung Galaxy Z FLOP 5",
    type: "GALAXY Z",
    price: "38.990.000",
    image: "Z-FLOP5.jpg",
    link: "samsung_galxay_zflop5.html",
  },
];
// Hàm tự động kiểm tra bộ nhớ cục bộ
function check() {
  var cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  } else {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return cart;
}
check();
// Hàm hiển thì sản phẩm
function showAllProducts() {
  document.querySelector(".section__products__wrapper").innerHTML = products
    .map((product, index) => {
      return `<div class="products__card">
        <div class="group_card">
        <a href ="${product.link}"target="_blank">
            <div class="card__image">
                <img src="./assets/img/${product.image}"
                    alt="" />
            </div></a>
            <div class="card__info">
                <span hidden class="card__id">${product.id}</span>
                <p class="card__name">${product.name}</p>
                <span class="card__price">${product.price} VNĐ</span>
            </div>
            <button class="btn btn-buy" onclick="handleAddToCart(event)">Thêm Vào Giỏ Hàng</button>
        </div>
    </div>
        `;
    })
    .toString()
    .replace(/,/g, " ");
}
showAllProducts();
// Hàm hiển thị sản phẩm theo loại
function displayTypeProducts(value, event) {
  document.querySelector(".section__products__wrapper").innerHTML = products
      .map((product, index) => {
      if (value === product.type) {
        return `<div class="products__card">
        <a href ="${product.link}"target="_blank">
        <div class="group_card">
            <div class="card__image">
                <img src="./assets/img/${product.image}"
                    alt="" />
            </div></a>
          <div class="card__info">
                <span hidden class="card__id">${product.id}</span>
                <p class="card__name">${product.name}</p>
                <span class="card__price">${product.price} VNĐ</span>
            </div>
            <button class="btn btn-buy" onclick="handleAddToCart(event)">Thêm Vào Giỏ Hàng</button>
        </div>
    </div>
        `;
      }
    })
    .toString()
    .replace(/,/g, " ");
  event.preventDefault();
}
// Thêm vào giỏ hàng
const handleAddToCart = (e) => {
  var flag = false;
  const cardId = parseInt(
    e.target.parentElement.children[1].children[0].innerHTML
  );
  const cardName = e.target.parentElement.children[1].children[1].innerHTML;
  const priceString = e.target.parentElement.children[1].children[2].innerHTML;
  const cardPrice = parseInt(priceString.replace(/\./g, '').replace(' VNĐ', ''));
  const cardImage = e.target.parentElement.children[0].children[0].src;
  var newItem = {
    id: cardId,
    name: cardName,
    price: cardPrice,
    image: cardImage,
    quantity: 0,
  };
  // check
  var cartInLocalStorage = JSON.parse(localStorage.getItem("cart"));
  if (cartInLocalStorage === null || cartInLocalStorage.length === 0) {
    flag = false;
  } else {
    cartInLocalStorage.forEach((item, index) => {
      if (newItem.id === item.id) {
        flag = true;
      }
    });
  }

  if (!flag) {
    newItem.quantity = 1;
    cartInLocalStorage.push(newItem);
  } else {
    cartInLocalStorage.forEach((item, index) => {
      if (item.id === newItem.id) {
        item.quantity += 1;
      }
    });
  }
  localStorage.setItem("cart", JSON.stringify(cartInLocalStorage));
  console.log(cartInLocalStorage);
  showSuccessToast();
};
// Hàm tìm kiếm sản phẩm
function search(e) {
  const searchValue = document.querySelector(".header__search").value;
  document.querySelector(".section__products__wrapper").innerHTML = products
    .map((product, index) => {
      if (product.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return `<div class="products__card">
        <a href ="${product.link}"target="_blank">
         <div class="group_card">
             <div class="card__image">
                 <img src="./assets/img/${product.image}"
                     alt="" />
             </div></a>
             <div class="card__info">
                 <span hidden class="card__id">${product.id}</span>
                 <p class="card__name">${product.name}</p>
                 <span class="card__price">${product.price} VNĐ</span>
             </div>
             <button class="btn btn-buy" onclick="handleAddToCart(event)">Thêm Vào Giỏ Hàng</button>
         </div>
     </div>
         `;
      }
    })
    .toString()
    .replace(/,/g, " ");
  e.preventDefault();
}
// Hiện thông báo
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    //auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration);
    // remove toast when clicked
    toast.onclick = function (e) {
      console.log(e.target);
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    const icons = {
      success: "fas fa-check-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    console.log(icon);
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease-out 0.5s, fadeOut linear 1s ${delay}s`;
    toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">
                ${message}
            </p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `;
    main.appendChild(toast);
  }
}
showSuccessToast = () => {
  toast({
    title: "Thành công!",
    message: "Đã thêm vào giỏ hàng",
    type: "success",
    duration: 2000,
  });
};