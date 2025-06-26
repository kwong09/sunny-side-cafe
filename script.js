let homeScreen = document.querySelector(".homeScreen");
let startButton = document.getElementById("startButton");

let orderScreen = document.querySelector(".orderScreen");
let topSign = document.querySelector(".topSign");
let customer = document.querySelector(".customer");
let counter = document.querySelector(".counter");
let money = document.querySelector(".money");
let moneyCount = document.getElementById("moneyCount");
let nextButton = document.querySelector(".nextButton");
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
let pancakeCustomizationScreen = document.querySelector(".pancakeCustomizationScreen");
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
let toastCustomizationScreen = document.querySelector(".toastCustomizationScreen");
let toastBase = document.querySelector(".toastBase");
let toastAvocadoEgg = document.querySelector(".toastAvocadoEgg");
let toastChocolate = document.querySelector(".toastChocolate");
let toastPBJ = document.querySelector(".toastPBJ");
let toastPlain = document.querySelector(".toastPlain");

let eggsGame = document.querySelector(".eggsGame");
let eggsClose = document.querySelector(".eggsClose");
let eggsGameScreen = document.querySelector(".eggsGameScreen");
let eggsNextGameButton = document.querySelector(".eggsNextGameButton");
let eggsCustomizationScreen = document.querySelector(".eggsCustomizationScreen");
let eggsBase = document.querySelector(".eggsBase");
let eggsAvocadoEgg = document.querySelector(".eggsAvocadoEgg");
let eggsChocolate = document.querySelector(".eggsChocolate");
let eggsPBJ = document.querySelector(".eggsPBJ");
let eggsPlain = document.querySelector(".eggsPlain");

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


nextButton.addEventListener("click", function() {
    nextButton.style.animation = "nextButtonRightDisappear 2s ease-in-out forwards";
    customerSpeechBubble.style.animation = "speechBubbleDown 1s ease-in-out forwards";
    topSign.style.animation = "signUp 1s ease-in-out forwards";
    customer.style.animation = "customerDown 1s ease-in-out forwards";

    setTimeout(function() {
        orderScreen.classList.add("fadeOut");
    }, 1000);

    setTimeout(function() {
        invisible(orderScreen);
        orderScreen.classList.remove("fadeOut");
        visible(mainDishScreen);
        mainDishScreen.classList.add("fadeIn");
    }, 2000);
})



pancakeButton.addEventListener("click", function() {
    pancakeGame.style.animation = "minigameUp 1s ease-in-out forwards";
});

pancakeClose.addEventListener("click", function() {
    pancakeGame.style.animation = "minigameDown 1s ease-in-out forwards";
});

toastButton.addEventListener("click", function() {
    toastGame.style.animation = "minigameUp 1s ease-in-out forwards";
});

toastClose.addEventListener("click", function() {
    toastGame.style.animation = "minigameDown 1s ease-in-out forwards";
});

eggsButton.addEventListener("click", function() {
    eggsGame.style.animation = "minigameUp 1s ease-in-out forwards";
});

eggsClose.addEventListener("click", function() {
    eggsGame.style.animation = "minigameDown 1s ease-in-out forwards";
});



pancakePan.addEventListener("click", function() {
    sliderCircle.style.animationPlayState = "paused";

    requestAnimationFrame(() =>{
    let sliderLeft = parseInt(getComputedStyle(sliderCircle).left);
    visible(pancakeNextGameButton);

    if (sliderLeft <= 404 && sliderLeft >= 306) {
        pancakeGameText.innerHTML = "Perfect! You must be an awesome chef!";
        if (round === 1) {
            score++;
        }
    } else if ((sliderLeft >= 208 && sliderLeft < 306) || sliderLeft > 404 && sliderLeft <= 502) {
        pancakeGameText.innerHTML = "Good effort! You can do better next time!";
        if (round === 1) {
            score = score + 0.5;
        }
    } else {
        pancakeGameText.innerHTML = "That was bad... Try to improve!";
    }
    });
});

pancakeNextGameButton.addEventListener("click", function() {
    pancakeGameScreen.style.animation = "gameScreenExit 1s ease-in-out forwards";
    pancakeCustomizationScreen.style.animation = "customizationScreenEnter 1s ease-in-out forwards";
});

//pancake customization options -- updates pancake base, actual plate, and selected dish

pancakeButter.addEventListener("click", function() {
    pancakeBase.style.backgroundColor = "green";
    selectedDish = "pancakeButter";
});



