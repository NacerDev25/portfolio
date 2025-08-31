document.addEventListener("DOMContentLoaded", function() {
    const a = document.getElementById("d1").cloneNode(true);
    const b = document.getElementById("d2").cloneNode(true);
    const c = document.getElementById("nm");
    c.appendChild(a);
    c.appendChild(b);

    const d = document.getElementById("menubut");
    const f = document.getElementById("nm");

    d.addEventListener("click", function() {
        if (f.style.marginLeft === "-100%") {
            f.style.marginLeft = "0";
        } else {
            f.style.marginLeft = "-100%";
        }
    });
});
