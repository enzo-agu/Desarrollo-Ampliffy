const containerOverlay = document.querySelector('.container')

class ViewActualDate {
    constructor(containerDate) {
        this.date = containerDate
    }
    showActualDate() {
        const containerOverlay = this.date
        const newContainer = document.getElementById('icon')
        newContainer.innerHTML = ''
        newContainer.innerHTML = ``
        containerOverlay.append(newContainer)

        const containerDOM = document.getElementById('container-date')
        containerDOM.innerHTML += ''
        const actualDate = new Date()
        containerDOM.innerHTML = `<h1>
        Click here  👇!</h1>
        <a href='https://www.ampliffy.com/es/'><h2>Ampliffy</h2></a>
        <p>${actualDate}</p>
        <h2> Last view 👆. </h2>
        `
    }
}

const overlay = new ViewActualDate(containerOverlay)
containerOverlay.addEventListener('mouseover', () => {
    overlay.showActualDate()
})

