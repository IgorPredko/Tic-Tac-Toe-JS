let currentPlayer = "x";
let btns = document.querySelectorAll(".pixel");
let playgound = document.getElementById("playground");
let score = 0;
let whoWon = "";

const ticTacToe = (element) => {
  if (element.value === "x" || element.value === "o") {
    return;
  }
  element.value = currentPlayer;
  element.innerHTML = currentPlayer;

  let clickAudio = new Audio();
  clickAudio.src = "click.wav";
  clickAudio.autoplay = true;
  currentPlayer = currentPlayer === "x" ? "o" : "x";

  function checkWinner() {
    // 0 1 2
    // 3 4 5
    // 6 7 8

    //////////////////////////////FOR X//////////////////////////////////////////////

    if (
      btns[0].innerHTML === "x" &&
      btns[1].innerHTML === "x" &&
      btns[2].innerHTML === "x"
    ) {
      winner();
      btns[0].classList.add("winner");
      btns[1].classList.add("winner");
      btns[2].classList.add("winner");
    } else if (
      btns[3].innerHTML === "x" &&
      btns[4].innerHTML === "x" &&
      btns[5].innerHTML === "x"
    ) {
      winner();
      btns[3].classList.add("winner");
      btns[4].classList.add("winner");
      btns[5].classList.add("winner");
    } else if (
      btns[6].innerHTML === "x" &&
      btns[7].innerHTML === "x" &&
      btns[8].innerHTML === "x"
    ) {
      winner();
      btns[6].classList.add("winner");
      btns[7].classList.add("winner");
      btns[8].classList.add("winner");
    } else if (
      btns[0].innerHTML === "x" &&
      btns[3].innerHTML === "x" &&
      btns[6].innerHTML === "x"
    ) {
      winner();
      btns[0].classList.add("winner");
      btns[3].classList.add("winner");
      btns[6].classList.add("winner");
    } else if (
      btns[1].innerHTML === "x" &&
      btns[4].innerHTML === "x" &&
      btns[7].innerHTML === "x"
    ) {
      winner();
      btns[1].classList.add("winner");
      btns[4].classList.add("winner");
      btns[7].classList.add("winner");
    } else if (
      btns[2].innerHTML === "x" &&
      btns[5].innerHTML === "x" &&
      btns[8].innerHTML === "x"
    ) {
      winner();
      btns[2].classList.add("winner");
      btns[5].classList.add("winner");
      btns[8].classList.add("winner");
    } else if (
      btns[0].innerHTML === "x" &&
      btns[4].innerHTML === "x" &&
      btns[8].innerHTML === "x"
    ) {
      winner();
      btns[0].classList.add("winner");
      btns[4].classList.add("winner");
      btns[8].classList.add("winner");
    } else if (
      btns[2].innerHTML === "x" &&
      btns[4].innerHTML === "x" &&
      btns[6].innerHTML === "x"
    ) {
      winner();
      btns[2].classList.add("winner");
      btns[4].classList.add("winner");
      btns[6].classList.add("winner");
    }

    ///////////////////////////for O /////////////////////////////////////////////
    if (
      btns[0].innerHTML === "o" &&
      btns[1].innerHTML === "o" &&
      btns[2].innerHTML === "o"
    ) {
      winner();
    } else if (
      btns[3].innerHTML === "o" &&
      btns[4].innerHTML === "o" &&
      btns[5].innerHTML === "o"
    ) {
      winner();
    } else if (
      btns[6].innerHTML === "o" &&
      btns[7].innerHTML === "o" &&
      btns[8].innerHTML === "o"
    ) {
      winner();
    } else if (
      btns[0].innerHTML === "o" &&
      btns[3].innerHTML === "o" &&
      btns[6].innerHTML === "o"
    ) {
      winner();
    } else if (
      btns[1].innerHTML === "o" &&
      btns[4].innerHTML === "o" &&
      btns[7].innerHTML === "o"
    ) {
      winner();
    } else if (
      btns[2].innerHTML === "o" &&
      btns[5].innerHTML === "o" &&
      btns[8].innerHTML === "o"
    ) {
      winner();
    } else if (
      btns[0].innerHTML === "o" &&
      btns[4].innerHTML === "o" &&
      btns[8].innerHTML === "o"
    ) {
      winner();
    } else if (
      btns[2].innerHTML === "o" &&
      btns[4].innerHTML === "o" &&
      btns[6].innerHTML === "o"
    ) {
      winner();
    }
  }

  checkWinner();

  score = score + 1;

  function draw() {
    if (score === 9 && whoWon === "") {
      let draw = document.createElement("div");
      playground.appendChild(draw);
      draw.classList.add("win");
      draw.innerHTML = "Draw!";
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }

  draw();
  console.log(score);
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => ticTacToe(btn));
});

document.querySelector("button").addEventListener("click", () => {
  btns.forEach((btn) => {
    btn.value = "";
    btn.innerHTML = "";
  });
  currentPlayer = "x";
  btns.forEach((btn) => {
    btn.classList.remove("winner");
  });
});

function winner() {
  let winner = document.createElement("div");
  playground.appendChild(winner);
  winner.classList.add("win");
  if (currentPlayer === "o") {
    winner.innerHTML = "Player X Won!";
    whoWon = "x";
  } else {
    winner.innerHTML = "Player O Won!";
    whoWon = "o";
  }
  let winAudio = new Audio();
  winAudio.src = "win.wav";
  winAudio.autoplay = true;
  setTimeout(() => {
    location.reload();
  }, 3000);
}
