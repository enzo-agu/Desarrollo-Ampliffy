const buttonOfChange = document.createElement('button')
const containerTitle = document.createElement('div')
const currentViewport=document.getElementById('current-viewport')

class Viewport {
    constructor(container) {
        this.container = container
    }
    viewportMobile() {
        this.container.classList.add('viewportMobile')
        currentViewport.classList.add('currentViewport')
        currentViewport.innerText=`Mobile view.`
    }
    viewportTablet() {
        this.container.classList.add('viewportTablet')
        currentViewport.classList.add('currentViewport')
        currentViewport.innerText=`Tablet view.`
    }
    viewportDesktop() {
        currentViewport.classList.add('currentViewport')
        currentViewport.innerText=`Desktop view.`
    }
}

containerTitle.innerText = `Press the button below to change the background color and the title depending the viewport.`
buttonOfChange.innerText = `Click here !`

document.body.appendChild(containerTitle)
document.body.appendChild(buttonOfChange)

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

