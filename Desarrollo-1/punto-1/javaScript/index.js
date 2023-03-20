class Image {
    constructor(img) {
        this.img = img
    }
    largeSize() {
        const img = this.img
        img.classList.add('box')
    }
    normalSize() {
        img.classList.remove('box')
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
