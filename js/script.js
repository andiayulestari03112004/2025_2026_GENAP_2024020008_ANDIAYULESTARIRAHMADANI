// Sticky Navbar
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 50);
    }
});

// Active Menu
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Pesan berhasil dikirim.");
        this.reset();
    });
}

// Admission Form
const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {
    admissionForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Pendaftaran berhasil.");
        this.reset();
    });
}

// Gallery Filter
function filterSelection(category){

    const items=document.querySelectorAll(".gallery-item");

    items.forEach(item=>{

        if(category==="all" || item.classList.contains(category)){
            item.classList.remove("hide");
        }else{
            item.classList.add("hide");
        }

    });

}