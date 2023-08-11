// API fetch for NASA photo
document.querySelector('#nasaImage').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=aSLcYwUz5fP5sVIFDISMxQesnaakfPORu74cOw3M&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image') {
            document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video') {
            document.querySelector('iframe').src = data.url
        }
        document.querySelector('.astroPhotoDescr').innerHTML = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// API fetch for Mars view

fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&camera=pancam&api_key=aSLcYwUz5fP5sVIFDISMxQesnaakfPORu74cOw3M`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#marsPhoto').src = data.photos[1].img_src

            document.querySelector('.marsCameraType').innerHTML = data.photos[1].camera.full_name
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
// document.querySelector('#marsImage').addEventListener('click', getMars)

// function getMars() {
//     const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&camera=pancam&api_key=aSLcYwUz5fP5sVIFDISMxQesnaakfPORu74cOw3M`;

//     fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&camera=pancam&api_key=aSLcYwUz5fP5sVIFDISMxQesnaakfPORu74cOw3M`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             if(data.media_type === 'image') {
//                 document.querySelector('img').src = data.hdurl

//             document.querySelector('.marsPhotoDescr').innerHTML = data.explanation
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         })
// }

