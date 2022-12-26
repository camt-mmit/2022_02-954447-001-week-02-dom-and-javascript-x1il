function computeTotal(inputsContainer, resultComponent) {
  const total = [...inputsContainer.querySelectorAll('.cmp-section-container')]
    .map((elem) => elem.querySelector('.cmp-input'))
    .reduce((carry, elem) => carry + elem.valueAsNumber, 0);

  resultComponent.value = total;
}

function computeTotalSection(inputsContainer, containersection, resultsection) {
  const totalsection = [
    ...containersection.squerySelectorAll('.cmp-section-container'),
  ]
    .map((elem) => elem.querySelector('.cmp-number'))
    .reduce((carry, elem) => carry + elem.valueAsNumber, 0);

  resultsection.value = totalsection;
}

function rebuildIndex(inputsContainer) {
  const inputContainers = [
    //inputContainers = cmp-section-container
    ...inputsContainer.querySelectorAll('.cmp-section-container'),
  ];

  inputContainers.forEach((elem, i) => {
    [...elem.querySelectorAll('.cmp-input-no-section')].forEach((elem) => {
      elem.innerText = i + 1;
    });
  });

  [...inputsContainer.querySelectorAll('.cmd-remove-section')].forEach(
    (elem) => {
      elem.disabled = !(inputContainers.length > 1);
    },
  );
}

function add(inputsContainer, resultComponent, template) {
  const fragment = template.content.cloneNode(true);

  inputsContainer.append(fragment);

  rebuildIndex(inputsContainer);
  computeTotal(inputsContainer, resultComponent);
}

function addnumber(inputContainer, templates) {}

function remove(inputsContainer, resultComponent, inputContainer) {
  inputContainer.remove();

  rebuildIndex(inputsContainer);
  computeTotal(inputsContainer, resultComponent);
}

export function assign(inputSection, inputTemplate, inputContainerSection) {
  const inputsContainer = inputSection.querySelector('.cmp-inputs-section');
  const resultComponent = inputSection.querySelector('.cmp-result');
  const containersection = inputContainerSection.querySelector(
    'cmp-section-container',
  );
  const resultsection =
    inputContainerSection.querySelector('cmp-result-section');

  inputSection.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-add-section')) {
      add(inputsContainer, resultComponent, inputTemplate);
    }
  });

  inputsContainer.addEventListener('change', (ev) => {
    if (ev.target.matches('input[type="number"]')) {
      computeTotal(inputsContainer, resultComponent);
    }
  });

  inputsContainer.addEventListener('click', (ev) => {
    if (ev.target.matches('.cmd-remove-section')) {
      const inputContainer = ev.target.closest('.cmp-section-container');
      remove(inputsContainer, resultComponent, inputContainer);
    }
  });

  containersection.addEventListener('change', (ev) => {
    //change number section
    if (ev.target.matches('input[type="number"]')) {
      computeTotalSection(containersection, resultsection);
    }
  });

  add(inputsContainer, resultComponent, inputTemplate);
}
