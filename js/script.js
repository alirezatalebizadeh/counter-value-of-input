
let inputElem = document.querySelector('input')
let spanElem = document.querySelector('.counter')

function checkValue() {

    let value = inputElem.value.length

    spanElem.innerHTML = inputElem.maxLength - (value)
}

inputElem.addEventListener('keyup', checkValue)