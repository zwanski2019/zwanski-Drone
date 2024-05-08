document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("#navbar ul li a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
});
