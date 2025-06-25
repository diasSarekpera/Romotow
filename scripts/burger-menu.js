const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.querySelector('.mobile-menu ul');

menuBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('active');

     // Optionnel : changer l’icône (menu ↔ croix)
     if (mobileMenu.classList.contains('active')) {
          menuIcon.src = './assets/icons/close.png'; // Ton icône "fermer"
          menuIcon.alt = 'Fermer le menu';
     } else {
          menuIcon.src = './assets/icons/menu.png'; // Ton icône "menu"
          menuIcon.alt = 'Ouvrir le menu';
     }

});

menuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));

