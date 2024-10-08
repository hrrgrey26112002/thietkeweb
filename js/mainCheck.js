
//IMPORT TỪ file main_check_exp.js
import {
    CHECK_CARD_NUMBER,
    CHECK_CAHO_NAME,
    CHECK_DATE,
    CHECK_CVV,
    CHECK_EMAIL,
    CHECK_SDT
} from './check.js';
//thực hiện function bằng sự kiện onclick 
window.payment = function payment(event) {
    event.preventDefault();
    console.log(event);
    //lấy giá trị thông qua ID trong Modal-form thanh toán
    let get_cno = document.getElementById('cno').value;
    let get_caho_name = document.getElementById('caho_name').value;
    let get_exp = document.getElementById('exp').value;
    let get_cvv = document.getElementById('cvv').value;
    let get_email = document.getElementById('email').value;
    let get_sdt = document.getElementById('phone').value;
    //KIỂM Tra điều kiện nhập vào nếu rỗng hết hoặc 1 ô rỗng sẽ thông báo nhập toàn đầy đủ
    if (get_cno === '' || get_caho_name === '' || get_exp === 0 || get_cvv === '' || get_email === '' || get_sdt === '') {
        alert('Vui lòng nhập đầy đủ thông tin!')
    }
    //nếu nhập đủ hết sẽ vào kiểm tra từng giá trị cụ thể khi nhập vào.
    else {
        //KIỂM TRA NHẬP VÀO CARD NUMBER
        CHECK_CARD_NUMBER(get_cno);
        console.log(CHECK_CARD_NUMBER(get_cno));
        if (!(CHECK_CARD_NUMBER(get_cno))) {
            alert('Vui lòng nhập đúng CARD NUMBER!');
        }


        //KIỂM TRA NHẬP VÀO Cardholder's Name 
        CHECK_CAHO_NAME(get_caho_name);
        console.log(CHECK_CAHO_NAME(get_caho_name));
        if (!(CHECK_CAHO_NAME(get_caho_name))) {
            alert('Vui lòng nhập đúng Cardholder\'s Name!');
        }

        //KIỂM TRA NGÀY NHẬP VÀO
        CHECK_DATE(get_exp);
        console.log(CHECK_DATE(get_exp));
        if (!(CHECK_DATE(get_exp))) {
            alert('Vui lòng nhập đúng Expiration!')
        }

        //KIỂM TRA CVV
        CHECK_CVV(get_cvv);
        console.log(CHECK_CVV(get_cvv));
        if (!(CHECK_CVV(get_cvv))) {
            alert('Vui lòng nhập đúng CVV!');
        }

        //KIỂM TRA EMAIL
        CHECK_EMAIL(get_email);
        console.log(CHECK_EMAIL(get_email));
        if (!(CHECK_EMAIL(get_email))) {
            alert('Vui lòng nhập đúng Email!');
        }
        //KIỂM TRA SĐT
        CHECK_SDT(get_sdt);
        console.log(CHECK_SDT(get_sdt));
        if (!(CHECK_SDT(get_sdt))) {
            alert('Vui lòng nhập đúng Phone!');
        }

    }

    // Nếu nhập vào đúng toàn bộ thì sẽ ...    
    if (CHECK_CARD_NUMBER(get_cno) && CHECK_CAHO_NAME(get_caho_name) && CHECK_DATE(get_exp) && CHECK_CVV(get_cvv) && CHECK_EMAIL(get_email) && CHECK_SDT(get_sdt)) {
        alert('Thanh Toán Thành công!')
        localStorage.removeItem('cart');
        window.location="Home.html";
    }
}