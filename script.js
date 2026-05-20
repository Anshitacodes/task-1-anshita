// Initialization Sequence for the Core Blueprint Elements
document.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }
    console.log("DecodeLabs Architectural Layout Model Activated.");

    // Nav elements for runtime tracking
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            
            // Toggle element visual tracking rules
            const icon = menuToggle.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.setAttribute("data-lucide", "x");
            } else {
                icon.setAttribute("data-lucide", "menu");
            }
            window.lucide.createIcons(); 
        });

        // Close downstream nodes upon direct link selection
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                icon.setAttribute("data-lucide", "menu");
                window.lucide.createIcons();
            });
        });
    }

    // Scroll Spy Logic for updating side panel state mapping links
    const contentSections = document.querySelectorAll("main > section");
    const sideLinks = document.querySelectorAll(".side-link");

    window.addEventListener("scroll", () => {
        let activeId = "";
        contentSections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                activeId = section.getAttribute("id");
            }
        });

        if (activeId) {
            sideLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${activeId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});