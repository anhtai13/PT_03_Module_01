// alert('Hello External');
var subject="JavaScripts";
Number = 10;

// Hiển thị ở info của console
console.log(subject);

// Hiển thị ở warning của console
console.warn("Cảnh báo nhé!!!");

// Hiển thị error của console
console.error("Lỗi rồi nha các ơi")

// Khai báo
var age;

//gán
age=18;

console.log('giá trị của age', age)

// Kiểm tra kiểu dữ liệu
console.log('Kiểm tra kiểu dữ liệu', typeof age)
let city = "Danang";
{
    let age = 18;
    age = 30;
    let address = '363 Nguyễn Hữu Thọ';

    console.log("Thành phố", city)
    console.log("Kiểm tra age 2", age);
}

// console.log("Kiểm tra địa chỉ", address);

console.log("check age", age);

// console -> constant
{
    const BIEN_SO_XE_DN = 43;
}
let name_class;

let bag=null;
console.log("check tên lớn", name_class);

console.log("check bag", typeof bag);

// BIEN_SO_XE


let isCheck = confirm('Bạn muốn kiểm tra không?')
// Trả về kiểu boolean
console.log('kết quả check', isCheck);

const r = prompt("Nhập vào bán kính đường tròn", 5);
