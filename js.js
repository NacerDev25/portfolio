document.addEventListener("DOMContentLoaded", function() {
    let a = document.getElementById("tit1").textContent; // النص الأصلي
    let isHome = true; // متغير الحالة

    document.getElementById("tit1").addEventListener("click", function() {
if (isHome) {
    document.getElementById("tit1").textContent="about me"
    isHome = false;
}
else {
    document.getElementById("tit1").textContent="Home"
    isHome = true
}
    });
});
