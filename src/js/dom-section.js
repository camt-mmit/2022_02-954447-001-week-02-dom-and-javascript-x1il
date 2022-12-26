import { assign as assignInput } from './input-section.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputTemplate = document.querySelector('template#tmp-input');
  const inputSection = document.querySelector('.cmp-input-section');
  const inputContainerSection = document.querySelector(
    '.cmp-section-container-all',
  );
  assignInput(inputSection, inputTemplate, inputContainerSection);
});
