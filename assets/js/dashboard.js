$(document).ready(function () {
  const profileButton = document.querySelector(
    '.dashboard-header-profile-container'
  );
  const profileMenuContainer = document.querySelector(
    '.dashboard-header-profile-menu'
  );
  profileButton.addEventListener('click', function () {
    profileMenuContainer.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (
      !profileButton.contains(e.target) &&
      !profileMenuContainer.contains(e.target)
    ) {
      profileMenuContainer.classList.remove('active');
    }
  });

  //chat history::options:

  const chatHistoryOptionBtn = document.querySelector(
    '.dashboard-chat-history-item-options'
  );
  const chatHistoryOption = document.querySelector(
    '.dashboard-chat-item-option-wrapper'
  );
  chatHistoryOptionBtn?.addEventListener('click', () => {
    chatHistoryOption.classList.toggle('active');
  });
  document.addEventListener('click', (e) => {
    if (!chatHistoryOptionBtn.contains(e.target)) {
      chatHistoryOption.classList.remove('active');
    }
  });

  // details toggle::
  const toggleBtn = document.querySelector('.ai-toggle-details-btn');
  const detailsContainer = document.querySelector(
    '.ai-response-details-container'
  );

  toggleBtn.addEventListener('click', () => {
    if (detailsContainer.classList.contains('collapsed')) {
      // Expand
      detailsContainer.classList.remove('collapsed');
      toggleBtn.textContent = 'Hide Details';
    } else {
      // Collapse
      detailsContainer.classList.add('collapsed');
      toggleBtn.textContent = 'Show Details';
    }
  });

  //drawer:
  const contextFolderBtn = document.querySelector('.context-folder-btn');
  const contextDrawer = document.querySelector('.dashboard-drawer-wrapper');
  const backdrop = document.querySelector('.drawer-backdrop');
  const dashboardDrawerBottomCloseBtn = document.querySelector(
    '.dashboard-drawer-bottom-close-button'
  );
  const dashboardDrawerCloseBtn = document.querySelector(
    '.dashboard-drawer-wrapper-close'
  );

  contextFolderBtn?.addEventListener('click', () => {
    if (contextDrawer) {
      contextDrawer.classList.toggle('show');
      contextDrawer.setAttribute(
        'aria-hidden',
        contextDrawer.classList.contains('show') ? 'false' : 'true'
      );
    }
  });

  backdrop?.addEventListener('click', () => {
    contextDrawer.classList.remove('show');
    contextDrawer.setAttribute('aria-hidden', 'true');
  });
  dashboardDrawerCloseBtn?.addEventListener('click', () => {
    contextDrawer.classList.remove('show');
    contextDrawer.setAttribute('aria-hidden', 'true');
  });
  dashboardDrawerBottomCloseBtn?.addEventListener('click', () => {
    contextDrawer.classList.remove('show');
    contextDrawer.setAttribute('aria-hidden', 'true');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      contextDrawer.classList.remove('show');
      contextDrawer.setAttribute('aria-hidden', 'true');
    }
  });

  // add context folder::
  const addContextFolderButton = document.querySelector(
    '.add-context-folder-submit'
  );
  const addContextFolderInput = document.getElementById(
    'add-context-folder-input'
  );
  const contextFoldersWrapper = document.querySelector(
    '.context-folders-wrapper'
  );
  addContextFolderButton?.addEventListener('click', () => {
    const newFolderName = addContextFolderInput.value;
    const newContextFolderWrapper = `
    <div class="context-folder-wrapper">
              <div class="context-folder-name">${newFolderName}</div>
              <div class="context-folder-settings">Settings</div>
              <div class="context-folder-share">Share</div>
              <div
                data-bs-toggle="modal"
                data-bs-target="#deleteContextModal"
                class="remove-context-folder-btn cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.39844 15.6004L15.5984 8.40039"
                    stroke="#081839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5984 15.6004L8.39844 8.40039"
                    stroke="#081839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
    `;
    if (newFolderName) {
      contextFoldersWrapper.insertAdjacentHTML(
        'beforeend',
        newContextFolderWrapper
      );
      addContextFolderInput.value = '';
    } else {
      alert('Please enter a folder name');
    }
  });

  // range::
  // Default configurations that will be used for reset
  const defaultRangeConfigs = [
    {
      title: 'MaxResponse',
      name: 'maxResponse',
      min: 1,
      max: 4000,
      value: 700,
      step: 1,
    },
    {
      title: 'Temperature',
      name: 'temperature',
      min: 0,
      max: 1,
      value: 0.7,
      step: 0.1,
    },
    {
      title: 'Top P',
      name: 'topP',
      min: 0,
      max: 1,
      value: 0.75,
      step: 0.01,
    },
    {
      title: 'Frequency penalty',
      name: 'frequencyPenalty',
      min: 0,
      max: 2,
      value: 0,
      step: 0.1,
    },
    {
      title: 'Presence Penalty',
      name: 'presencePenalty',
      min: 0,
      max: 2,
      value: 0,
      step: 0.1,
    },
    {
      title: 'Past Message included',
      name: 'pastMessageIncluded',
      min: 0,
      max: 10,
      value: 5,
      step: 1,
    },
    {
      title: 'Document Count from data',
      name: 'documentCountFromData',
      min: 1,
      max: 20,
      value: 3,
      step: 1,
    },
  ];

  // Create a copy for current working state
  let rangeConfigs = [...defaultRangeConfigs];

  function createRangeElement(config) {
    return `
        <div class="range-input-wrapper">
            <div class="dashboard-wrapper-response-section-title">
                ${config.title}
            </div>
            <div class="slider-row">
                <div class="range-input-container">
                    <span class="min-value">${config.min}</span>
                    <input
                        type="range"
                        class="range-slider"
                        min="${config.min}"
                        max="${config.max}"
                        value="${config.value}"
                        step="${config.step}"
                        data-name="${config.name}"
                    />
                    <span class="max-value">${config.max}</span>
                </div>
                <input
                    type="number"
                    class="response-input-value"
                    value="${config.value}"
                    step="${config.step}"
                    min="${config.min}"
                    max="${config.max}"
                />
            </div>
        </div>
    `;
  }

  function resetAllValues() {
    // Reset the working config to default values
    rangeConfigs = JSON.parse(JSON.stringify(defaultRangeConfigs));

    // Update all sliders and inputs
    const container = document.querySelector(
      '.dashboard-settings-responses-wrapper'
    );
    container
      .querySelectorAll('.range-input-wrapper')
      .forEach((wrapper, index) => {
        const slider = wrapper.querySelector('.range-slider');
        const input = wrapper.querySelector('.response-input-value');
        const defaultValue = defaultRangeConfigs[index].value;

        slider.value = defaultValue;
        input.value = defaultValue;

        // Trigger the value change handler
        handleValueChange(slider.dataset.name, defaultValue);
      });
  }

  function initializeDashboard() {
    const container = document.querySelector(
      '.dashboard-settings-responses-wrapper'
    );
    container.innerHTML = rangeConfigs
      .map((config) => createRangeElement(config))
      .join('');

    container.querySelectorAll('.range-input-wrapper').forEach((wrapper) => {
      const slider = wrapper.querySelector('.range-slider');
      const input = wrapper.querySelector('.response-input-value');

      slider.addEventListener('input', () => {
        const value = Number(slider.value);
        input.value = value;
        handleValueChange(slider.dataset.name, value);
      });

      input.addEventListener('change', () => {
        let value = Number(input.value);
        const min = Number(slider.min);
        const max = Number(slider.max);

        value = Math.min(Math.max(value, min), max);
        input.value = value;
        slider.value = value;
        handleValueChange(slider.dataset.name, value);
      });
    });

    // Add reset button functionality
    const resetButton = document.querySelector('.restore-settings-yes-btn');
    resetButton.addEventListener('click', resetAllValues);
  }

  function handleValueChange(name, value) {
    // Update the working config
    const configIndex = rangeConfigs.findIndex(
      (config) => config.name === name
    );
    if (configIndex !== -1) {
      rangeConfigs[configIndex].value = value;
    }
    console.log(`${name}: ${value}`);
  }

  initializeDashboard();
});
