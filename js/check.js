//KIỂM TRA CARD NUMBER
export function CHECK_CARD_NUMBER(card_number) {
    const check_cardnumber = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm;
    return check_cardnumber.test(card_number);
  }
  //KIỂM TRA CARDHOLDER'S NAME
  export function CHECK_CAHO_NAME(String) {
    if (!String || 0 === String.length) return false;
    return true;
  }
  //KIỂM TRA EXP
  // regex ( chuỗi kí tự kiểm tra )
  export function CHECK_DATE(date_time) {
    const check_date_time = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return check_date_time.test(date_time);
  }
  //KIỂM TRA CVV
  export function CHECK_CVV(cvv) {
    const cvv_check = /^[0-9]{3,4}$/;
    return cvv_check.test(cvv);
  }
  //KIỂM TRA EMAIL
  export function CHECK_EMAIL(email) {
    const check_e =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return check_e.test(email);
  }
  //KIỂM TRA SĐT
  export function CHECK_SDT(number) {
    const check_phone =
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    return check_phone.test(number);
  }
  