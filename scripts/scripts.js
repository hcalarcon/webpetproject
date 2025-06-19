// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Generate bedrock pattern for footer
function generateBedrockPattern() {
  const bedrockGrid = document.querySelector(".bedrock-grid");
  if (bedrockGrid) {
    for (let i = 0; i < 32; i++) {
      const block = document.createElement("div");
      block.className = "bedrock-block minecraft-block";
      bedrockGrid.appendChild(block);
    }
  }
}

// Parallax effect
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(
      ".parallax-bg .minecraft-block"
    );

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Form handling
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const name = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const message = form.querySelector("textarea").value;

      // Simple validation
      if (!name || !email || !message) {
        alert("Por favor completa todos los campos");
        return;
      }

      // Simulate form submission
      alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
      form.reset();
    });
  }
}

// Add hover effects to project cards
function initProjectCards() {
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
}

// Add click effects to buttons
function initButtonEffects() {
  const buttons = document.querySelectorAll(".minecraft-button");
  buttons.forEach((button) => {
    button.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.98)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
}

// Add floating animation to value blocks
function initValueBlocks() {
  const valueBlocks = document.querySelectorAll(".value-block");
  valueBlocks.forEach((block) => {
    block.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(5deg)";
    });

    block.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });
}

// Add animation observer for fade-in effects
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Add fade-in animation to elements
  const animatedElements = document.querySelectorAll(
    ".about-card, .project-card, .value-item, .contact-info, .contact-form, .footer-column"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Add staggered animation delays
function initStaggeredAnimations() {
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });

  const valueItems = document.querySelectorAll(".value-item");
  valueItems.forEach((item, index) => {
    item.style.animationDelay = `${0.9 + index * 0.3}s`;
  });

  const footerColumns = document.querySelectorAll(".footer-column");
  footerColumns.forEach((column, index) => {
    column.style.animationDelay = `${index * 0.2}s`;
  });
}

// Sound effects (optional - requires audio files)
function initSoundEffects() {
  // Uncomment if you want to add Minecraft sound effects
  /*
    const buttons = document.querySelectorAll('.minecraft-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Play click sound
            const audio = new Audio('sounds/click.ogg');
            audio.volume = 0.3;
            audio.play().catch(() => {}); // Ignore errors if audio fails
        });
    });
    */
}

// Initialize all functions when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  generateBedrockPattern();
  initParallax();
  initContactForm();
  initProjectCards();
  initButtonEffects();
  initValueBlocks();
  initScrollAnimations();
  initStaggeredAnimations();
  initSoundEffects();

  // Add loading animation
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Add window resize handler for responsive parallax
window.addEventListener("resize", () => {
  // Recalculate parallax positions on resize
  const event = new Event("scroll");
  window.dispatchEvent(event);
});

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && e.target.classList.contains("minecraft-button")) {
    e.target.click();
  }
});

// Console easter egg
console.log(`
████████╗██╗  ██╗██╗███████╗    ██╗███████╗    ███╗   ███╗██╗███╗   ██╗███████╗ ██████╗██████╗  █████╗ ███████╗████████╗
╚══██╔══╝██║  ██║██║██╔════╝    ██║██╔════╝    ████╗ ████║██║████╗  ██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝
   ██║   ███████║██║███████╗    ██║███████╗    ██╔████╔██║██║██╔██╗ ██║█████╗  ██║     ██████╔╝███████║█████╗     ██║   
   ██║   ██╔══██║██║╚════██║    ██║╚════██║    ██║╚██╔╝██║██║██║╚██╗██║██╔══╝  ██║     ██╔══██╗██╔══██║██╔══╝     ██║   
   ██║   ██║  ██║██║███████║    ██║███████║    ██║ ╚═╝ ██║██║██║ ╚████║███████╗╚██████╗██║  ██║██║  ██║██║        ██║   
   ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝╚══════╝    ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝        ╚═╝   

¡Hola programador! 👋 
¿Encontraste este mensaje secreto? ¡Eres un verdadero CodeCrafter!
Construye tu futuro bloque por bloque 🧱
`);
