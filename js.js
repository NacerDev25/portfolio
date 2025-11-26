document.addEventListener("DOMContentLoaded", function() {
    // ننسخو d1 و d2 ونحطوهم داخل القائمة الجانبية
    const a = document.getElementById("d1").cloneNode(true);
    const b = document.getElementById("n1").cloneNode(true);
    const c = document.getElementById("nm");
    c.appendChild(a);
    c.appendChild(b);

    // زر فتح/غلق القائمة
    const d = document.getElementById("menubut");
    const f = document.getElementById("nm");

    d.addEventListener("click", function() {
        if (f.style.marginLeft === "0px" || f.style.marginLeft === "0") {
            f.style.marginLeft = "-100%";
        } else {
            f.style.marginLeft = "0";
        }
    });

    
    
        }
    });
});

