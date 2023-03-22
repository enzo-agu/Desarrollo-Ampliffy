const imageDownload= require ('./download').imageToDownload
const imageUrl='https://images.unsplash.com/photo-1525510579144-4844ac3d3a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG51Ymxvc298ZW58MHx8MHx8&w=1000&q=80'

const nameImage='image.jpg'

imageDownload.downloadImage(imageUrl,nameImage,()=>{
    console.log(`image ${nameImage} download`)
})
