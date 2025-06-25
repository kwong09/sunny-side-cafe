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

let mainDishScreen = document.querySelector(".mainDishScreen")

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
}

function invisible(obj) {
    obj.style.display = "none";
}

