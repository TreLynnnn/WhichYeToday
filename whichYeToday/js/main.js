const imgs = [];

imgs[1] = 'img/kanye.png';
imgs[2] = 'img/kanye2.png';
imgs[3] = 'img/kanye3.png';
imgs[4] = 'img/kanye4.png';
imgs[5] = 'img/kanye5.png';
imgs[0] = 'img/kanye6.png';

// window.onclick = function() {
//   const random = Math.floor(Math.random()* imgs.length);
//   document.body.style.backgroundImage.src = imgs[random];
// }


document.querySelector('button').addEventListener('click', shuffleYe, changeImage)

function shuffleYe(){
const url = `https://api.kanye.rest`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('h2').innerText = data.quote
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
function changeImage(){
  const random = Math.floor(Math.random()* imgs.length);
  document.body.style.backgroundImage = imgs[random];
}