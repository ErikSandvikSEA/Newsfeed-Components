/* This is the data we will be using, study it but don't change anything, yet. */
// import gsap from '../node_modules/gsap';

// console.log(gsap)

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


  // Step 1: Write a function that will create a menu component as seen below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>

  // The function takes an array as its only argument.

  const menuCreator = (array) => {
    const menu = document.createElement('div')
    const unorderedList = document.createElement('ul')

    menu.classList.add('menu')
    menu.classList.add('menu--closed')
    menu.classList.add('no--animation')

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

    let listItems = array.forEach(arrElement => {
      const listItem = document.createElement('li')
      listItem.textContent = arrElement
      unorderedList.appendChild(listItem)
  })

  menu.appendChild(unorderedList)

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  const menuButton = document.querySelector('.menu-button')
  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  const menuToggle = () => {
    menu.classList.remove('no--animation')
    menu.classList.toggle('menu--open')
    menu.classList.toggle('menu--closed')
   
  }

  menuButton.addEventListener('click', menuToggle)
  // Step 5: return the menu component.
  return menu
}
  // Step 6: add the menu component to the DOM.
  
  let testMenu = menuCreator(menuItems)
  console.log(testMenu)

  const header = document.querySelector('.header')
  const menu = menuCreator(menuItems)
  header.appendChild(menu)