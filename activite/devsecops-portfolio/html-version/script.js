```javascript
/* =========================================
   1. Projets générés dynamiquement
========================================= */

const projects = [
    {
        title: "DevSecOps Portfolio",
        description:
            "Portfolio personnel développé en HTML5, CSS3 et JavaScript, avec un design responsive.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        link: "https://github.com/omelkir20/mini-cv",
        linkText: "Voir sur GitHub"
    },
    {
        title: "Portfolio Dockerisé",
        description:
            "Conteneurisation du portfolio avec Docker et serveur web Nginx.",
        technologies: ["Docker", "Nginx", "Linux"],
        link: "https://github.com/omelkir20/mini-cv",
        linkText: "Voir sur GitHub"
    },
    {
        title: "Automatisation CI/CD",
        description:
            "Découverte de Jenkins pour automatiser les étapes de construction et de déploiement.",
        technologies: ["Jenkins", "Git", "CI/CD"],
        link: "https://github.com/omelkir20/mini-cv",
        linkText: "Voir sur GitHub"
    },
    {
        title: "Infrastructure as Code",
        description:
            "Découverte de Vagrant pour décrire et créer automatiquement une machine virtuelle.",
        technologies: ["Vagrant", "Ubuntu", "Linux"],
        link: "https://github.com/omelkir20/mini-cv",
        linkText: "Voir sur GitHub"
    },
    {
        title: "Orchestration de conteneurs",
        description:
            "Découverte de Kubernetes pour gérer le déploiement et le fonctionnement des conteneurs.",
        technologies: ["Kubernetes", "Docker"],
        link: "https://github.com/omelkir20/mini-cv",
        linkText: "Voir sur GitHub"
    },
    {
        title: "Infrastructure automatisée",
        description:
            "Découverte de Terraform et Ansible pour décrire les infrastructures et automatiser leur configuration.",
        technologies: ["Terraform", "Ansible", "Argo CD"],
        link: "https://github.com/omelkir20/mini-cv",
        linkText: "Voir sur GitHub"
    }
];

/**
 * Crée un élément HTML avec du texte.
 * textContent évite d'interpréter le texte comme du HTML.
 */
function createTextElement(tagName, className, text) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    element.textContent = text;
    return element;
}

/**
 * Génère une carte pour chaque projet du tableau.
 */
function renderProjects() {
    const container = document.getElementById("projects-list");

    if (!container) {
        return;
    }

    container.replaceChildren();

    projects.forEach((project, index) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const number = createTextElement(
            "span",
            "project-number",
            String(index + 1).padStart(2, "0")
        );

        const title = createTextElement("h3", "", project.title);

        const description = createTextElement(
            "p",
            "",
            project.description
        );

        const technologies = document.createElement("div");
        technologies.className = "project-tech";
        technologies.setAttribute("aria-label", "Technologies utilisées");

        project.technologies.forEach((technology) => {
            const tag = createTextElement("span", "", technology);
            technologies.appendChild(tag);
        });

        const link = createTextElement(
            "a",
            "project-link",
            `${project.linkText} ↗`
        );

        link.href = project.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        card.append(number, title, description, technologies, link);
        container.appendChild(card);
    });
}

/* =========================================
   2. Mode sombre / mode clair
========================================= */

function initThemeToggle() {
    const themeButton = document.getElementById("theme-toggle");

    if (!themeButton) {
        return;
    }

    function updateThemeButton() {
        const isDark = document.body.classList.contains("dark");

        themeButton.textContent = isDark ? "☀️" : "🌙";
        themeButton.setAttribute(
            "aria-label",
            isDark ? "Activer le mode clair" : "Activer le mode sombre"
        );
        themeButton.title = isDark ? "Mode clair" : "Mode sombre";
    }

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        try {
            localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
        } catch (error) {
            // Le thème fonctionne même si le stockage du navigateur est bloqué.
        }

        updateThemeButton();
    });

    try {
        const savedTheme = localStorage.getItem("portfolio-theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark");
        }
    } catch (error) {
        // Le thème clair est utilisé par défaut.
    }

    updateThemeButton();
}

/* =========================================
   3. Menu responsive pour mobile
========================================= */

function initMobileMenu() {
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!menuButton || !navLinks) {
        return;
    }

    function closeMenu() {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
        menuButton.textContent = "☰";
    }

    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Fermer le menu" : "Ouvrir le menu"
        );
        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });
}

/* =========================================
   4. Année automatique du footer
========================================= */

function updateCurrentYear() {
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/* =========================================
   5. Formulaire de contact
========================================= */

function initContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form || !status) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        const formData = new FormData(form);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();

        const subject = encodeURIComponent(
            `Message depuis le portfolio de Oum El Khir - ${name}`
        );

        const body = encodeURIComponent(
            `Nom : ${name}\nE-mail : ${email}\n\nMessage :\n${message}`
        );

        status.textContent =
            "Votre application de messagerie va s'ouvrir pour préparer l'e-mail.";

        window.location.href =
            `mailto:omelkirrebei22@gmail.com?subject=${subject}&body=${body}`;
    });
}

/* =========================================
   6. Initialisation de l'application
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    initThemeToggle();
    initMobileMenu();
    updateCurrentYear();
    initContactForm();
});
```

