const toggle = document.getElementById('toggle');
var isLight = localStorage.getItem('data-theme') == 'light';
isLight ? toggle.classList.toggle('light') : null;
changeTheme(isLight);


toggle.addEventListener('click', () => {
  toggle.classList.toggle('light');
  isLight = toggle.classList.value == 'light';
  changeTheme(isLight);
})

function changeTheme(isLight) {
  var arrayTheme = (isLight) ? ['#e1e1e1', '#323232', 'light'] : ['#323232', '#e1e1e1', 'dark'];

  document.body.style.setProperty('--background-color', arrayTheme[0]);
  document.body.style.setProperty('--font-color', arrayTheme[1]);
  localStorage.setItem('data-theme', arrayTheme[2]);
}