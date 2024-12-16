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

  document.addEventListener('click', (e)=>{
    if(!profileButton.contains(e.target) && !profileMenuContainer.contains(e.target)){
        profileMenuContainer.classList.remove('active');
    }
  })
});
