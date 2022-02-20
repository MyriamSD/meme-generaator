const form = document.querySelector('#memeForm');
const bod = document.querySelector('body');
const url = document.querySelector('input[name="img"]');
const topText = document.querySelector('input[name="topText"]');
const bottom = document.querySelector('input[name="bottom"]');
const memes = document.getElementById('memes');
const placeHolder = document.getElementById('placeHolder');


form.addEventListener('submit', function(e){
    e.preventDefault();

console.log(url.value);
console.log(topText.value);
console.log(bottom.value);
console.log(e);

let newDiv = document.createElement('div');
newDiv.className = 'memed';
let textDiv = document.createElement('div');
textDiv.className = 'text';
let bottomDiv = document.createElement('div');
bottomDiv.className = 'bottom';

let delButton = document.createElement('button');
delButton.className = 'delete';
delButton.innerText = "x";
newDiv.appendChild(delButton)

let memeImg = document.createElement('img');
memeImg.className = 'imgs';
memeImg.src = url.value;
newDiv.appendChild(memeImg);

let topWords = document.createElement('h2');
topWords.className = 'upper';
topWords.innerText = topText.value;
textDiv.appendChild(topWords);
newDiv.appendChild(textDiv);

let bottomWords = document.createElement('h2');
bottomWords.className = 'lower';
bottomWords.innerText = bottom.value;
bottomDiv.appendChild(bottomWords);
newDiv.appendChild(bottomDiv);

let separate = document.createElement('hr');
separate.className = 'separate';
newDiv.appendChild(separate)





bod.append(newDiv)
form.reset()


})

const newdiv = document.getElementsByClassName('memed')

bod.addEventListener('click', function(event) {
    console.log(event)
    if (event.target.localName === 'button') {
        event.target.parentNode.remove()
    }
    
})

// 'https://i.pinimg.com/736x/9f/01/73/9f01736a2bd0986452bd95ef05abf425.jpg'