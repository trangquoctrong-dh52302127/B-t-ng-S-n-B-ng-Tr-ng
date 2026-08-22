document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = function () {
        revealElements.forEach(function (elem) {
            let windowHeight = window.innerHeight;
            let elementTop = elem.getBoundingClientRect().top;
            let elementVisible = 100; 

            if (elementTop < windowHeight - elementVisible) {
                elem.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});