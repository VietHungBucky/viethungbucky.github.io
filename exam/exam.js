var submitButton = document.querySelector('.submit-exam')
var inputs = document.querySelectorAll('.answer-input');
var result = document.querySelector('.result-user');
var totalScore = 0;


document.addEventListener('DOMContentLoaded', function () {
    var countdownElement = document.getElementById('timer');
    var totalTime = 30 * 60; // 30 minutes in seconds
    var minutes, seconds;

    function updateTimer() {
        minutes = Math.floor(totalTime / 60);
        seconds = totalTime % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownElement.textContent = minutes + ':' + seconds;

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            countdownElement.textContent = '00:00';
            document.getElementById('result').style.display = 'block';
            document.getElementById('questions').style.display = 'none';
            alert('Đã hết giờ làm bài!');
        }

        totalTime--;
    }
    updateTimer();
    var timerInterval = setInterval(updateTimer, 1000);
});




submitButton.addEventListener('click', function (event) {
    document.getElementById('result').style.display = 'block';
    document.getElementById('questions').style.display = 'none';
    event.preventDefault();
});
// inputs.forEach(function (input) {
//     if (input.checked) {
//         var score = parseFloat(input.value);
//         totalScore += score;
//     }
// });
// var finalResult = (totalScore / 3.3).toFixed(1)
// var text = `
// <p>Họ tên: Nguyễn Văn A</p>
// <p>Ngày sinh: 01/01/2003</p>
// <p>Mã Sinh Viên: B21DCCN000</p>
// <p>Lớp: D21CQCN00-B</p>
// <p>Tổng điểm: 7.8/10</p>

// `
// result.innerHTML = text

// Hiển thị tổng điểm

// <p>Họ tên: ${userData.fullName}</p>
//     <p>Ngày sinh: ${userData.dob}</p>
//     <p>Mã Sinh Viên: ${userData.studentID}</p>
//     <p>Lớp: ${userData.class}</p>
//     <p>Tổng điểm: ${finalResult}</p>