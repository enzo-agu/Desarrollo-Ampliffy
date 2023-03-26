class Textarea {
    constructor(textReceived, response, img1, img2) {
        this.textReceived = textReceived
        this.response = response
        this.img1 = img1
        this.img2 = img2
    }
    showTextAndImages(newMessage) {
        setTimeout(() => {
            const textReceived = this.textReceived
            const response = this.response
            textReceived.innerHTML = `<h2>Message sent:</h2>
            <h3>${newMessage}</h3>
            `
            response.innerHTML = `
            <h3> This is the quality of our pictures. Do you like it 😃?</h3>
            <img src=${this.img1} alt='image' title='Eiffel tower'>
            <img src=${this.img2} alt='image' title='City'>
            `
        }, 1000)
    }
}

const textReceived = document.getElementById('textReceived')
const response = document.getElementById('response')
const ShowMessage = document.createElement('div')
const TextArea = new Textarea(textReceived, response, './img/img1.jpg', './img/img2.jpg')

const textarea = document.getElementById('textarea')

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const messageReceived = textarea.value
    TextArea.showTextAndImages(messageReceived)
    form.reset()
})