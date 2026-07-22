// ========================================
// SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ========================================
// NAVIGATION HIGHLIGHT
// ========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ========================================
// FADE-IN ANIMATION
// ========================================

const animatedElements = document.querySelectorAll(
    ".info-card, .skill-card, .portfolio-item, .timeline-item, .education-card"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    element.classList.add("fade-in");

    observer.observe(element);

});


// ========================================
// IMAGE CLICK EFFECT
// ========================================

const portfolioImages = document.querySelectorAll(
    ".portfolio-item img"
);

portfolioImages.forEach(image => {

    image.addEventListener("click", () => {

        window.open(
            image.src,
            "_blank"
        );

    });

});


// ========================================
// CURRENT YEAR IN FOOTER
// ========================================

const footerYear = document.querySelector(
    "footer p"
);

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} Jake Christ Ruiz Mejares. All Rights Reserved.`;

}
