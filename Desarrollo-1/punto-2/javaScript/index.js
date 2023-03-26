const buttonOfChange = document.createElement('button')
window.addEventListener('DOMContentLoaded', () => {
    buttonOfChange.innerHTML = `<h3>Press on the different sizes of devices!</h3>`
    buttonOfChange.style.marginLeft = '50px'
    buttonOfChange.style.borderRadius = '8px'
    document.body.appendChild(buttonOfChange)
})

const currentViewport = document.getElementById('current-viewport')
class Viewport {
    constructor(container) {
        this.container = container
    }
    viewportMobile() {
        this.container.classList.add('viewportMobile')
        currentViewport.classList.add('currentViewport')
        currentViewport.innerText = `Mobile view.`
    }
    viewportTablet() {
        this.container.classList.add('viewportTablet')
        currentViewport.classList.add('currentViewport')
        currentViewport.innerText = `Tablet view.`
    }
    viewportDesktop() {
        currentViewport.classList.add('currentViewport')
        currentViewport.innerText = `Desktop view.`
    }
}

buttonOfChange.addEventListener('click', () => {
    const containerImage = document.getElementById('container-image')
    const getImage = new Viewport(containerImage)
    if (window.matchMedia("(min-width: 1024px)").matches) {
        getImage.viewportDesktop()
    }
    else if (window.matchMedia("(min-width: 768px)").matches) {
        getImage.viewportTablet()
    }
    else if (window.matchMedia("(min-width: 390px)").matches) {
        getImage.viewportMobile()
    }
})

