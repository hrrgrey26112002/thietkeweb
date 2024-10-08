const form = document.querySelector('form')
const username = document.getElementById('tendangnhap')
const password = document.getElementById('matkhau')

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (username.value === "" || password.value === "") {
      alert("Vui lòng không để trống");
    } else {
      const user = JSON.parse(localStorage.getItem(username.value));
      if (
        user.usernames === username.value &&
        user.passwords === password.value
      ) {
        alert("Đăng Nhập Thành Công");
        window.location.href = "home.html";
      } else {
        alert("Đăng Nhập Thất Bại");
      }
    }
  })