// Reveal sections on scroll (animation triggers when elements enter the viewport)
function revealSections() {
  const sections = document.querySelectorAll('.reveal-section');

  sections.forEach((section) => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const visibilityOffset = 100; // Distance from bottom of viewport to start animation

    if (sectionTop < windowHeight - visibilityOffset) {
      section.classList.add('section-visible'); // Add animation class
    }
  });
}

// Run section reveal both when page loads and when user scrolls
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Smooth scrolling when navbar links are clicked (if they point to sections using #id)
document.querySelectorAll('.navbar .nav-link').forEach((link) => {
  link.addEventListener('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault(); // Prevent default anchor behavior
      const targetSection = document.querySelector(this.hash); // Find the target section
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth', // Smooth scroll effect
          block: 'start',
        });
      }
    }
  });
});

// Dark mode toggle when button or checkbox with ID "modeToggle" is clicked
const modeToggle = document.querySelector('#modeToggle');
if (modeToggle) {
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggle dark-mode class on <body>
  });
}

// When a section with class .click-section is clicked, highlight it as active
document.querySelectorAll('.click-section').forEach((section) => {
  section.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to the body
    document.body.classList.add('section-focused'); // Optional class for global effect

    // Remove active class from all other sections
    document.querySelectorAll('.click-section').forEach((s) => {
      s.classList.remove('active');
    });

    section.classList.add('active'); // Add active class to clicked section
  });
});

// When clicking anywhere else on the page, remove all active/focused states
document.addEventListener('click', () => {
  document.body.classList.remove('section-focused');
  document.querySelectorAll('.click-section').forEach((s) => s.classList.remove('active'));
});
