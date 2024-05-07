let editorChoice = document.querySelector('.editorchoice')
let singleImg = document.querySelector('.singleimg')
let pageMore = 1
let discoverMore = document.querySelector('.discovermore-center')
let randomchoice = document.querySelector('.randomchoice')
let vectorImg = document.querySelector('.vectorimg')

async function getImg(){
   let imgData = await fetch(`https://pixabay.com/api/?key=37860007-782d282111110936664077067&editors_choice&page=${pageMore}&per_page=15&image_type=photo`)
   let imgRaw = await imgData.json()
   console.log(imgRaw)
  let itemData = imgRaw.hits

  //To create <div class="row"> in each row dynamically
  for(let i = 0; i < itemData.length; i++) {
    //Declare item variable and store itemData since itemData has stored api details 
    let item = itemData[i] //i stands for those id starts from 0 in the api. 
    //It won't possible to display image if we don't add i
    let imgId = item.id 
    let imgType = item.type
    let imgPreview = item.previewURL
    let imgTag = item.tags
    let webImg = item.webformatURL
    let webImgWidth = item.webformatWidth
    let webImgHeight = item.webformatHeight
    let largeSizeImg = item.largeImageURL
    let largeImgWidth = item.imageWidth
    let largeImgHeight = item.imageHeight
    let totalImgView = item.views
    let totalDownloads = item.downloads
    let imgCollections = item.collections
    let imgLikes = item.likes
    let imgUrl = item.pageURL
    
    //Here we are dividing each row into 3 columns. If we want to display 4 columns 
    //in each row, it should be i % 4 === 0
if(i % 3 === 0) {
  editorChoice.innerHTML += `<div class="row">`
}
    editorChoice.innerHTML += `
    <div class="card grid-container">
<a href="photos.html?id=${imgId}">
<div class="img-gallery">
<img id="${imgId}" src="${webImg}" class="img-responsive center-block" alt="${imgTag}"/>
<div class="middle">
<p class="text-center">${imgTag}</p>
</div>
</a>
</div>
</div>
    `  
  }

}
getImg()


async function postImgIllustration(){
  let imgData = await fetch(`https://pixabay.com/api/?key=37860007-782d282111110936664077067&editors_choice&page=${pageMore}&per_page=14&image_type=illustration`)
   let imgRaw = await imgData.json()
   console.log(imgRaw)
  let itemData = imgRaw.hits

  //To create <div class="row"> in each row dynamically
  for(let i = 0; i < itemData.length; i++) {
    //Declare item variable and store itemData since itemData has stored api details 
    let item = itemData[i] //i stands for those id starts from 0 in the api. 
    //It won't possible to display image if we don't add i
    let imgId = item.id 
    let imgType = item.type 
    let imgPreview = item.previewURL
    let imgTag = item.tags
    let webImg = item.webformatURL
    let webImgWidth = item.webformatWidth
    let webImgHeight = item.webformatHeight
    let largeSizeImg = item.largeImageURL
    let largeImgWidth = item.imageWidth
    let largeImgHeight = item.imageHeight
    let totalImgView = item.views
    let totalDownloads = item.downloads
    let imgCollections = item.collections
    let imgLikes = item.likes
    let imgUrl = item.pageURL
    
    //Here we are dividing each row into 3 columns. If we want to display 4 columns 
    //in each row, it should be i % 4 === 0
if(i % 3 === 0) {
  randomchoice.innerHTML += `<div class="row">`
}
randomchoice.innerHTML += `<div class="card grid-container">
<a href="photos.html?id=${imgId}">
<div class="img-gallery">
<img id="${imgId}" src="${webImg}" class="img-responsive center-block" alt="${imgTag}"/>
<div class="middle">
<p class="text-center">${imgTag}</p>
</div>
</a>
</div>
</div>
    `  
  }
}
postImgIllustration()

async function vectImg(){
  let imgData = await fetch(`https://pixabay.com/api/?key=37860007-782d282111110936664077067&editors_choice&category=travel&page=${pageMore}&per_page=12&image_type=photo`)
   let imgRaw = await imgData.json()
   console.log(imgRaw)
  let itemData = imgRaw.hits

  //To create <div class="row"> in each row dynamically
  for(let i = 0; i < itemData.length; i++) {
    //Declare item variable and store itemData since itemData has stored api details 
    let item = itemData[i] //i stands for those id starts from 0 in the api. 
    //It won't possible to display image if we don't add i
    let imgId = item.id 
    let imgType = item.type
    let imgPreview = item.previewURL
    let imgTag = item.tags
    let webImg = item.webformatURL
    let webImgWidth = item.webformatWidth
    let webImgHeight = item.webformatHeight
    let largeSizeImg = item.largeImageURL
    let largeImgWidth = item.imageWidth
    let largeImgHeight = item.imageHeight
    let totalImgView = item.views
    let totalDownloads = item.downloads
    let imgCollections = item.collections
    let imgLikes = item.likes
    let imgUrl = item.pageURL
    
    //Here we are dividing each row into 3 columns. If we want to display 4 columns 
    //in each row, it should be i % 4 === 0
if(i % 3 === 0) {
  vectorImg.innerHTML += `<div class="row">`
}
vectorImg.innerHTML += `<div class="card grid-container">
<a href="photos.html?id=${imgId}">
<div class="img-gallery">
<img id="${imgId}" src="${webImg}" class="img-responsive center-block" alt="${imgTag}"/>
<div class="middle">
<p class="text-center">${imgTag}</p>
</div>
</a>
</div>
</div>
    `  
  }
}

vectImg()

discoverMore.addEventListener('click', function(){
  pageMore++
  getImg()
  postImgIllustration()
  vectImg()

})



