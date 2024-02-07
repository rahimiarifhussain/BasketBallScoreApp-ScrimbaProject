// get p tag
let homeScore = document.getElementById("homeP");
let guestScore = document.getElementById("guestP");

let addhomeScore = document.querySelectorAll("#homebtnScore");
let addgeustScore = document.querySelectorAll(".guestbtnScore");

// Gest Section
let gScore = 0;
addgeustScore.forEach((el) => {
  el.addEventListener("click", () => {
    gScore += parseInt(el.value);
    guestScore.innerText = gScore;
  });
});

// Home Score
let hScore = 0;
addhomeScore.forEach((el) => {
  el.addEventListener("click", () => {
    hScore += parseInt(el.value);
    // console.log(typeof el.value);
    homeScore.innerHTML = hScore;
  });
});
