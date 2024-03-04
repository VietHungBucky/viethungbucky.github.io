var kyThiData = [
    { id: 1, ten: "Nhập môn công nghệ phần mềm" },
    { id: 2, ten: "Lập trình website" },
    { id: 3, ten: "Lập trình hướng đối tượng" }
];

var nguoiDungData = [
    { id: 1, ten: "Nguyễn Văn A - B21DCCN123" },
    { id: 2, ten: "Nguyễn Văn B - B21DCCN563" },
    { id: 3, ten: "Nguyễn Thị C - B21DCCN125" }
];

var thongKeData = [
    { tenKyThi: "Nhập môn công nghệ phần mềm", soLuongNguoiDung: 10, tyLeHoanThanh: 70, diemTrungBinh: 8.5 },
    { tenKyThi: "Lập trình website", soLuongNguoiDung: 15, tyLeHoanThanh: 60, diemTrungBinh: 7.8 },
    { tenKyThi: "Lập trình hướng đối tượng", soLuongNguoiDung: 10, tyLeHoanThanh: 70, diemTrungBinh: 8.4 },
];

function hienThiDanhSachKyThi() {
    var table = document.getElementById("tableKyThi");
    table.innerHTML = "<tr><th>ID</th><th>Tên kỳ thi</th><th>Chỉnh sửa</th><th>Xóa</th></tr>";
    kyThiData.forEach(function (kyThi) {
        var row = "<tr><td>" + kyThi.id + "</td><td>" + kyThi.ten + `</td><td><button onclick="renderNewHTML('./chinhSua/index.html')">Chỉnh sửa</button></td><td><button>Xóa</button></td></tr>`;
        table.innerHTML += row;
    });
}

function hienThiDanhSachNguoiDung() {
    var table = document.getElementById("tableNguoiDung");
    table.innerHTML = "<tr><th>ID</th><th>Tên người dùng</th><th>Chỉnh sửa</th><th>Xóa</th></tr>";
    nguoiDungData.forEach(function (nguoiDung) {
        var row = "<tr><td>" + nguoiDung.id + "</td><td>" + nguoiDung.ten + "</td><td><button>Chỉnh sửa</button></td><td><button>Xóa</button></td></tr>";
        table.innerHTML += row;
    });
}

function hienThiThongKe() {
    var thongKeDiv = document.getElementById("thongKe");
    thongKeDiv.innerHTML = "<h4>Thống kê</h4>";

    thongKeData.forEach(function (thongKe) {
        thongKeDiv.innerHTML += "<h5>Kỳ thi: " + thongKe.tenKyThi + "</h5>";
        thongKeDiv.innerHTML += "<p>Số lượng người dùng: " + thongKe.soLuongNguoiDung + "</p>";
        thongKeDiv.innerHTML += "<p>Tỷ lệ hoàn thành: " + thongKe.tyLeHoanThanh + "%</p>";
        thongKeDiv.innerHTML += "<p>Điểm trung bình: " + thongKe.diemTrungBinh + "</p>";
    });
}

hienThiDanhSachKyThi();
hienThiDanhSachNguoiDung();
hienThiThongKe();

// function themMoiKyThi() {
//     var tenKyThi = prompt("Nhập tên kỳ thi:");
//     if (tenKyThi) {
//         var newKyThi = {
//             id: kyThiData.length + 1,
//             ten: tenKyThi
//         };
//         kyThiData.push(newKyThi);
//         hienThiDanhSachKyThi();
//     }
// }


function themMoiNguoiDung() {
    var tenNguoiDung = prompt("Nhập tên người dùng:");
    if (tenNguoiDung) {
        var newNguoiDung = {
            id: nguoiDungData.length + 1,
            ten: tenNguoiDung
        };
        nguoiDungData.push(newNguoiDung);
        hienThiDanhSachNguoiDung();
    }
}
