const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu .menu-links");
const linkItem = document.querySelectorAll(".menu .menu-links a");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

linkItem.forEach(item => {
    item.addEventListener("click", () => {
        if(menu.className = "menu open"){
            menu.classList.remove("open");
            links.forEach(link => {
                link.classList.remove("fade");
            });
        };
    });
});

