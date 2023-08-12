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
// let sol = ''

// for(let i = 1; i < sol.length -1; i++) {
//     sol = Math.random(sol[i] * 1000);
// }

// fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=999&camera=pancam&api_key=aSLcYwUz5fP5sVIFDISMxQesnaakfPORu74cOw3M`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             document.querySelector('#marsPhoto').src = data.photos[0].img_src
//             document.querySelector('.marsCameraType').innerHTML = data.photos[0].camera.full_name
//             document.querySelector('.photoDay').innerHTML = data.photos[0].earth_date
//             document.querySelector('.marsRoverName').innerHTML = data.photos[0].rover.name
//             document.querySelector('.roverTotalDays').innerHTML = data.photos[0].rover.max_sol

//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });

// PREVIOUS CODE

// document.querySelector('#marsImage').addEventListener('click', getMars)

// function getMars() {

//     fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=999&camera=pancam&api_key=aSLcYwUz5fP5sVIFDISMxQesnaakfPORu74cOw3M`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             document.querySelector('#marsPhoto').src = data.photos[0].img_src
//             document.querySelector('.marsCameraType').innerHTML = data.photos[0].camera.full_name
//             document.querySelector('.photoDay').innerHTML = data.photos[0].earth_date
//             document.querySelector('.marsRoverName').innerHTML = data.photos[0].rover.name
//             document.querySelector('.roverTotalDays').innerHTML = data.photos[0].rover.max_sol

//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
// }

// NEW CODE

document.querySelector('#marsImage').addEventListener('click', getMars)

function getMars() {
    // random rover names
    const roverName = 'opportunity';
    // const randomRoverIndex = Math.random() * roverNames.length;
    const cameraType = 'pancam';
    // const randomCameraTypes = Math.ceil(Math.random() * cameraTypes.length);
    // API key
    const apiKey = 'aSLcYwUz5fP5sVIFDISMxQesnaakfPORu74cOw3M';
    // random Mars day
    const sol = Math.random(1) * 998 + 1;

    // Clear the error message
    document.querySelector('.errorImage').innerHTML = '';

    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${cameraType}&api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.photos.length > 0) {
                const photoData = data.photos[0];

                document.querySelector('#marsPhoto').src = photoData.img_src;
                document.querySelector('.marsCameraType').innerHTML = photoData.camera.full_name;
                document.querySelector('.photoDay').innerHTML = photoData.earth_date;
                document.querySelector('.marsRoverName').innerHTML = photoData.rover.name;
                document.querySelector('.roverTotalDays').innerHTML = photoData.rover.max_sol;
            } else {
                console.log('No photos found for the specified rover and camera type.');
                document.querySelector('.errorImage').innerHTML = 'No photos found for the specified rover and camera type.';
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
            
        });
}

