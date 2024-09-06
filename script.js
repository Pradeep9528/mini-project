let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  // start the game to press any key.
  if (started == false) {
    console.log("game is the started");
    started = true;
  }
  levelUp();
});

function gameFlash(btn) {
  //  game flash started
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 400);
}
//when user click the btn then after
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 400);
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  randColor = btns[randIdx];
  randBtn = document.querySelector(`.${randColor}`);
  gameseq.push(randColor);
  console.log(gameseq);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `game over!your score is: ${level} Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userseq.push(userColor);
  checkAns(userseq.length - 1);
}

// btn press
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

//counting restart
function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
