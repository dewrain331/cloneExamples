window.onload = () => {

    const items = document.querySelector(`.items`)
    const input = document.querySelector(`#input`)
    const subbtn = document.querySelector(`#subbtn`)

    input.addEventListener('keydown', (e) => {
        if(e.key === `Enter`) {
            addItem();
        }
    })

    subbtn.addEventListener('click', (e) => {
        e.preventDefault()
        addItem(e)
    })

    const addItem = () => {
        let divParent = document.createElement(`div`)
        let divChild = document.createElement(`div`)
        let checkIcon = document.createElement(`i`)
        let trashIcon = document.createElement(`i`)

        divParent.className = `item`
        divParent.innerHTML = `<div>${input.value}</div>`

        checkIcon.className = `fa-solid fa-square-check`
        checkIcon.style.color = `lightgray`;
        checkIcon.addEventListener(`click`, () => {
            checkIcon.style.color = `limegreen`
        })

        divChild.appendChild(checkIcon)

        trashIcon.className = `fa-solid fa-trash`
        trashIcon.style.color = `darkgray`
        trashIcon.addEventListener(`click`, () => {
            divParent.remove()
        })

        divChild.appendChild(trashIcon)

        divParent.appendChild(divChild)

        items.appendChild(divParent)

        input.value = ``
    }

}