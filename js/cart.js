// Hiển thị giỏ hàng

function showProducts() {
  var cartInLocalStorage = JSON.parse(localStorage.getItem("cart"));
  if (
    cartInLocalStorage === null ||
    cartInLocalStorage.length === 0 ||
    !cartInLocalStorage
  ) {
    document.querySelector(".non_Products").innerHTML =
      "Không có gì trong giỏ hàng";
  } else {
    document.querySelector(".cart").style.display = "block";
    if (localStorage.getItem("cart")) {
      document.querySelector(".show_products_inCart").innerHTML =
        cartInLocalStorage
          .map((item, index) => {
            return `<tr>
                <td>${index + 1}</td>
                <td hidden>${item.id}</td>
                <td>${item.name}</td>
                <td>
                    <input type="number" value="${
                      item.quantity
                    }" onchange="updateProducts(event)" style="width:30px" min="1" max="10">
                </td>
                <td class="item__price">${item.price} VNĐ </td>
                <td class="item__price">${item.price * item.quantity} VNĐ</td>
                <td>
                    <i class="fa-solid fa-trash trash__item" onclick = "deleteItem(event)"></i>
                </td>
                </tr>
                `;
          })
          .toString()
          .replace(/,/g, " ");
    }
  }
}
showProducts();
// Cập nhật số lương
function updateProducts(e) {
  var itemId = parseInt(
    e.target.parentElement.parentElement.children[1].innerHTML
  );
  var itemQuantity = parseInt(e.target.value);
  var cartInLocalStorage = JSON.parse(localStorage.getItem("cart"));
  // console.log(cartInLocalStorage);
  cartInLocalStorage.forEach((item, index) => {
    if (item.id === itemId) {
      // console.log(itemId,item.id);
      item.quantity = itemQuantity;
    }
  });
  localStorage.setItem("cart", JSON.stringify(cartInLocalStorage));
}

// Cập nhật
function updateCart() {
  window.location.reload();
}

// Tổng tiền
function totalPrice() {
  var cartInLocalStorage = JSON.parse(localStorage.getItem("cart"));
  let total_Price = 0;
  if (localStorage.getItem("cart")) {
    cartInLocalStorage.forEach((item) => {
      total_Price = total_Price + item.price * item.quantity;
    });
  }
  document.querySelector(
    ".total__price__value"
  ).innerHTML = `${total_Price}&nbsp;VNĐ`;
  return total_Price;
}
totalPrice();

// Xóa sản phẩm
function deleteItem(e) {
  var itemId = parseInt(
    e.target.parentElement.parentElement.children[1].innerHTML
  );
  var cartInLocalStorage = JSON.parse(localStorage.getItem("cart"));
  cartInLocalStorage.forEach((item, index) => {
    if (item.id === itemId) {
      return cartInLocalStorage.splice(index, 1);
    }
  });
  localStorage.setItem("cart", JSON.stringify(cartInLocalStorage));
  updateCart();
}
