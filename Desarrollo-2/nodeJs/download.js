const fs = require('fs')
const request = require('request')

class Image {
    constructor() { }
    downloadImage(url, fileName, callback) {
        request.head(url, (err, res, body) => {
            const jpg = res.headers['content-type'] == 'image/jpg'
            const png = res.headers['content-type'] == 'image/png'

            if (`${jpg}` || `${png}`) {
                console.log('content-type:', res.headers['content-type'])
                console.log('content-length:', res.headers['content-length'])
                request(url).pipe(fs.createWriteStream(fileName)).on('close', callback)
            }
            else {
                console.log(` Error ${err}`)
            }
        })
    }
}

const imageToDownload = new Image()

module.exports = {
    imageToDownload
}
