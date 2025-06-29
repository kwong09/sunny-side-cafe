let homeScreen = document.querySelector(".homeScreen");
let startButton = document.getElementById("startButton");

let orderScreen = document.querySelector(".orderScreen");
let topSign1 = document.querySelector(".topSign1");
let customer = document.querySelector(".customer");
let customer2 = document.querySelector(".customer2");
let counter = document.querySelector(".counter");
let money = document.querySelector(".money");
let moneyCount = document.getElementById("moneyCount");
let dollars = 0;
let nextButton1 = document.querySelector(".nextButton1");
let customerSpeechBubble = document.querySelector(".customerSpeechBubble");

let mainDishScreen = document.querySelector(".mainDishScreen");
let food = document.querySelector(".food");
let mainDish = document.querySelector(".mainDish");
let drink2 = document.querySelector(".drink2");
let plate = document.querySelector(".plate");
let pancakeButton = document.querySelector(".pancakeButton");
let toastButton = document.querySelector(".toastButton");
let eggsButton = document.querySelector(".eggsButton");

let minigame = document.querySelector(".minigame");
let customizationWindow = document.querySelector(".customizationWindow");
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
let nextButton3 = document.querySelector(".nextButton3");
let nextButton4 = document.querySelector(".nextButton4");

let drinksScreen = document.querySelector(".drinksScreen");
let topSign2 = document.querySelector(".topSign2");

let customerScreen = document.querySelector(".customerScreen");
let customerOption1 = document.querySelector(".customerOption1");
let customerOption2 = document.querySelector(".customerOption2");
let customerOption3 = document.querySelector(".customerOption3");
let customerRequest = document.getElementById("customerRequest");

let score = 0;
let round = 1;
let selectedDish = "";
let temperature = "";
let selectedDrink = "";
let selectedDrinkTopping = "";

function visible(obj) {
  obj.style.display = "block";
}

function invisible(obj) {
  obj.style.display = "none";
}

customerOption1.addEventListener("click", function() {
  reset();
  round = 1;
  customer.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/customer1.png')";
  customer2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/customer1.png')";
  invisible(customerScreen);
  visible(orderScreen);
  customerRequest.innerHTML = "Good morning! Could I please get a <br />simple pancake with butter on top? <br />Along with a nice, hot cup of coffee<br/>(with no toppings). Thank you!"
});

customerOption2.addEventListener("click", function() {
  reset();
  round = 2;
  customer.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/customer2.png')";
  customer2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/customer2.png')";
  invisible(customerScreen);
  visible(orderScreen);
  customerRequest.innerHTML = "Um, hello..? Can I get a uh...<br />avocado egg toast? And can I get a... <br />iced matcha drink with... milk in it?<br/>Uh. Yeah that's it. Thanks."
});

customerOption3.addEventListener("click", function() {
  reset();
  round = 3;
  customer.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/customer3.png')";
  customer2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/customer3.png')";
  invisible(customerScreen);
  visible(orderScreen);
  customerRequest.innerHTML = "HI!!! May I order a hard boiled egg?<br />I would also like an iced tea with<br />a lemon on top! Thank you so much!<br/>Have a nice day!!!"
});

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
      pancakeGameText.innerHTML = "That was bad... Better luck next time!";
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
  pancakeBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/pancakeButter.png')";
  selectedDish = "pancakeButter";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/pancakeButter.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

pancakeFruits.addEventListener("click", function () {
  pancakeBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/pancakeFruits.png')";
  selectedDish = "pancakeFruits";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/pancakeFruits.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

pancakeWhippedCream.addEventListener("click", function () {
  pancakeBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/pancakeWhippedCream.png')";
  selectedDish = "pancakeWhippedCream";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/pancakeWhippedCream.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

pancakePlain.addEventListener("click", function () {
  pancakeBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/pancakePlain.png')";
  selectedDish = "pancakePlain";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/pancakePlain.png')";
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
  toastBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/toastAvocadoEgg.png')";
  selectedDish = "toastAvocadoEgg";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/toastAvocadoEgg.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

toastChocolate.addEventListener("click", function () {
  toastBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/toastChocolate.png')";
  selectedDish = "toastChocolate";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/toastChocolate.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

toastPBJ.addEventListener("click", function () {
  toastBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/toastPBJ.png')";
  selectedDish = "toastPBJ";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/toastPBJ.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

toastPlain.addEventListener("click", function () {
  toastBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/toastPlain.png')";
  selectedDish = "toastPlain";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/toastPlain.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

//potatopotatopotato

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

    if (round === 3) {
      score++;
    }
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

    if (round === 3) {
      score++;
    }
  }
});

egg3.addEventListener("click", function () {
  let randomLeft3 = Math.random() * (420 - 0) + 0;
  let randomTop3 = Math.random() * (220 - 0) + 0;
  eggsScore--;
  egg3.style.left = randomLeft3 + "px";
  egg3.style.top = randomTop3 + "px";

  eggsGameText.innerHTML = eggsScore;

  if (eggsScore >= 10) {
    invisible(egg1);
    invisible(egg2);
    invisible(egg3);
    visible(eggsNextGameButton);

    if (round === 3) {
      score++;
    }
  }
});

eggsNextGameButton.addEventListener("click", function () {
  eggsGameScreen.style.animation = "gameScreenExit 1s ease-in-out forwards";
  eggsCustomizationScreen.style.animation =
    "customizationScreenEnter 1s ease-in-out forwards";
});

let mainDish2 = document.querySelector(".mainDish2");

nextButton2.addEventListener("click", function () {
  nextButton2.style.animation =
    "nextButtonRightDisappear 2s ease-in-out forwards";
  pancakeButton.style.animation =
    "selectionButtonsDown 1s ease-in-out forwards";
  toastButton.style.animation = "selectionButtonsDown 1s ease-in-out forwards";
  eggsButton.style.animation = "selectionButtonsDown 1s ease-in-out forwards";
  plate.style.animation = "plateOut 1s ease-in-out forwards";
  topSign2.style.animation = "signUp 1s ease-in-out forwards";

  food.style.animation = "plateOut 1s ease-in-out forwards";
  mainDish2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/" + selectedDish + ".png')";

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
  eggsBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/eggsSunnySideUp.png')";
  selectedDish = "eggsSunnySideUp";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/eggsSunnySideUp.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

eggsOmelette.addEventListener("click", function () {
  eggsBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/eggsOmelette.png')";
  selectedDish = "eggsOmelette";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/eggsOmelette.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

eggsHardBoiled.addEventListener("click", function () {
  eggsBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/eggsHardBoiled.png')";
  selectedDish = "eggsHardBoiled";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/eggsHardBoiled.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

eggsScrambled.addEventListener("click", function () {
  eggsBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/eggsScrambled.png')";
  selectedDish = "eggsScrambled";
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/eggsScrambled.png')";
  nextButton2.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

let icedButton = document.querySelector(".icedButton");
let hotButton = document.querySelector(".hotButton");
let coffeeButton = document.querySelector(".coffeeButton");
let matchaButton = document.querySelector(".matchaButton");
let teaButton = document.querySelector(".teaButton");
let coffeeText = document.querySelector(".coffeeText");
let matchaText = document.querySelector(".matchaText");
let teaText = document.querySelector(".teaText");

let coffee1 = document.querySelector(".coffee1");
let coffee2 = document.querySelector(".coffee2");
let matcha1 = document.querySelector(".matcha1");
let matcha2 = document.querySelector(".matcha2");
let tea1 = document.querySelector(".tea1");
let tea2 = document.querySelector(".tea2");


let coffeeBase = document.querySelector(".coffeeBase");
let matchaBase = document.querySelector(".matchaBase");
let teaBase = document.querySelector(".teaBase");

icedButton.addEventListener("click", function () {
  coffeeButton.style.animation = "drinksUp 1s ease-in-out forwards";
  matchaButton.style.animation = "drinksUp 1s ease-in-out forwards";
  teaButton.style.animation = "drinksUp 1s ease-in-out forwards";
  coffeeText.style.animation = "drinksTextUp 1s ease-in-out forwards";
  matchaText.style.animation = "drinksTextUp 1s ease-in-out forwards";
  teaText.style.animation = "drinksTextUp 1s ease-in-out forwards";
  coffeeButton.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldCoffee.png')";
  matchaButton.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldMatcha.png')";
  teaButton.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldTea.png')";

  coffee1.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/milk.png')";
  matcha1.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/milk.png')";
  tea1.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/lemon.png')";

  coffeeBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/emptyCup.png')";
  matchaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/emptyCup.png')";
  teaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/emptyCup.png')";

  temperature = "cold";
});
hotButton.addEventListener("click", function () {
  coffeeButton.style.animation = "drinksUp 1s ease-in-out forwards";
  matchaButton.style.animation = "drinksUp 1s ease-in-out forwards";
  teaButton.style.animation = "drinksUp 1s ease-in-out forwards";
  coffeeText.style.animation = "drinksTextUp 1s ease-in-out forwards";
  matchaText.style.animation = "drinksTextUp 1s ease-in-out forwards";
  teaText.style.animation = "drinksTextUp 1s ease-in-out forwards";
  coffeeButton.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotCoffee.png')";
  matchaButton.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotMatcha.png')";
  teaButton.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotTea.png')";

  coffee1.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/whippedCream.png')";
  matcha1.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/strawberry.png')";
  tea1.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/lemon.png')";

  coffeeBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/emptyMug.png')";
  matchaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/emptyMug.png')";
  teaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/emptyMug.png')";

  temperature = "hot";
});

let coffeeCustomizationWindow = document.querySelector(
  ".coffeeCustomizationWindow"
);
let coffeeClose = document.querySelector(".coffeeClose");
let matchaCustomizationWindow = document.querySelector(
  ".matchaCustomizationWindow"
);
let matchaClose = document.querySelector(".matchaClose");
let teaCustomizationWindow = document.querySelector(".teaCustomizationWindow");
let teaClose = document.querySelector(".teaClose");

coffeeButton.addEventListener("click", function () {
  coffeeCustomizationWindow.style.animation =
    "minigameUp 1s ease-in-out forwards";
});

coffeeClose.addEventListener("click", function () {
  coffeeCustomizationWindow.style.animation =
    "minigameDown 1s ease-in-out forwards";
});

matchaButton.addEventListener("click", function () {
  matchaCustomizationWindow.style.animation =
    "minigameUp 1s ease-in-out forwards";
});

matchaClose.addEventListener("click", function () {
  matchaCustomizationWindow.style.animation =
    "minigameDown 1s ease-in-out forwards";
});

teaButton.addEventListener("click", function () {
  teaCustomizationWindow.style.animation = "minigameUp 1s ease-in-out forwards";
});

teaClose.addEventListener("click", function () {
  teaCustomizationWindow.style.animation =
    "minigameDown 1s ease-in-out forwards";
});

coffee1.addEventListener("click", function () {
  if (temperature === "hot") {
    coffeeBase.style.backgroundImage =
      "url('https://kwong09.github.io/sunny-side-cafe/assets/hotCoffeeWhippedCream.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotCoffeeWhippedCream.png')";
    selectedDrinkTopping = "whippedCream";
  }
  if (temperature === "cold") {
    coffeeBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldCoffeeMilk.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldCoffeeMilk.png')";
    selectedDrinkTopping = "milk";
  }
  selectedDrink = "coffee";

  nextButton3.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

coffee2.addEventListener("click", function () {
  if (temperature === "hot") {
    coffeeBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotCoffee.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotCoffee.png')";
    selectedDrinkTopping = "none";
  }
  if (temperature === "cold") {
    coffeeBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldCoffee.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldCoffee.png')";
    selectedDrinkTopping = "none";
  }
  selectedDrink = "coffee";

  nextButton3.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

matcha1.addEventListener("click", function () {
  if (temperature === "hot") {
    matchaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotMatchaStrawberry.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotMatchaStrawberry.png')";
    selectedDrinkTopping = "strawberry";
  }
  if (temperature === "cold") {
    matchaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldMatchaMilk.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldMatchaMilk.png')";
    selectedDrinkTopping = "milk";
  }
  selectedDrink = "matcha";

  nextButton3.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

matcha2.addEventListener("click", function () {
  if (temperature === "hot") {
    matchaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotMatcha.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotMatcha.png')";
    selectedDrinkTopping = "none";
  }
  if (temperature === "cold") {
    matchaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldMatcha.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldMatcha.png')";
    selectedDrinkTopping = "none";
  }
  selectedDrink = "matcha";

  nextButton3.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

tea1.addEventListener("click", function () {
  if (temperature === "hot") {
    teaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotTeaLemon.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotTeaLemon.png')";
    selectedDrinkTopping = "lemon";
  }
  if (temperature === "cold") {
    teaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldTeaLemon.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldTeaLemon.png')";
    selectedDrinkTopping = "lemon";
  }
  selectedDrink = "tea";

  nextButton3.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

tea2.addEventListener("click", function () {
  if (temperature === "hot") {
    teaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotTea.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/hotTea.png')";
    selectedDrinkTopping = "none";
  }
  if (temperature === "cold") {
    teaBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldTea.png')";
    drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/coldTea.png')";
    selectedDrinkTopping = "none";
  }
  selectedDrink = "tea";

  nextButton3.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";
});

let food2 = document.querySelector(".food2");
let food3 = document.querySelector(".food3");
let mainDish3 = document.querySelector(".mainDish3");
let drink3 = document.querySelector(".drink3");
let topSign3 = document.querySelector(".topSign3");
let pickupScreen = document.querySelector(".pickupScreen");
let customerResponse = document.getElementById("customerResponse");
let moneyEarned = document.getElementById("moneyEarned");

nextButton3.addEventListener("click", function () {
  nextButton3.style.animation = "nextButtonRightDisappear 2s ease-in-out forwards";
  food2.style.animation = "plateOut 1s ease-in-out forwards";
  topSign3.style.animation = "signUp 1s ease-in-out forwards";
  mainDish3.style.backgroundImage = mainDish2.style.backgroundImage;
  drink3.style.backgroundImage = drink2.style.backgroundImage;

  if (round === 1) {
    if (temperature === "hot") {
      score++;
    }
    if (selectedDrink === "coffee") {
      score++;
    }
    if (selectedDish === "pancakeButter") {
      score ++;
    }
    if (selectedDrinkTopping === "none") {
      score++;
    }
  }

  if (round === 2) {
    if (temperature === "cold") {
      score++;
    }
    if (selectedDrink === "matcha") {
      score++;
    }
    if (selectedDish === "toastAvocadoEgg") {
      score ++;
    }
    if (selectedDrinkTopping === "milk") {
      score++;
    }
  }

  if (round === 3) {
    if (temperature === "cold") {
      score++;
    }
    if (selectedDrink === "tea") {
      score++;
    }
    if (selectedDish === "eggsHardBoiled") {
      score ++;
    }
    if (selectedDrinkTopping === "lemon") {
      score++;
    }
  }

  if (score >= 4) {
    customerResponse.innerHTML = "Thank you for making my breakfast!";
    moneyEarned.innerHTML = "$5.25";
    dollars = dollars + 5.25;
  }

  if (score<4 && score>=2) {
    customerResponse.innerHTML = "The meal wasn't perfect, but it<br> was still yummy!";
    moneyEarned.innerHTML = "$3.00";
    dollars = dollars + 3;
  }

  if (score<2) {
    customerResponse.innerHTML = "Um... I didn't order this...";
    moneyEarned.innerHTML = "$0.00";
  }

  let finalScore = document.getElementById("finalScore");

  setTimeout(function () {
    drinksScreen.classList.add("fadeOut");
    finalScore.innerHTML = score + " out of 5 stars";
  }, 1000);

  setTimeout(function () {
    invisible(drinksScreen);
    drinksScreen.classList.remove("fadeOut");
    visible(pickupScreen);
    pickupScreen.classList.add("fadeIn");
  }, 2000);

  setTimeout(function () {
    pickupScreen.classList.remove("fadeIn");
  }, 3000);
});

let topSign4 = document.querySelector(".topSign4");

nextButton4.addEventListener("click", function() {
  nextButton4.style.animation = "nextButtonRightDisappear 2s ease-in-out forwards";
  food3.style.animation = "plateOut 1s ease-in-out forwards";
  topSign4.style.animation = "signUp 1s ease-in-out forwards";

  setTimeout(function () {
    pickupScreen.classList.add("fadeOut");
  }, 1000);

  setTimeout(function () {
    invisible(pickupScreen);
    pickupScreen.classList.remove("fadeOut");
    visible(customerScreen);
    customerScreen.classList.add("fadeIn");
  }, 2000);

  setTimeout(function () {
    customerScreen.classList.remove("fadeIn");
  }, 3000);

});

function reset() {

  //order screen
  topSign1.style.animation = "signDown 1s ease-in-out forwards";
  customer.style.animation = "customerUp 1s ease-in-out forwards";
  nextButton1.style.animation = "nextButtonRightAppear 1s ease-in-out forwards"
  customerSpeechBubble.style.animation = "expandRight 1s ease-in-out forwards, floating 2s ease-in-out infinite";

  pancakeGame.style.animation = "none";
  pancakeGame.style.top = "600px";
  toastGame.style.animation = "none";
  toastGame.style.top = "600px";
  eggsGame.style.animation = "none";
  eggsGame.style.top = "600px";

  coffeeCustomizationWindow.style.animation = "none";
  coffeeCustomizationWindow.style.top = "600px";
  teaCustomizationWindow.style.animation = "none";
  teaCustomizationWindow.style.top = "600px";
  matchaCustomizationWindow.style.animation = "none";
  matchaCustomizationWindow.style.top = "600px";
  
  pancakeButton.style.animation =
    "selectionButtonsUp 1s ease-in-out forwards";
  toastButton.style.animation = "selectionButtonsUp 1s ease-in-out forwards";
  eggsButton.style.animation = "selectionButtonsUp 1s ease-in-out forwards";
  plate.style.animation = "plateIn 1s ease-in-out forwards";
  topSign2.style.animation = "signDown 1s ease-in-out forwards";

  //maindish screen
  mainDish.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/emptyImage.png')";
  nextButton2.style.right = "-100%";
  nextButton2.style.animation = "none";

  //pancake game reset

  pancakeGameScreen.style.left = "25px";
  pancakeGameScreen.style.animation = "none";
  pancakeCustomizationScreen.style.left = "800px";
  pancakeCustomizationScreen.style.animation = "none";
  sliderCircle.style.animationPlayState = "unset";
  pancakeGameText.innerHTML = "Click the pan to stop at the right time!";
  pancakeBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/pancakePlain.png')";

  //toast game reset

  toastGameScreen.style.left = "25px";
  toastGameScreen.style.animation = "none";
  toastCustomizationScreen.style.left = "800px";
  toastCustomizationScreen.style.animation = "none";
  timerLine.style.animationPlayState = "unset";
  toastGameText.innerHTML = "Stop the timer at the perfect time!";
  toastBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/toastPlain.png')";

  //egg game reset

  eggsGameScreen.style.left = "25px";
  eggsGameScreen.style.animation = "none";
  eggsCustomizationScreen.style.left = "800px";
  eggsCustomizationScreen.style.animation = "none";
  visible(egg1);
  visible(egg2);
  visible(egg3);
  eggsScore = 0;
  eggsGameText.innerHTML = eggsScore;
  eggsBase.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/eggsSunnySideUp.png')";

  topSign3.style.animation = "signDown 1s ease-in-out forwards";

  //drinks
  drink2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/emptyImage.png')";
  drink3.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/emptyImage.png')";


  coffeeButton.style.top = "400px";
  matchaButton.style.top = "400px";
  teaButton.style.top = "400px";
  coffeeText.style.top = "400px";
  matchaText.style.top = "400px";
  teaText.style.top = "400px";

  coffeeButton.style.animation = "none";
  matchaButton.style.animation = "none";
  teaButton.style.animation = "none";
  coffeeText.style.animation = "none";
  matchaText.style.animation = "none";
  teaText.style.animation = "none";



  food.style.animation = "plateIn 1s ease-in-out forwards";
  food2.style.animation = "plateIn 1s ease-in-out forwards";
  food3.style.animation = "plateIn 1s ease-in-out forwards";

  mainDish2.style.backgroundImage = "url('https://kwong09.github.io/sunny-side-cafe/assets/emptyImage.png')";
  topSign4.style.animation = "signDown 1s ease-in-out forwards";
  nextButton3.style.right = "-100%";
  nextButton3.style.animation = "none";

  nextButton4.style.animation = "nextButtonRightAppear 2s ease-in-out forwards";

  score = 0;
  selectedDish = "";
  temperature = "";
  selectedDrink = "";
  selectedDrinkTopping = "";
  let formattedDollars = dollars.toFixed(2);
  moneyCount.innerHTML = "$" + formattedDollars;
}