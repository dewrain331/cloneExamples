window.onload = () => {

    const header = document.querySelector(`header`)
    const mainMenuList = document.querySelectorAll(`.mainmenu > li`)
    const subMenu = document.querySelectorAll(`.submenu`)
    let headerHeight = header.offsetHeight
    let subMenuHeight = 0

    for(let i = 0; i < subMenu.length; i++) {
        if(subMenu[i].offsetHeight > subMenuHeight) {
            subMenuHeight = subMenu[i].offsetHeight
        }
    }

    for(let i = 0; i < mainMenuList.length; i++) {
        mainMenuList[i].addEventListener(`mouseover`, () => {
            header.style.height = headerHeight + subMenuHeight + 'px'
        })
        mainMenuList[i].addEventListener(`mouseout`, () => {
            header.style.height = headerHeight + 'px'
        })
    }

}