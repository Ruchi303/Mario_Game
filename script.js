score = 0;
cross = true;
audio = new Audio('mario.mp3');
audiogo = new Audio('gameover.wav');
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
  console.log("Key code is: ", e.key);
  if (e.key == "ArrowUp") {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 10000);
  }
  if (e.key == "ArrowRight") {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.key == "ArrowLeft") {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offserX = Math.abs(dx - ox);
  offserY = Math.abs(dy - oy);

  if (offserX < 73 && offserY < 52) {
    gameOver.innerHTML = "Game over - Reload to start over";
    obstacle.classList.remove("obstacleAni");
    audiogo.play();
    setTimeout(() => {
        audiogo.pause();
    }, 1000);
  } 
  else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      cross = true;
    }, 1000);
    aniDur = parseFloat(
      window.getComputedStyle(dino, null).getPropertyValue("animation-duration")
    );
    newDur = aniDur - 0.1;
    obstacle.style.animationDuration = newDur + "s";
    console.log('New animation duration: ', newDur)
  }
}, 100);

function updateScore(score) {
  scoreCont.innerHTML = "Your Score: " + score;
}
