const menu = document.querySelector('#menu')

const showHamburguer = () => {
  if(window.innerWidth <= 800){
    menu.classList = 'bi bi-list showMenu'
} else {
    menu.classList = 'hideMenu'
  }
}

const handleMenu = () => {
  const getNav = document.querySelector('#nav');
  if(getNav.classList.contains('menuNavOff')){
    getNav.classList.remove('menuNavOff');
    getNav.classList.add('menuNavOn');
  } else {
    getNav.classList.remove('menuNavOn');
    getNav.classList.add('menuNavOff');
  }
}

menu.addEventListener('click', handleMenu);
window.addEventListener('resize', showHamburguer);