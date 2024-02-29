formUser = document.getElementById('quizForm')
var userData = {}

formUser.addEventListener('submit', function (event) {
    event.preventDefault();
    userData.fullName = document.getElementById('fullName').value
    userData.dob = document.getElementById('dob').value
    userData.studentID = document.getElementById('studentID').value
    userData.class = document.getElementById('class').value

    alert('Bắt đầu bài thi!');
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('questions').style.display = 'block';
});


var submitButton = document.querySelector('.submit-exam')
var inputs = document.querySelectorAll('.answer-input');
var result = document.querySelector('.result-user');
var totalScore = 0;

submitButton.addEventListener('click', function (event) {
    document.getElementById('result').style.display = 'block';
    document.getElementById('questions').style.display = 'none';
    event.preventDefault();
    inputs.forEach(function (input) {
        if (input.checked) {
            var score = parseFloat(input.value);
            totalScore += score;
        }
    });
    var finalResult = (totalScore / 3.3).toFixed(1)
    var text = `
    <p>Họ tên: ${userData.fullName}</p>
    <p>Ngày sinh: ${userData.dob}</p>
    <p>Mã Sinh Viên: ${userData.studentID}</p>
    <p>Lớp: ${userData.class}</p>
    <p>Tổng điểm: ${finalResult}</p>
    <p>Điểm tự luận sẽ được tính sau.</p>
    `
    result.innerHTML = text
});

// Hiển thị tổng điểm

