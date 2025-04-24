// Automatically set active class based on current URL
// const links = document.querySelectorAll('.nav-links a');
// const current = window.location.pathname;

// links.forEach(link => {
//   if (link.href.includes(`${current}`)) {
//     link.classList.add('active');
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
  
    if (navToggle && navLinks) {
      // Toggle menu on hamburger click
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
  
      // Auto-close on any nav link click
      const links = navLinks.querySelectorAll("a");
      links.forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("show");
        });
      });
    }
  });