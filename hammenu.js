function initHamburgerMenu(config = {}) {
  const defaultConfig = {
    menuSelector: '.hamburger-menu',
    modalSelector: '.modal',
    closeButtonSelector: '.close-modal'
  };

  const settings = { ...defaultConfig, ...config };

  const menu = document.querySelector(settings.menuSelector);
  const modal = document.querySelector(settings.modalSelector);
  const closeButton = document.querySelector(settings.closeButtonSelector);

  if (!menu || !modal || !closeButton) {
    console.error('Required DOM elements are missing');
    return null;
  }

  function toggleMenu() {
    menu.classList.toggle('active');
  }

  function openModal() {
    modal.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  menu.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', closeModal);

  return {
    toggleMenu,
    openModal,
    closeModal
  };
}

module.exports = { initHamburgerMenu };
