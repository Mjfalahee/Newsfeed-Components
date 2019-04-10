
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference. 
  console.log('the content was toggled')
  menu.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')


// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')

// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', () => toggleMenu())



// CODE DUMP
/*console.log('Menu Toggled!')
this.

class Menu {
  constructor(menu) {
    this.menu = menu;
  }
}
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

const menu1 = document.querySelector('.menu')
const menubutton1 = document.querySelector('.menu-button')

const theMenu = new Menu(menu1)
const theButton = new MenuButton(menubutton1) */
