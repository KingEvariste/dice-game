// 2 1 6 4 3 5
const one = document.getElementsByClassName("one");
const two = document.getElementsByClassName("two");
const three = document.getElementsByClassName("three");
const four = document.getElementsByClassName("four");
const five = document.getElementsByClassName("five");
const six = document.getElementsByClassName("six");
const btn = document.getElementById("start-btn");
let state = 5;
let lose = "darkolivegreen"
let win = "yellow"
let cooldown = 50;
let flag = true;
function jingleBells(){
  if(!flag){
    cooldown = 100000000000000;
    clearTimeout(jingleId)
    btn.innerHTML = `MAX WIN: ${state}`
    showResult();
  }
  if(state == 1){
    for(let i = 0; i < one.length; i++){
      one[i].style.color = win
      two[i].style.color = lose
      three[i].style.color = lose
      four[i].style.color = lose
      five[i].style.color = lose
      six[i].style.color = lose
    }
    state = 6
  }else if(state == 2){
    for(let i = 0; i < two.length; i++){
      one[i].style.color = lose
      two[i].style.color = win
      three[i].style.color = lose
      four[i].style.color = lose
      five[i].style.color = lose
      six[i].style.color = lose
    }
    state = 1
  }else if(state == 3){
    for(let i = 0; i < two.length; i++){
      one[i].style.color = lose
      two[i].style.color = lose
      three[i].style.color = win
      four[i].style.color = lose
      five[i].style.color = lose
      six[i].style.color = lose
    }
    state = 5
  }else if(state == 4){
    for(let i = 0; i < two.length; i++){
      one[i].style.color = lose
      two[i].style.color = lose
      three[i].style.color = lose
      four[i].style.color = win
      five[i].style.color = lose
      six[i].style.color = lose
    }
    state = 3
  }else if(state == 5){
    for(let i = 0; i < two.length; i++){
      one[i].style.color = lose
      two[i].style.color = lose
      three[i].style.color = lose
      four[i].style.color = lose
      five[i].style.color = win
      six[i].style.color = lose
    }
    state = 2
  }else if(state == 6){
    for(let i = 0; i < two.length; i++){
      one[i].style.color = lose
      two[i].style.color = lose
      three[i].style.color = lose
      four[i].style.color = lose
      five[i].style.color = lose
      six[i].style.color = win
    }
    state = 4
  }
  setTimeout(jingleBells,cooldown);
}
let newId;
btn.onclick = () => {
  newId = setInterval(slowdown,100)
  btn.disabled = true;
  btn.innerHTML = "ROLLING";
  const check = setInterval(() => {
    if(cooldown >= 1000){
      console.log(`you rolled ${state}`)
      flag = false;
      clearInterval(check);
    }
  },50)
}
// 2 1 6 4 3 5
const slowdown = () => {
  if(cooldown >= 1000){
    clearInterval(newId);
  }
  cooldown += 15;
}

var jingleId = setTimeout(jingleBells,cooldown);

async function showResult(){
  if (state % 2 != 0){
    const response = await fetch('https://meme-api.com/gimme');
    const memeData = await response.json();
    const { url } = memeData;
    window.open(url)
  }else if(state == 2){
    window.open('https://en.wikipedia.org/wiki/Herpes')
  }else if(state == 4){
    window.open('https://en.wikipedia.org/wiki/Chlamydia')
  }else if(state == 6){
    window.open('https://en.wikipedia.org/wiki/HIV')
  }
  
}
