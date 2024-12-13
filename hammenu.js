/**
 * Hamburger Menu and Modal Utility
 * @param {Object} config - Configuration options for menu and modal
 */
function initHamburgerMenu(config = {}) {
  // Default configuration
  const defaultConfig = {
      menuSelector: '.hamburger-menu',
      modalSelector: '.modal',
      closeButtonSelector: '.close-modal'
  };

  // Merge default with provided configuration
  const settings = { ...defaultConfig, ...config };

  // Validate required DOM elements
  const menu = document.querySelector(settings.menuSelector);
  const modal = document.querySelector(settings.modalSelector);
  const closeButton = document.querySelector(settings.closeButtonSelector);

  if (!menu || !modal || !closeButton) {
      console.error('Required DOM elements are missing');
      return null;
  }

  // Menu toggle functionality
  function toggleMenu() {
      if (!menu) return;
      menu.classList.toggle('active');
  }

  // Modal display functionality
  function openModal() {
      if (!modal) return;
      modal.style.display = 'block';
  }

  function closeModal() {
      if (!modal) return;
      modal.style.display = 'none';
  }

  // Event Listeners
  menu.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', closeModal);

  return {
      toggleMenu,
      openModal,
      closeModal
  };
}

// Example usage with custom configuration
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerUtility = initHamburgerMenu({
      menuSelector: '#custom-menu',
      modalSelector: '#image-modal',
      closeButtonSelector: '#modal-close-btn'
  });
});