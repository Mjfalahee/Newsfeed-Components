
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference. 
  console.log('Menu Toggled!')

  
}

// Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu')

class Menu {
  constructor(menu) {
    this.menu = menu;
  }
}
// create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button')

class MenuButton{
  constructor(menuButton){
    this.menuButton = menuButton;
    this.toggleMenu = this.toggleMenu.bind(this)
    this.menuButton.addEventListener('click', () => {
      this.toggleMenu()
      console.log('button clicked!')
    })
  }
}
// Using your menuButton reference, add a click handler that calls toggleMenu

const menu1 = document.querySelector('.menu')
const menubutton1 = document.querySelector('.menu-button')

const theMenu = new Menu(menu1)
const theButton = new MenuButton(menubutton1)
