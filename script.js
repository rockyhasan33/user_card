const url = 'https://api.github.com/users';

fetch(url)
.then(response => response.json())
.then(id => console.log(id[1]))
// https://avatars.githubusercontent.com/u/1?v=4

//  ************* Select Element *************

const userImg = document.querySelector(".profile-img");
const userName = document.querySelector('.name');
const randomBtn = document.querySelector('#random-btn');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let index = 0;