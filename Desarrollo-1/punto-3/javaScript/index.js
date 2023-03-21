class Textarea {
    constructor(containerMessage, img1, img2) {
        this.containerMessage = containerMessage
        this.img1 = img1
        this.img2 = img2
    }
    showTextAndImages(newMessage) {
        const containerMessage = this.containerMessage
        setTimeout(() => {
            containerMessage.classList.add('img')
            containerMessage.innerHTML = `<h2>This is the message you sent !</h2>
            <h3>'${newMessage}'</h3>
            <h3> And this is the quality of our pictures. Do you like it 😃?</h3>
            <img src=${this.img1} >
            <img src=${this.img2}>
            `
            document.body.append(containerMessage)
        },500)
    }
}


const ShowMessage = document.createElement('div')
const TextArea = new Textarea(ShowMessage, './img/img1.jpg', './img/img2.jpg')


const textarea = document.getElementById('textarea')
const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const messageReceived = textarea.value
    TextArea.showTextAndImages(messageReceived)
    form.reset()
})