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
});