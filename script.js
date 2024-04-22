const url = 'https://api.github.com/users';

fetch(url)
.then(response => response.json())
.then(id => console.log(id[0]))
// https://avatars.githubusercontent.com/u/1?v=4

//  ************* Select Element *************

const userImg = document.querySelector(".profile-img");
const userName = document.querySelector('.name');
const randomBtn = document.querySelector('#random-btn');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
console.log(rightArrow)

let index = 0;

rightArrow.addEventListener('click', () => {
    index++;
    if(index > 29) {
        index = 0;
    }
    fetch(url)
.then(response => response.json())
.then(id => {
    userImg.src = id[index].avatar_url;
    userName.textContent = id[index].login;
})
})

leftArrow.addEventListener('click', () => {
    index--;
    if(index < 0) {
        index = 29;
    }
    fetch(url)
.then(response => response.json())
.then(id => {
    userImg.src = id[index].avatar_url;
    userName.textContent = id[index].login;
})
})

randomBtn.addEventListener('click', () => {
    index = Math.floor(Math.random() * 30);
    fetch(url)
    .then(response => response.json())
    .then(id => {
        userImg.src = id[index].avatar_url;
        userName.textContent = id[index].login;
    })
})