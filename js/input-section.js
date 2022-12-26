import { assign as assignInput } from './input.js';

function rebuildIndex(sectionsContainer) {
  const inputSections = [
    ...sectionsContainer.querySelectorAll('.cmp-input-section'),
  ];

  inputSections.forEach((inputSection, index) => {
    [...inputSection.querySelectorAll('.cmp-section-no')].forEach((elem) => {
      elem.innerText = index + 1;
    });

    [...inputSection.querySelectorAll('.cmd-remove-section')].forEach(
      (elem) => {
        elem.disabled = !(inputSections.length > 1);
      },
    );
  });
}

function add(sectionsContainer, inputTemplate, sectionTemplate) {
  const fragment = sectionTemplate.content.cloneNode(true);
  const inputSection = fragment.querySelector('.cmp-input-section');

  sectionsContainer.append(fragment);
  assignInput(inputSection, inputTemplate);
  rebuildIndex(sectionsContainer);
}

function remove(sectionsContainer, inputSection) {
  inputSection.remove();
  rebuildIndex(sectionsContainer);
}

export function assign(container, sectionTemplate, inputTemplate) {
  const sectionsContainer = container.querySelector('.cmp-sections-container');

  container.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-add-section')) {
      add(sectionsContainer, sectionTemplate, inputTemplate);
    }
  });

  sectionsContainer.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-remove-section')) {
      const inputSection = ev.target.closest('.cmp-input-section');

      remove(sectionsContainer, inputSection);
    }
  });
  add(sectionsContainer, sectionTemplate, inputTemplate);
}
