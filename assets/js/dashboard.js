$(document).ready(function () {
  // nice select:::
  $('.upload-drawer-folders-select').niceSelect();
  $('.upload-drawer-all-files-select').niceSelect();

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
  function truncateTextChatHistory(element, limit) {
    if (element?.innerText?.length > limit) {
      const updatedText = element?.innerText?.slice(0, limit) + '...';
      element.innerText = updatedText;
    }
    return element;
  }
  const chatHistoryTitles = document.querySelectorAll(
    '.dashboard-chat-history-item-title'
  );

  chatHistoryTitles?.forEach((title) => {
    truncateTextChatHistory(title, 30);
  });

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

  toggleBtn?.addEventListener('click', () => {
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
  const contextFolderBtns = document.querySelectorAll('.context-folder-btn');
  const contextDrawer = document.querySelector('.dashboard-drawer-wrapper');
  const backdrop = document.querySelector('.drawer-backdrop');
  const dashboardDrawerBottomCloseBtn = document.querySelector(
    '.dashboard-drawer-bottom-close-button'
  );
  const dashboardDrawerCloseBtn = document.querySelector(
    '.dashboard-drawer-wrapper-close'
  );

  contextFolderBtns?.forEach((contextFolderBtn) => {
    contextFolderBtn?.addEventListener('click', () => {
      if (contextDrawer) {
        contextDrawer.classList.toggle('show');
        contextDrawer.setAttribute(
          'aria-hidden',
          contextDrawer.classList.contains('show') ? 'false' : 'true'
        );
      }
    });
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
    console.log(invEmail.length);
    if (invEmail.length > 0) {
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
    } else {
      alert('Please enter a valid email address.');
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
  const settingsTopCrossButton = document.querySelector(
    '.dashboard-drawer-settings-wrapper-close'
  );
  const settingsBottomCrossButton = document.querySelector(
    '.dashboard-drawer-settings-bottom-close-button'
  );

  const shareTopCrossButton = document.querySelector(
    '.dashboard-drawer-share-wrapper-close'
  );
  const shareBottomCrossButton = document.querySelector(
    '.dashboard-drawer-share-bottom-close-button'
  );

  const closeDrawerButtons = [
    settingsTopCrossButton,
    settingsBottomCrossButton,
    shareTopCrossButton,
    shareBottomCrossButton,
  ];
  closeDrawerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      contextDrawer.classList.remove('show');
      resetDrawerBody();
    });
  });

  //show/hide upload option:
  const uploadButtonSelect = document.querySelector(
    '.dashboard-select-files-select-wrapper'
  );

  const uploadFoldersWrapper = document.querySelector(
    '.upload-files-main-wrapper'
  );
  uploadButtonSelect?.addEventListener('click', () => {
    if (uploadFoldersWrapper) {
      uploadFoldersWrapper.classList.toggle('show');
    }
  });

  const uploadHelpBtn = document.querySelector('.upload-files-help-btn');
  uploadHelpBtn?.addEventListener('click', () => {
    if (uploadFoldersWrapper) {
      uploadFoldersWrapper.classList.remove('show');
    }
  });
  const defaultUploadButtons = document.querySelectorAll(
    '.default-upload-button'
  );

  // show upload drawer
  const uploadDrawerWrapper = document.querySelector(
    '.upload-dashboard-drawer-wrapper'
  );
  const manageFilesButton = document.querySelector(
    '.dashboard-sidebar-manage-item.files'
  );
  const uploadFileInputDrawerButton = document.querySelector(
    '.upload-file-drawer-button'
  );

  const uploadBackDrop = document.querySelector('.upload-drawer-backdrop');
  uploadFoldersWrapper?.addEventListener('click', (e) => {
    if (e.target.classList.contains('default-upload-button')) {
      uploadFoldersWrapper.classList.remove('show');
      if (uploadDrawerWrapper) {
        uploadDrawerWrapper.classList.toggle('show');
      }
    }
  });

  // show upload drawer by clicking on files from manage items (sidebar):
  manageFilesButton?.addEventListener('click', (e) => {
    if (uploadDrawerWrapper) {
      uploadDrawerWrapper.classList.toggle('show');
    }
  });
  uploadFileInputDrawerButton?.addEventListener('click', (e) => {
    if (uploadDrawerWrapper) {
      uploadDrawerWrapper.classList.toggle('show');
    }
  });

  uploadBackDrop?.addEventListener('click', () => {
    uploadDrawerWrapper.classList.remove('show');
  });

  const topCloseButtonUploadWrapper = document.querySelector(
    '.dashboard-drawer-upload-wrapper-close'
  );
  const bottomCloseButtonUploadWrapper = document.querySelector(
    '.dashboard-upload-drawer-close-button'
  );

  const uploadDrawerCloseButtons = [
    topCloseButtonUploadWrapper,
    bottomCloseButtonUploadWrapper,
  ];
  uploadDrawerCloseButtons?.forEach((btn) => {
    btn?.addEventListener('click', () => {
      uploadDrawerWrapper.classList.remove('show');
    });
  });

  const selectedOption = document.getElementById('selectedOption');
  const dropdownOptions = document.getElementById('dropdownOptions');

  // Truncate text longer than 50 characters and add ellipsis
  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  // Handle displaying the dropdown
  selectedOption.addEventListener('click', () => {
    dropdownOptions.style.display =
      dropdownOptions.style.display === 'block' ? 'none' : 'block';
  });

  // Update the selected option and truncate the displayed text
  dropdownOptions.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      selectedOption.textContent = truncateText(event.target.textContent, 50);
      dropdownOptions.style.display = 'none';
    }
  });

  // Apply truncation to all dropdown options
  document.querySelectorAll('.dropdown-options li').forEach((item) => {
    item.textContent = truncateText(item.textContent, 50);
  });

  //upload

  const allFilesUploadBtn = document.querySelector('.all-files-upload');
  const allFilesWrapper = document.querySelector('.all-files-main-wrapper');
  const allFilesItems = document.querySelectorAll('.all-files-item');

  // Toggle all files wrapper
  allFilesUploadBtn?.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    if (uploadFoldersWrapper && allFilesWrapper) {
      uploadFoldersWrapper.classList.remove('show');
      allFilesWrapper.classList.toggle('show');
    }
  });

  // Close when clicking an item
  allFilesItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (allFilesWrapper) {
        // Add null check
        allFilesWrapper.classList.remove('show');
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (
      allFilesWrapper &&
      !allFilesWrapper.contains(e.target) &&
      !allFilesUploadBtn.contains(e.target)
    ) {
      // Check if click is outside both wrapper and button
      allFilesWrapper.classList.remove('show');
    }
  });
  //add new upload folder:

  const addNewFolderButton = document.querySelector(
    '.add-context-upload-folder'
  );
  const newFoldersWrapper = document.querySelector(
    '.new-uploaded-files-wrapper'
  );

  addNewFolderButton?.addEventListener('click', () => {
    // Create a new div element
    const folderDiv = document.createElement('div');

    // Set the HTML content
    folderDiv.innerHTML = `
      <div class="upload-file-item default-upload-button">
                  <p>Default</p>
                  <div class='hidden'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M3.46862 13.6242C3.34502 13.6241 3.22421 13.5875 3.12146 13.5188C3.0187 13.4501 2.93861 13.3525 2.89132 13.2383C2.84402 13.1241 2.83165 12.9985 2.85575 12.8773C2.87986 12.756 2.93936 12.6447 3.02674 12.5573L12.7936 2.79041C12.8513 2.73072 12.9202 2.68311 12.9965 2.65035C13.0727 2.6176 13.1548 2.60035 13.2377 2.59963C13.3207 2.59891 13.403 2.61473 13.4798 2.64615C13.5566 2.67758 13.6264 2.72398 13.6851 2.78267C13.7438 2.84135 13.7902 2.91113 13.8216 2.98794C13.8531 3.06475 13.8689 3.14705 13.8681 3.23004C13.8674 3.31303 13.8502 3.39504 13.8174 3.47129C13.7847 3.54754 13.7371 3.61651 13.6774 3.67416L3.91049 13.441C3.78862 13.5629 3.62862 13.6242 3.46862 13.6242Z"
                        fill="#081839"
                      />
                      <path
                        d="M2.50441 18.1246C2.41115 18.1247 2.31905 18.1039 2.23487 18.0638C2.1507 18.0236 2.07657 17.9651 2.01793 17.8926C1.95929 17.8201 1.91762 17.7354 1.89597 17.6447C1.87433 17.554 1.87326 17.4596 1.89284 17.3684L2.85847 12.8674C2.87547 12.787 2.90818 12.7107 2.95473 12.6429C3.00128 12.5751 3.06075 12.5171 3.12974 12.4723C3.19872 12.4276 3.27587 12.3969 3.35675 12.382C3.43763 12.3671 3.52066 12.3683 3.60107 12.3855C3.68148 12.4028 3.7577 12.4357 3.82535 12.4825C3.893 12.5292 3.95076 12.5889 3.99531 12.658C4.03987 12.7272 4.07034 12.8044 4.08499 12.8853C4.09963 12.9663 4.09816 13.0493 4.08066 13.1296L3.11503 17.6306C3.08509 17.7703 3.00814 17.8956 2.89703 17.9855C2.78591 18.0754 2.64734 18.1245 2.50441 18.1246ZM7.00472 17.159C6.88112 17.159 6.76031 17.1223 6.65756 17.0536C6.5548 16.985 6.47471 16.8874 6.42742 16.7732C6.38013 16.659 6.36775 16.5333 6.39185 16.4121C6.41596 16.2909 6.47546 16.1795 6.56284 16.0921L16.3297 6.32557C16.3874 6.26588 16.4563 6.21826 16.5326 6.18551C16.6088 6.15275 16.6909 6.13551 16.7738 6.13479C16.8568 6.13407 16.9391 6.14988 17.0159 6.18131C17.0927 6.21273 17.1625 6.25914 17.2212 6.31782C17.2799 6.37651 17.3263 6.44629 17.3577 6.5231C17.3892 6.59991 17.405 6.68221 17.4042 6.7652C17.4035 6.84818 17.3863 6.9302 17.3535 7.00645C17.3208 7.0827 17.2732 7.15167 17.2135 7.20932L7.44691 16.9759C7.38891 17.034 7.31998 17.0802 7.24409 17.1116C7.16821 17.143 7.08686 17.1591 7.00472 17.159Z"
                        fill="#081839"
                      />
                      <path
                        d="M2.50352 18.1251C2.34951 18.1244 2.20116 18.067 2.0869 17.9637C1.97264 17.8604 1.90051 17.7186 1.88432 17.5655C1.86814 17.4123 1.90905 17.2586 1.9992 17.1337C2.08936 17.0089 2.22242 16.9217 2.37289 16.8888L6.87383 15.9232C7.03568 15.889 7.20448 15.9204 7.34324 16.0104C7.482 16.1005 7.5794 16.2419 7.6141 16.4036C7.6488 16.5654 7.61796 16.7343 7.52834 16.8733C7.43873 17.0123 7.29765 17.1102 7.13602 17.1454L2.63508 18.111C2.59186 18.1204 2.54775 18.1252 2.50352 18.1251ZM15.0041 9.16039C14.922 9.16054 14.8407 9.14444 14.7649 9.11301C14.6891 9.08158 14.6202 9.03544 14.5623 8.97727L11.027 5.44195C10.9673 5.3843 10.9196 5.31533 10.8869 5.23908C10.8541 5.16283 10.8369 5.08082 10.8362 4.99783C10.8355 4.91484 10.8513 4.83254 10.8827 4.75573C10.9141 4.67892 10.9605 4.60914 11.0192 4.55046C11.0779 4.49177 11.1477 4.44536 11.2245 4.41394C11.3013 4.38251 11.3836 4.3667 11.4666 4.36742C11.5496 4.36814 11.6316 4.38538 11.7078 4.41814C11.7841 4.4509 11.853 4.49851 11.9107 4.5582L15.446 8.09352C15.5334 8.18092 15.5929 8.29228 15.617 8.4135C15.6411 8.53472 15.6287 8.66036 15.5814 8.77455C15.5341 8.88874 15.4541 8.98634 15.3513 9.05502C15.2485 9.12369 15.1277 9.16036 15.0041 9.16039ZM16.772 7.39289C16.6483 7.39299 16.5273 7.35638 16.4245 7.28772C16.3216 7.21905 16.2414 7.1214 16.1941 7.00713C16.1467 6.89287 16.1343 6.76713 16.1585 6.64582C16.1827 6.52452 16.2423 6.41311 16.3298 6.3257C16.6776 5.97789 16.8691 5.50695 16.8691 5.00008C16.8691 4.4932 16.6776 4.02227 16.3298 3.67445C15.9816 3.32633 15.5107 3.13477 15.0038 3.13477C14.497 3.13477 14.026 3.32633 13.6782 3.67445C13.6202 3.7325 13.5512 3.77855 13.4754 3.80996C13.3996 3.84138 13.3183 3.85755 13.2362 3.85755C13.1541 3.85755 13.0728 3.84138 12.9969 3.80996C12.9211 3.77855 12.8522 3.7325 12.7941 3.67445C12.7361 3.6164 12.69 3.54749 12.6586 3.47165C12.6272 3.3958 12.611 3.31451 12.611 3.23242C12.611 3.15033 12.6272 3.06904 12.6586 2.9932C12.69 2.91735 12.7361 2.84844 12.7941 2.79039C13.3779 2.20633 14.1626 1.88477 15.0038 1.88477C15.8448 1.88477 16.6298 2.20633 17.2135 2.79039C17.7976 3.37414 18.1191 4.15883 18.1191 5.00008C18.1191 5.84133 17.7976 6.62602 17.2135 7.20977C17.1556 7.26791 17.0868 7.31402 17.011 7.34545C16.9352 7.37688 16.854 7.393 16.772 7.39289Z"
                        fill="#081839"
                      />
                    </svg>
                  </div>
                </div>`;

    // Get the first child (the upload-file-item div)
    const newFolder = folderDiv.firstElementChild;

    // Append the new folder to the wrapper
    if (newFoldersWrapper) {
      newFoldersWrapper.classList.remove('hidden');
      newFoldersWrapper.appendChild(newFolder);
    }
  });

  // upload files:

  const uploadedFileTitles = document.querySelectorAll(
    '.uploaded-file-item-title'
  );

  // Loop through each element and truncate its content if necessary
  uploadedFileTitles.forEach((title) => {
    if (title) {
      const originalText = title.textContent.trim(); // Get the text content
      //console.log(originalText.length); // Log the length of the text

      // Truncate and update if it exceeds the max length
      const maxLength = 20;
      if (originalText.length > maxLength) {
        title.textContent = originalText.substring(0, maxLength) + '...';
      }
    }
  });

  // size count:
  // Elements
  const uploadInput = document.getElementById('uploadInputFile');
  const fileChosenSpan = document.getElementById('fileChosen');
  const fileSizeInfo = document.getElementById('fileSizeInfo');
  const fileCountInfo = document.getElementById('fileCountInfo');
  const chooseFileButton = document.getElementById('chooseFileButton');
  const uploadButton = document.querySelector(
    '.dashboard-upload-drawer-upload-button'
  );
  const uploadedFileWrapper = document.querySelector('.uploaded-file-wrapper');

  // Constants
  const maxTotalSizeMB = 50;
  const maxFileCount = 10;

  // Variables to hold selected files
  let selectedFiles = [];

  // Convert size to KB or MB
  function formatSize(sizeInBytes) {
    return sizeInBytes < 1024 * 1024
      ? (sizeInBytes / 1024).toFixed(2) + ' KB'
      : (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
  }

  // Open file input dialog
  chooseFileButton?.addEventListener('click', () => {
    uploadInput.click();
  });

  // Event listener for file selection
  uploadInput?.addEventListener('change', (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      selectedFiles = Array.from(files); // Save selected files

      // Truncate each file name to 20 characters
      const fileNames = selectedFiles
        .map((file) =>
          file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name
        )
        .join(', ');

      const totalSize = selectedFiles.reduce((sum, file) => sum + file.size, 0);

      // Update UI
      fileChosenSpan.textContent = fileNames;

      // Calculate percentages
      const totalSizePercentage = (
        (totalSize / (maxTotalSizeMB * 1024 * 1024)) *
        100
      ).toFixed(2);
      const totalFilesPercentage = (
        (selectedFiles.length / maxFileCount) *
        100
      ).toFixed(2);

      fileSizeInfo.textContent = `File Size ${formatSize(
        totalSize
      )} (Total ${formatSize(
        totalSize
      )}/${maxTotalSizeMB} MB ${totalSizePercentage}%)`;
      fileCountInfo.textContent = `File Count ${selectedFiles.length} (Total ${selectedFiles.length}/${maxFileCount} ${totalFilesPercentage}%)`;
    }
  });

  // Function to show and hide toast
  function showToast(duration) {
    const toast = document.getElementById('uploadToast');
    toast.classList.remove('hidden');

    return new Promise((resolve) => {
      setTimeout(() => {
        toast.classList.add('hidden');
        resolve();
      }, duration);
    });
  }

  // Event listener for the Upload button
  uploadButton?.addEventListener('click', async () => {
    if (selectedFiles.length > 0) {
      // Show toast for 3 seconds
      showToast(3000).then(() => {
        document.querySelectorAll('.upload-icon-cross').forEach((crossIcon) => {
          crossIcon.classList.add('hidden');
          crossIcon.nextElementSibling.classList.remove('hidden');
        });
      });

      selectedFiles?.forEach((file) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'uploaded-file-item';
        // Store full file name as data attribute
        fileItem.setAttribute('data-full-name', file.name);

        fileItem.innerHTML = `
           <div class="uploaded-file-item">
                  <div class="uploaded-file-item-content">
                    <div class="uploaded-file-icon">
                       <svg class='upload-icon-cross'
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="10"
                            height="10"
                            x="0"
                            y="0"
                            viewBox="0 0 329.269 329"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="hovered-paths"
                        >
                            <g>
                                <g fill="#f44336">
                                    <path
                                        d="M21.34 329.398c-5.461 0-10.926-2.09-15.082-6.25-8.344-8.34-8.344-21.824 0-30.164L292.848 6.391c8.34-8.34 21.824-8.34 30.164 0 8.343 8.34 8.343 21.824 0 30.164L36.422 323.148a21.231 21.231 0 0 1-15.082 6.25zm0 0"
                                        fill="#f44336"
                                        opacity="1"
                                        data-original="#f44336"
                                        class="hovered-path"
                                    ></path>
                                    <path
                                        d="M307.93 329.398c-5.461 0-10.922-2.09-15.082-6.25L6.258 36.555c-8.344-8.34-8.344-21.825 0-30.164 8.34-8.34 21.82-8.34 30.164 0l286.59 286.593c8.343 8.34 8.343 21.825 0 30.164-4.16 4.18-9.621 6.25-15.082 6.25zm0 0"
                                        fill="#f44336"
                                        opacity="1"
                                        data-original="#f44336"
                                        class="hovered-path"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                        <svg class='upload-icon-right hidden'
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none">
                            <path
                                d="M5 10.694L8.36 14.054L15.0919 7.33398"
                                stroke="#292D32"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="uploaded-file-item-title" data-full-name="${
                      file.name
                    }">
                        ${
                          file.name.length > 20
                            ? file.name.substring(0, 20) + '...'
                            : file.name
                        }
                    </div>
                    <div class="uploaded-file-item-info">
                        ${formatSize(
                          file.size
                        )} | ${new Date().toLocaleTimeString()}
                    </div>
                  </div>
                  <div
                    data-bs-toggle="modal"
                    data-bs-target="#deleteUploadModal"
                    class="uploaded-file-item-delete-btn cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M3 13.5L9 7.5"
                        stroke="#141414"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 13.5L3 7.5"
                        stroke="#141414"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

          `;
        uploadedFileWrapper.appendChild(fileItem);
      });

      // Reset selected files
      selectedFiles = [];
      uploadInput.value = '';
      fileChosenSpan.textContent = 'No file chosen';
      fileSizeInfo.textContent = 'File Size 0 KB (Total 0 KB/50 MB 0.00%)';
      fileCountInfo.textContent = 'File Count 0 (Total 0/10 0.00%)';
    } else {
      alert('No files selected for upload!');
    }
  });

  const allUploadedFilesUploadDrawer = document.querySelectorAll(
    '.uploaded-file-item'
  );

  // Add event listener to the parent container (uploadedFileWrapper)
  uploadedFileWrapper.addEventListener('click', (e) => {
    const fileItem = e.target.closest('.uploaded-file-item');
    if (fileItem) {
      const titleElement = fileItem.querySelector('.uploaded-file-item-title');
      const infoElement = fileItem.querySelector('.uploaded-file-item-info');
      const fullFileName =
        fileItem?.parentElement.getAttribute('data-full-name') ||
        fileItem?.getAttribute('data-full-name');
      const uploadStatus = fileItem
        .querySelector('.upload-icon-right')
        .classList.contains('hidden')
        ? 'processing'
        : 'completed';

      const fileInfo = infoElement
        ? infoElement.textContent.trim().split('|')
        : [];

      const fileData = {
        fileName: fullFileName, // Now using the full file name
        displayName: titleElement ? titleElement.textContent.trim() : '',
        fileSize: fileInfo[0] ? fileInfo[0].trim() : '',
        uploadTime: fileInfo[1] ? fileInfo[1].trim() : '',
        uploadStatus: uploadStatus,
        element: fileItem,
      };

      console.log('File Data:', fullFileName);
    }
  });
  // dashboard responsive sidebar:
  const responsiveToggleButton = document.querySelector(
    '.dashboard-responsive-sidebar--toggle--btn'
  );
  const responsiveToggleButtonSvg = document.querySelector(
    '.dashboard-responsive-sidebar--toggle--btn-svg'
  );
  const responsiveSidebar = document.querySelector(
    '.dashboard-responsive-sidebar-main-wrapper'
  );
  const dashboardMainContentMainWrapper = document.querySelector(
    '.dashboard-container'
  );

  responsiveToggleButton?.addEventListener('click', () => {
    showResponsiveSidebar();
  });

  dashboardMainContentMainWrapper?.addEventListener('click', () => {
    hideResponsiveSidebar();
  });

  function hideResponsiveSidebar() {
    responsiveToggleButtonSvg?.classList.remove('show');
    responsiveSidebar?.classList.remove('show');
    dashboardMainContentMainWrapper?.classList.remove('blur');
  }
  function showResponsiveSidebar() {
    responsiveSidebar?.classList.toggle('show');
    dashboardMainContentMainWrapper?.classList.toggle('blur');
    responsiveToggleButtonSvg?.classList.toggle('show');
  }

  const responsiveDashboardSidebarManageItems = document.querySelectorAll(
    '.dashboard-sidebar-manage-item'
  );
  responsiveDashboardSidebarManageItems?.forEach((button) => {
    button?.addEventListener('click', () => {
      hideResponsiveSidebar();
    });
  });
  const newChatButtons = document.querySelectorAll('.new-chat-button');
  newChatButtons.forEach((button) => {
    button?.addEventListener('click', () => {
      hideResponsiveSidebar();
    });
  });
});
