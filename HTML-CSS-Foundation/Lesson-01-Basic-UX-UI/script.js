document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = 0; // Đặt độ mờ thành 0 khi tải
    setTimeout(function () {
        document.body.style.opacity = 1; // Sau 0.5 giây, đặt độ mờ thành 1
    }, 50);
});
