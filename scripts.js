document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Scroll reveal animations
  const sections = document.querySelectorAll('.content-section, .hero-section');
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('visible');
      }
    });
  });

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  // Show a welcome message
  setTimeout(() => {
    alert("Welcome to Our College Journey! 🎓");
  }, 500);
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.querySelector('.progress-bar').style.width = scrollPercent + '%';
});
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});