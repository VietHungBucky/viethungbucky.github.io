function themCauHoi() {
    var danhSachCauHoi = document.getElementById('danhSachCauHoi');

    var div = document.createElement('div');
    div.innerHTML = `
        <label for="cauHoi">Câu hỏi:</label><br>
        <input type="text" name="cauHoi" required><br><br>
        <label for="dapAn">Đáp án:</label><br>
        <input type="text" name="dapAn" required><br><br>
    `;

    danhSachCauHoi.appendChild(div);
}

function themCauHoi() {
    var danhSachCauHoi = document.getElementById('danhSachCauHoi');

    var div = document.createElement('div');
    div.classList.add('cau-hoi'); // Thêm một lớp CSS để dễ dàng xác định và tùy chỉnh
    div.innerHTML = `
        <div>
            <label for="cauHoi">Câu hỏi:</label><br>
            <input type="text" name="cauHoi" required><br><br>
        </div>
        <div>
            <label for="dapAnA">Đáp án A:</label>
            <input type="text" id="dapAnA" name="dapAnA" required><br><br>
            <label for="dapAnB">Đáp án B:</label>
            <input type="text" id="dapAnB" name="dapAnB"><br><br>
            <label for="dapAnC">Đáp án C:</label>
            <input type="text" id="dapAnC" name="dapAnC"><br><br>
            <label for="dapAnD">Đáp án D:</label>
            <input type="text" id="dapAnD" name="dapAnD"><br><br>
        </div>
        <button type="button" onclick="xoaCauHoi(this)">Xóa</button><br><br>
    `;

    danhSachCauHoi.appendChild(div);
}

function xoaCauHoi(button) {
    var cauHoi = button.parentNode;
    cauHoi.parentNode.removeChild(cauHoi);
}

