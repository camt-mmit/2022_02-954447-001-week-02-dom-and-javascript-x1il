import { assign as assignSection } from './input-section.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputTemplate = document.querySelector('template#tmp-input');
  const mainContainer = document.querySelector('.cmp-main-container');
  const sectionTemplate = document.querySelector('template#tmp-section');

  assignSection(mainContainer, inputTemplate, sectionTemplate);
});
