// =============================
// SCRIPT.JS — Interactivitate Portfolio Bootstrap
// =============================

// Smooth Scroll pentru link-urile din navbar
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Navbar shadow la scroll
const navbar = document.getElementById('mainNavbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-sm');
  } else {
    navbar.classList.remove('shadow-sm');
  }
});

// Dark Mode Toggle const themeToggle
const themeToggle = document.getElementById('themeToggle');
let darkMode = false;

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);

  if (darkMode) {
    document.documentElement.style.setProperty('--bg-light', '#1a1a1a');
    document.documentElement.style.setProperty('--white', '#121212');
    document.documentElement.style.setProperty('--text-color', '#e9e9e9');
    document.documentElement.style.setProperty('--muted', '#aaa');
    themeToggle.textContent = '☀️';
  } else {
    document.documentElement.style.setProperty('--bg-light', '#f8f9fa');
    document.documentElement.style.setProperty('--white', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#333');
    document.documentElement.style.setProperty('--muted', '#6c757d');
    themeToggle.textContent = '🌙';
  }
});

// Bootstrap Form Validation
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
