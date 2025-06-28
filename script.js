let homeScreen = document.querySelector(".homeScreen");
let startButton = document.getElementById("startButton");

let orderScreen = document.querySelector(".orderScreen");
let topSign1 = document.querySelector(".topSign1");
let customer = document.querySelector(".customer");
let counter = document.querySelector(".counter");
let money = document.querySelector(".money");
let moneyCount = document.getElementById("moneyCount");
let nextButton1 = document.querySelector(".nextButton1");
let customerSpeechBubble = document.querySelector(".customerSpeechBubble");

let mainDishScreen = document.querySelector(".mainDishScreen");
let food = document.querySelector(".food");
let mainDish = document.querySelector(".mainDish");
let plate = document.querySelector(".plate");
let pancakeButton = document.querySelector(".pancakeButton");
let toastButton = document.querySelector(".toastButton");
let eggsButton = document.querySelector(".eggsButton");

let minigame = document.querySelector(".minigame");
let pancakeGame = document.querySelector(".pancakeGame");
let closeButton = document.querySelector(".closeButton");
let pancakeClose = document.querySelector(".pancakeClose");
let gameScreen = document.querySelector(".gameScreen");
let pancakeGameScreen = document.querySelector(".pancakeGameScreen");
let pancakePan = document.getElementById("pancakePan");
let sliderBar = document.getElementById("sliderBar");
let sliderCircle = document.getElementById("sliderCircle");
let pancakeGameText = document.getElementById("pancakeGameText");
let nextGameButton = document.querySelector(".nextGameButton");
let pancakeNextGameButton = document.querySelector(".pancakeNextGameButton");
let customizationScreen = document.querySelector(".customizationScreen");
let pancakeCustomizationScreen = document.querySelector(
  ".pancakeCustomizationScreen"
);
let customizationBase = document.querySelector(".customizationBase");
let customizationOptions = document.querySelector(".customizationOptions");
let pancakeBase = document.querySelector(".pancakeBase");
let pancakeButter = document.querySelector(".pancakeButter");
let pancakeFruits = document.querySelector(".pancakeFruits");
let pancakeWhippedCream = document.querySelector(".pancakeWhippedCream");
let pancakePlain = document.querySelector(".pancakePlain");

let toastGame = document.querySelector(".toastGame");
let toastClose = document.querySelector(".toastClose");
let toastGameScreen = document.querySelector(".toastGameScreen");
let toastNextGameButton = document.querySelector(".toastNextGameButton");
let toastCustomizationScreen = document.querySelector(
  ".toastCustomizationScreen"
);
let toastBase = document.querySelector(".toastBase");
let toastAvocadoEgg = document.querySelector(".toastAvocadoEgg");
let toastChocolate = document.querySelector(".toastChocolate");
let toastPBJ = document.querySelector(".toastPBJ");
let toastPlain = document.querySelector(".toastPlain");

let eggsGame = document.querySelector(".eggsGame");
let eggsClose = document.querySelector(".eggsClose");
let eggsGameScreen = document.querySelector(".eggsGameScreen");
let eggsNextGameButton = document.querySelector(".eggsNextGameButton");
let eggsCustomizationScreen = document.querySelector(
  ".eggsCustomizationScreen"
);
let eggsBase = document.querySelector(".eggsBase");
let eggsOmelette = document.querySelector(".eggsOmelette");
let eggsHardBoiled = document.querySelector(".eggsHardBoiled");
let eggsScrambled = document.querySelector(".eggsScrambled");
let eggsSunnySideUp = document.querySelector(".eggsSunnySideUp");

let toaster = document.querySelector(".toaster");
let timerCircle = document.querySelector(".timerCircle");
let timerLine = document.querySelector(".timerLine");
let toastGameText = document.getElementById("toastGameText");

let nextButton2 = document.querySelector(".nextButton2");

let drinksScreen = document.querySelector(".drinksScreen");
let topSign2 = document.querySelector(".topSign2");

let score = 0;
let customerNumber = 1;
let selectedDish = "none";
let selectedDrink = "none";

function visible(obj) {
  obj.style.display = "block";
}

function invisible(obj) {
  obj.style.display = "none";
}

nextButton1.addEventListener("click", function () {
  nextButton1.style.animation =
    "nextButtonRightDisappear 2s ease-in-out forwards";
  customerSpeechBubble.style.animation =
    "speechBubbleDown 1s ease-in-out forwards";
  topSign1.style.animation = "signUp 1s ease-in-out forwards";
  customer.style.animation = "customerDown 1s ease-in-out forwards";

  setTimeout(function () {
    orderScreen.classList.add("fadeOut");
  }, 1000);

  setTimeout(function () {
    invisible(orderScreen);
    orderScreen.classList.remove("fadeOut");
    visible(mainDishScreen);
    mainDishScreen.classList.add("fadeIn");
  }, 2000);

  setTimeout(function () {
    mainDishScreen.classList.remove("fadeIn");
  }, 3000);
});

pancakeButton.addEventListener("click", function () {
  pancakeGame.style.animation = "minigameUp 1s ease-in-out forwards";
});

pancakeClose.addEventListener("click", function () {
  pancakeGame.style.animation = "minigameDown 1s ease-in-out forwards";
});

toastButton.addEventListener("click", function () {
  toastGame.style.animation = "minigameUp 1s ease-in-out forwards";
});

toastClose.addEventListener("click", function () {
  toastGame.style.animation = "minigameDown 1s ease-in-out forwards";
});

eggsButton.addEventListener("click", function () {
  eggsGame.style.animation = "minigameUp 1s ease-in-out forwards";
});

eggsClose.addEventListener("click", function () {
  eggsGame.style.animation = "minigameDown 1s ease-in-out forwards";
});

pancakePan.addEventListener("click", function () {
  sliderCircle.style.animationPlayState = "paused";

  requestAnimationFrame(() => {
    let sliderLeft = parseInt(getComputedStyle(sliderCircle).left);
    visible(pancakeNextGameButton);

    if (sliderLeft <= 404 && sliderLeft >= 306) {
      pancakeGameText.innerHTML = "Perfect! You must be an awesome chef!";
      if (round === 1) {
        score++;
      }
    } else if (
      (sliderLeft >= 208 && sliderLeft < 306) ||
      (sliderLeft > 404 && sliderLeft <= 502)
    ) {
      pancakeGameText.innerHTML = "Good effort! You can do better next time!";
      if (round === 1) {
        score = score + 0.5;
      }
    } else {
      pancakeGameText.innerHTML = "That was bad... Try to improve!";
    }
  });
});

pancakeNextGameButton.addEventListener("click", function () {
  pancakeGameScreen.style.animation = "gameScreenExit 1s ease-in-out forwards";
  pancakeCustomizationScreen.style.animation =
    "customizationScreenEnter 1s ease-in-out forwards";
});

//pancake customization options -- updates pancake base, actual plate, and selected dish

pancakeButter.addEventListener("click", function () {
  pancakeBase.style.backgroundImage = "url('/assets/pancakeButter.png')";
  selectedDish = "pancakeButter";
  mainDish.style.backgroundImage = "url('/assets/pancakeButter.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

pancakeFruits.addEventListener("click", function () {
  pancakeBase.style.backgroundImage = "url('/assets/pancakeFruits.png')";
  selectedDish = "pancakeFruits";
  mainDish.style.backgroundImage = "url('/assets/pancakeFruits.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

pancakeWhippedCream.addEventListener("click", function () {
  pancakeBase.style.backgroundImage = "url('/assets/pancakeWhippedCream.png')";
  selectedDish = "pancakeWhippedCream";
  mainDish.style.backgroundImage = "url('/assets/pancakeWhippedCream.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

pancakePlain.addEventListener("click", function () {
  pancakeBase.style.backgroundImage = "url('/assets/pancakePlain.png')";
  selectedDish = "pancakePlain";
  mainDish.style.backgroundImage = "url('/assets/pancakePlain.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

timerCircle.addEventListener("click", function () {
  timerLine.style.animationPlayState = "paused";
  visible(toastNextGameButton);

  requestAnimationFrame(() => {
    let timerLineMatrix = getComputedStyle(timerLine).transform;
    let matrixList = timerLineMatrix
      .replace("matrix(", "")
      .replace(")", "")
      .split(",");
    let value1 = parseFloat(matrixList[0]);
    let value2 = parseFloat(matrixList[1]);
    let timerLineRadians = Math.atan2(value2, value1);
    //radians to degrees conversion!
    let timerLineDegrees = timerLineRadians * (180 / Math.PI);

    if (timerLineDegrees >= 70 && timerLineDegrees <= 110) {
      toastGameText.innerHTML = "Awesome job!";
      if (round === 2) {
        score++;
      }
    } else if (
      (timerLineDegrees < 70 && timerLineDegrees >= 20) ||
      (timerLineDegrees > 110 && timerLineDegrees <= 160)
    ) {
      toastGameText.innerHTML = "Good effort!";
      if (round === 2) {
        score = score + 0.5;
      }
    } else {
      toastGameText.innerHTML = "That was not good...";
    }
  });
});

toastNextGameButton.addEventListener("click", function () {
  toastGameScreen.style.animation = "gameScreenExit 1s ease-in-out forwards";
  toastCustomizationScreen.style.animation =
    "customizationScreenEnter 1s ease-in-out forwards";
});

//toast customization options

toastAvocadoEgg.addEventListener("click", function () {
  toastBase.style.backgroundImage = "url('/assets/toastAvocadoEgg.png')";
  selectedDish = "toastAvocadoEgg";
  mainDish.style.backgroundImage = "url('/assets/toastAvocadoEgg.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

toastChocolate.addEventListener("click", function () {
  toastBase.style.backgroundImage = "url('/assets/toastChocolate.png')";
  selectedDish = "toastChocolate";
  mainDish.style.backgroundImage = "url('/assets/toastChocolate.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

toastPBJ.addEventListener("click", function () {
  toastBase.style.backgroundImage = "url('/assets/toastPBJ.png')";
  selectedDish = "toastPBJ";
  mainDish.style.backgroundImage = "url('/assets/toastPBJ.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

toastPlain.addEventListener("click", function () {
  toastBase.style.backgroundImage = "url('/assets/toastPlain.png')";
  selectedDish = "toastPlain";
  mainDish.style.backgroundImage = "url('/assets/toastPlain.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

let egg1 = document.querySelector(".egg1");
let egg2 = document.querySelector(".egg2");
let egg3 = document.querySelector(".egg3");
let eggsGameText = document.querySelector(".eggsGameText");
let eggsScore = 0;

setInterval(() => {
  let randomLeft1 = Math.random() * (420 - 0) + 0;
  let randomTop1 = Math.random() * (220 - 0) + 0;
  let randomLeft2 = Math.random() * (420 - 0) + 0;
  let randomTop2 = Math.random() * (220 - 0) + 0;
  let randomLeft3 = Math.random() * (420 - 0) + 0;
  let randomTop3 = Math.random() * (220 - 0) + 0;

  egg1.style.left = randomLeft1 + "px";
  egg1.style.top = randomTop1 + "px";
  egg2.style.left = randomLeft2 + "px";
  egg2.style.top = randomTop2 + "px";
  egg3.style.left = randomLeft3 + "px";
  egg3.style.top = randomTop3 + "px";
}, 750);

egg1.addEventListener("click", function () {
  let randomLeft1 = Math.random() * (420 - 0) + 0;
  let randomTop1 = Math.random() * (220 - 0) + 0;
  eggsScore++;
  egg1.style.left = randomLeft1 + "px";
  egg1.style.top = randomTop1 + "px";

  eggsGameText.innerHTML = eggsScore;

  if (eggsScore >= 10) {
    invisible(egg1);
    invisible(egg2);
    invisible(egg3);
    visible(eggsNextGameButton);
  }
});

egg2.addEventListener("click", function () {
  let randomLeft2 = Math.random() * (420 - 0) + 0;
  let randomTop2 = Math.random() * (220 - 0) + 0;
  eggsScore++;
  egg2.style.left = randomLeft2 + "px";
  egg2.style.top = randomTop2 + "px";

  eggsGameText.innerHTML = eggsScore;

  if (eggsScore >= 10) {
    invisible(egg1);
    invisible(egg2);
    invisible(egg3);
    visible(eggsNextGameButton);
  }
});

egg3.addEventListener("click", function () {
  let randomLeft3 = Math.random() * (420 - 0) + 0;
  let randomTop3 = Math.random() * (220 - 0) + 0;
  eggsScore++;
  egg3.style.left = randomLeft3 + "px";
  egg3.style.top = randomTop3 + "px";

  eggsGameText.innerHTML = eggsScore;

  if (eggsScore >= 10) {
    invisible(egg1);
    invisible(egg2);
    invisible(egg3);
    visible(eggsNextGameButton);
  }
});

eggsNextGameButton.addEventListener("click", function () {
  eggsGameScreen.style.animation = "gameScreenExit 1s ease-in-out forwards";
  eggsCustomizationScreen.style.animation =
    "customizationScreenEnter 1s ease-in-out forwards";
});

nextButton2.addEventListener("click", function () {
  nextButton2.style.animation =
    "nextButtonRightDisappear 2s ease-in-out forwards";
  pancakeButton.style.animation =
    "selectionButtonsDown 1s ease-in-out forwards";
  toastButton.style.animation = "selectionButtonsDown 1s ease-in-out forwards";
  eggsButton.style.animation = "selectionButtonsDown 1s ease-in-out forwards";
  plate.style.animation = "plateOut 1s ease-in-out forwards";
  topSign2.style.animation = "signUp 1s ease-in-out forwards";

  setTimeout(function () {
    mainDishScreen.classList.add("fadeOut");
  }, 1000);

  setTimeout(function () {
    invisible(mainDishScreen);
    mainDishScreen.classList.remove("fadeOut");
    visible(drinksScreen);
    drinksScreen.classList.add("fadeIn");
  }, 2000);

  setTimeout(function () {
    drinksScreen.classList.remove("fadeIn");
  }, 3000);
});

//egg customization options

eggsSunnySideUp.addEventListener("click", function () {
  eggsBase.style.backgroundImage = "url('/assets/eggsSunnySideUp.png')";
  selectedDish = "eggsSunnySideUp";
  mainDish.style.backgroundImage = "url('/assets/eggsSunnySideUp.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

eggsOmelette.addEventListener("click", function () {
  eggsBase.style.backgroundImage = "url('/assets/eggsOmelette.png')";
  selectedDish = "eggsOmelette";
  mainDish.style.backgroundImage = "url('/assets/eggsOmelette.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

eggsHardBoiled.addEventListener("click", function () {
  eggsBase.style.backgroundImage = "url('/assets/eggsHardBoiled.png')";
  selectedDish = "eggsHardBoiled";
  mainDish.style.backgroundImage = "url('/assets/eggsHardBoiled.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

eggsScrambled.addEventListener("click", function () {
  eggsBase.style.backgroundImage = "url('/assets/eggsScrambled.png')";
  selectedDish = "eggsScrambled";
  mainDish.style.backgroundImage = "url('/assets/eggsScrambled.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});
