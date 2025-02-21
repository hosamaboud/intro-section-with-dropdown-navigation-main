document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll(
    '.features_dropdown, .company_dropdown'
  );
  const nav = document.querySelector('.nav_links_container');
  const mobileMenuButton = document.querySelector('.menu_mobile');
  const overlay = document.querySelector('.overlay');

  // Function to close all dropdowns
  function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
      dropdown.querySelector('.dropdown_content').classList.remove('show');
      dropdown.querySelector('.rotate_arrow').classList.remove('rotate');
    });
  }

  // Toggle dropdowns on click
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function (event) {
      event.stopPropagation();
      const content = this.querySelector('.dropdown_content');
      const arrow = this.querySelector('.rotate_arrow');
      content.classList.toggle('show');
      arrow.classList.toggle('rotate');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (event) {
    closeAllDropdowns();
  });

  // Toggle mobile menu and overlay
  mobileMenuButton.addEventListener('click', function () {
    nav.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  // Close mobile menu and overlay when clicking on overlay
  [...document.querySelectorAll('.close_menu'), overlay].forEach((el) => {
    el.addEventListener('click', function () {
      nav.classList.remove('open');
      overlay.classList.remove('active');
    });
  });

  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll(
    '.nav_links_container a:not(.container_dropdown_link)'
  );
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      overlay.classList.remove('active');
    });
  });
});
