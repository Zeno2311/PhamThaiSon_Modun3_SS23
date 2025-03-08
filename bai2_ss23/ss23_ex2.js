let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`);
}
let max = arr[0];
let max_i = 0;
for (let i = 0; i < 10; i++) {
    if (arr[i] > max) {
        max = arr[i];
        max_i = i + 1;
    }
}
if (max_i > 0) {
    console.log(` Số lớn nhất: ${max}`);
    console.log(` Vị trí: ${max_i}`);
} else {
    console.log("Không tồn tại số lớn nhất");
}
