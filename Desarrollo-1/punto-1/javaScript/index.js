class Image {
    constructor(img) {
        this.img = img
    }
    largeSize() {
        const img = this.img
        img.classList.add('box')
        document.body.style.backgroundColor = 'wheat'
        const newText = document.createElement('div')
        newText.classList.add('newText')
        newText.innerHTML += `<h2>Do you like this photo?</h2>
        <h2>Good quality?</h2>
        `
        document.body.appendChild(newText)
    }
    normalSize() {
        img.classList.remove('box')
        document.body.style.backgroundColor = 'antiquewhite'
    }
}

const img = document.getElementById('img')
const getImage = new Image(img)
const buttonChangeToLarge = document.getElementById('btnLargeSize').addEventListener('click', changeLargeSize)
const buttonChangeToNormal = document.getElementById('btnNormalSize').addEventListener('click', changeNormalSize)

function changeLargeSize() {
    getImage.largeSize()
}

function changeNormalSize() {
    getImage.normalSize()
}
