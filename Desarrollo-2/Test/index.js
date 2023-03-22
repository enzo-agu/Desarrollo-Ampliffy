const testClassImage = (parameter) => {
    class Image {
        constructor(newParameter) {
            this.parameter = newParameter
        }
        downloadImage() {
            return this.parameter
        }
    }

    const imageToDownload = new Image(parameter)
    imageToDownload.downloadImage()
    
}

module.exports = testClassImage
