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
    let b = document.getElementById("tit2").textContent;
    let isServices =true;
    document.getElementById("tit2").addEventListener("click", function(){
if (isServices) {
document.getElementById("tit2").textContent="myServices"
isServices = false;
}
else {
    document.getElementById("tit2").textContent="services"
    isServices = true
}
    });
    let isProjects = true;
    document.getElementById("tit3").addEventListener("click", function(){
        if (isProjects) {
            document.getElementById("tit3").textContent="My Projects"
            isProjects = false;
        }
        else {
            document.getElementById("tit3").textContent="projects"
            isProjects = true;
        }
    })
    });
