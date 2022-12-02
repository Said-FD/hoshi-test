const nav = document.querySelector('.navigation')
const navItems = [...nav.querySelectorAll('button')]
const dishLists = [...document.querySelectorAll('.dishes-list')]
const mobileMenuCloseButton = document.querySelector('.mobile-menu-close-button')

const hideElement = element => element.classList.remove('is-active')
const showElement = element => element.classList.add('is-active')
const hideElementMobile = element => element.classList.add('is-mobile-hidden')
const showElementMobile= element => element.classList.remove('is-mobile-hidden')

const handleNavClick = event => {
  if (!event.target.closest('button')) return

  const currentButton = event.target
  const currentDishList = document.querySelector(`.${currentButton.id}`)

  navItems.forEach(hideElement)
  dishLists.forEach(hideElement)

  showElement(currentButton)
  showElement(currentDishList)
  hideElementMobile(nav)
  showElementMobile(currentDishList)
  showElementMobile(mobileMenuCloseButton)
}

const handleMobileMenuCloseButtonClick = () => {
  dishLists.forEach(hideElementMobile)
  hideElementMobile(mobileMenuCloseButton)
  showElementMobile(nav)
}

nav.addEventListener('click', handleNavClick)
mobileMenuCloseButton.addEventListener('click', handleMobileMenuCloseButtonClick)
