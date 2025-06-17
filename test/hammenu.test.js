/**
 * @jest-environment jsdom
 */

const { initHamburgerMenu } = require('../hammenu');

describe('Hamburger Menu Utility', () => {
  let menu, modal, closeBtn;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="custom-menu" class="hamburger-menu"></div>
      <div id="image-modal" class="modal" style="display: none;"></div>
      <button id="modal-close-btn" class="close-modal">Close</button>
    `;

    menu = document.getElementById('custom-menu');
    modal = document.getElementById('image-modal');
    closeBtn = document.getElementById('modal-close-btn');
  });

  test('should toggle menu class on click', () => {
    const { toggleMenu } = initHamburgerMenu({
      menuSelector: '#custom-menu',
      modalSelector: '#image-modal',
      closeButtonSelector: '#modal-close-btn'
    });

    expect(menu.classList.contains('active')).toBe(false);
    toggleMenu();
    expect(menu.classList.contains('active')).toBe(true);
    toggleMenu();
    expect(menu.classList.contains('active')).toBe(false);
  });

  test('should open and close modal correctly', () => {
    const { openModal, closeModal } = initHamburgerMenu({
      menuSelector: '#custom-menu',
      modalSelector: '#image-modal',
      closeButtonSelector: '#modal-close-btn'
    });

    expect(modal.style.display).toBe('none');
    openModal();
    expect(modal.style.display).toBe('block');
    closeModal();
    expect(modal.style.display).toBe('none');
  });

  test('should return null if elements are missing', () => {
    document.body.innerHTML = '';
    const result = initHamburgerMenu();
    expect(result).toBeNull();
  });
});
