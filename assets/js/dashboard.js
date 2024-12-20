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
    resetDrawerBody();
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
  let rangeConfigs = JSON.parse(JSON.stringify(defaultRangeConfigs));

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
    // Reset the working config to default values using deep copy
    rangeConfigs = JSON.parse(JSON.stringify(defaultRangeConfigs));

    // Update all sliders and inputs
    const container = document.querySelector(
      '.dashboard-settings-responses-wrapper'
    );
    const rangeWrappers = container.querySelectorAll('.range-input-wrapper');

    rangeWrappers.forEach((wrapper, index) => {
      const slider = wrapper.querySelector('.range-slider');
      const input = wrapper.querySelector('.response-input-value');
      const defaultConfig = defaultRangeConfigs[index];

      // Reset both slider and input values
      slider.value = defaultConfig.value;
      input.value = defaultConfig.value;

      // Make sure to update any step, min, and max values if needed
      slider.step = defaultConfig.step;
      input.step = defaultConfig.step;
      slider.min = defaultConfig.min;
      slider.max = defaultConfig.max;
      input.min = defaultConfig.min;
      input.max = defaultConfig.max;

      // Trigger the value change handler to update internal state
      handleValueChange(defaultConfig.name, defaultConfig.value);
    });
  }

  function validateInputValue(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function handleValueChange(name, value) {
    // Update the working config
    const configIndex = rangeConfigs.findIndex(
      (config) => config.name === name
    );
    if (configIndex !== -1) {
      rangeConfigs[configIndex].value = value;
    }
    // console.log(`${name}: ${value}`);
  }

  function initializeDashboard() {
    // Create initial HTML
    const container = document.querySelector(
      '.dashboard-settings-responses-wrapper'
    );
    container.innerHTML = rangeConfigs
      .map((config) => createRangeElement(config))
      .join('');

    // Add event listeners to all range inputs
    container.querySelectorAll('.range-input-wrapper').forEach((wrapper) => {
      const slider = wrapper.querySelector('.range-slider');
      const input = wrapper.querySelector('.response-input-value');

      // Sync slider to number input
      slider.addEventListener('input', () => {
        const value = Number(slider.value);
        input.value = value;
        handleValueChange(slider.dataset.name, value);
      });

      // Sync number input to slider
      input.addEventListener('change', () => {
        let value = Number(input.value);
        const min = Number(slider.min);
        const max = Number(slider.max);

        // Validate and constrain the input value
        value = validateInputValue(value, min, max);
        input.value = value;
        slider.value = value;
        handleValueChange(slider.dataset.name, value);
      });

      // Add blur event to handle invalid inputs
      input.addEventListener('blur', () => {
        if (input.value === '' || isNaN(input.value)) {
          input.value = slider.value;
        }
      });
    });

    // Add reset button functionality
    const resetButton = document.querySelector('.restore-settings-yes-btn');
    if (resetButton) {
      resetButton.addEventListener('click', resetAllValues);
    }
  }

  initializeDashboard();

  // settings:
  const shareMainWrapper = document.querySelector(
    '.dashboard-drawer-share-main-wrapper '
  );
  const addEmailShareInput = document.getElementById('add-email-share-input');
  const inviteUserBtn = document.querySelector('.add-email-share-submit');
  const noInvitesText = document.querySelectorAll('.no-invites-text');
  const invitedStatusWrapper = document.querySelector(
    '.inviting-emails-wrapper'
  );
  const expiredStatusWrapper = document.querySelector(
    '.expired-emails-wrapper'
  );
  inviteUserBtn?.addEventListener('click', () => {
    const invEmail = addEmailShareInput.value;
    if (invEmail) {
      noInvitesText.forEach((text) => {
        text.classList.add('hidden');
      });
      if (invitedStatusWrapper && expiredStatusWrapper) {
        invitedStatusWrapper.classList.remove('hidden');
        expiredStatusWrapper.classList.remove('hidden');
        addEmailShareInput.value = '';
      }
    }
  });

  //maintain drawer:
  // Handle settings button clicks using event delegation
  const settingsMainWrapper = document.querySelector(
    '.dashboard-drawer-settings-main-wrapper'
  );
  const contextFoldersMainWrapper = document.querySelector(
    '.dashboard-drawer-context-folder-main-wrapper'
  );

  // Add click event listener to the parent container
  contextFoldersWrapper?.addEventListener('click', (event) => {
    // Check if the clicked element is a settings button
    if (event.target.classList.contains('context-folder-settings')) {
      if (contextFoldersMainWrapper && settingsMainWrapper) {
        settingsMainWrapper.classList.remove('hidden');
        contextFoldersMainWrapper.classList.add('hidden');
      }
    } else if (event.target.classList.contains('context-folder-share')) {
      if (contextFoldersMainWrapper && shareMainWrapper) {
        shareMainWrapper.classList.remove('hidden');
        contextFoldersMainWrapper.classList.add('hidden');
      }
    }
  });

  // reset drawer:
  function resetDrawerBody() {
    contextFoldersMainWrapper.classList.remove('hidden');
    settingsMainWrapper.classList.add('hidden');
    shareMainWrapper.classList.add('hidden');
    noInvitesText.forEach((text) => {
      text.classList.remove('hidden');
    });
    if (invitedStatusWrapper && expiredStatusWrapper) {
      invitedStatusWrapper.classList.add('hidden');
      expiredStatusWrapper.classList.add('hidden');
      addEmailShareInput.value = '';
    }
  }


  //close drawer:
  const settingsTopCrossButton=document.querySelector('.dashboard-drawer-settings-wrapper-close')
  const settingsBottomCrossButton=document.querySelector('.dashboard-drawer-settings-bottom-close-button')

  const shareTopCrossButton=document.querySelector('.dashboard-drawer-share-wrapper-close')
  const shareBottomCrossButton=document.querySelector('.dashboard-drawer-share-bottom-close-button')

  const closeDrawerButtons=[settingsTopCrossButton, settingsBottomCrossButton, shareTopCrossButton, shareBottomCrossButton]
  closeDrawerButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
      contextDrawer.classList.remove('show');
      resetDrawerBody();
    })
  })
});
