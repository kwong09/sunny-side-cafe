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
let pancakeSelection = document.querySelector(".pancakeSelection");
let toastSelection = document.querySelector(".toastSelection");
let eggsSelection = document.querySelector(".eggsSelection");

let minigame = document.querySelector(".minigame");
let pancakeGame = document.querySelector(".pancakeGame");
let closeButton = document.querySelector(".closeButton");
let gameScreen = document.querySelector(".gameScreen");
let pancakePan = document.getElementById("pancakePan");
let sliderBar = document.getElementById("sliderBar");
let sliderCircle = document.getElementById("sliderCircle");
let pancakeGameText = document.getElementById("pancakeGameText");
let nextGameButton = document.querySelector(".nextGameButton");

function visible(obj) {
    obj.style.display = "block";

    if (orderScreen.style.display === "block") {
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
    }


    if (mainDishScreen.style.display === "block") {

        pancakePan.addEventListener("click", function() {
            sliderCircle.style.animationPlayState = "paused";

            requestAnimationFrame(() =>{
            let sliderLeft = parseInt(getComputedStyle(sliderCircle).left);
            visible(nextGameButton)

            if (sliderLeft <= 480 && sliderLeft >= 380) {
                pancakeGameText.innerHTML = "Perfect! You must be an awesome chef!";
            } else if (sliderLeft >= 480 && sliderLeft < 580) {
                pancakeGameText.innerHTML = "Good effort! You can do better next time!";
            } else if (sliderLeft > 280 && sliderLeft <= 380) {
                pancakeGameText.innerHTML = "Good effort! You can do better next time!";
            } else {
                pancakeGameText.innerHTML = "That was terrible... Try to improve for the next time!";
            }
            });
        });
    }
}

function invisible(obj) {
    obj.style.display = "none";
}

