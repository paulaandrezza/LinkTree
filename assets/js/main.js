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
  if(isLight) {
    document.body.style.setProperty('--background-color', '#e1e1e1');
    document.body.style.setProperty('--font-color', '#323232');
    localStorage.setItem('data-theme', 'light');
  } else {
    document.body.style.setProperty('--background-color', '#323232');
    document.body.style.setProperty('--font-color', '#e1e1e1');
    localStorage.setItem('data-theme', 'dark');
  }
}