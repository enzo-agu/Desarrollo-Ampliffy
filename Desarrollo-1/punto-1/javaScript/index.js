class Image {
    constructor(img) {
        this.img = img
    }
    largeSize() {
        const img = this.img
        img.classList.add('box')
        document.body.style.backgroundColor = 'black'
        const newText = document.createElement('div')
        newText.classList.add('newText')
        newText.innerHTML += `
        <h2>Do you like this photo?</h2>
        `
        document.body.appendChild(newText)
        Toastify({
            text: 'Do you want to post something? Click here!',
            duration: 10000,
            gravity: 'top-end',
            position: 'left',
            style: {
                background: 'grey',
            },
            onClick: () => {
                Toastify({
                    text: 'Visit our site!',
                    style: {
                        background: 'grey',
                    },
                    destination: 'https://www.ampliffy.com/es/'
                }).showToast()
            }
        }).showToast()

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
