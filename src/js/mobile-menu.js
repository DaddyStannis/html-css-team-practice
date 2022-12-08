(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const toggleBtn = document.querySelector('.js-toggle-menu');
  // const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuLinks = document.querySelectorAll('.js-mobile__link');

  const toggleMenu = () => {
    const isMenuOpen =
      toggleBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  toggleBtn.addEventListener('click', toggleMenu);
  // closeMenuBtn.addEventListener('click', toggleMenu);
  menuLinks.forEach(menuLink => menuLink.addEventListener('click', toggleMenu));

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// js-menu-container  --  на само меню (старшего родителя) --/-- добавляем как класс
// js-open-menu  --  на кнопку открытия меню --/-- добавляем как класс
// js-close-menu  -- на кнопку закрытия меню --/-- добавляем как класс
// is-open  -- класс, который будет добавлятся или убиратся при нажатии соответствующих кнопок --/-- js будет ставить этот класс самостоятельно к классу js-menu-container
