const coockie = document.getElementById("coockie");
var counterElement = document.getElementById("coockie-counter");
var rebirthButton = document.getElementById("rebirth");

var counter = 5000;
var rebirth = 1;
var price = 20;

const clicker = document.getElementById("clicker");
let clickerOwnedElement = document.getElementById("owned");
let clickerPriceElement = document.getElementById("price");

let clickerOwned = 0;
let clickerPrice = 20;

coockie.addEventListener("click", () => {
    counter += rebirth === 0 ? 1 : 1 * rebirth;
    console.log("counter: " + counter);
    enoughForClicker();
});

clicker.addEventListener("click", () => {
    if (counter >= clickerPrice) {
        counter -= clickerPrice;
        clickerOwned += 1;
        clickerPrice = Math.round(clickerPrice * 1.5);
        enoughForClicker();
    } else {
        const previousText = clickerPriceElement.textContent;
        clickerPriceElement.textContent = "You don't have enough cookies.";
        setTimeout(() => {
            clickerPriceElement.textContent = previousText;
        }, 2000);
    }
});

rebirthButton.addEventListener("click", () => {
    if (counter >= price) {
        counter = 0;
        rebirth += 1;
        price = Math.round(price * 2.5);
        clickerOwned = 0;
        clickerPrice = 20;
        console.log("rebirth: " + rebirth);
    } else {
        counterElement.textContent = `You don't have enough cookies.`;
    }
    enoughForClicker();
});

function enoughForClicker() {
    if (counter >= clickerPrice) {
        clicker.style.backgroundColor = "green";
    } else {
        clicker.style.backgroundColor = "red";
    }
}

if (clickerOwned >= 0) {
    setInterval(() => {
        counter += (clickerOwned * rebirth) * 0.2;
        enoughForClicker();
    }, 4000);
}

setInterval(() => {
    counterElement.textContent = `Cookies: ${counter} / Rebirths: ${rebirth - 1} / Rebirth price: ${price}`;
    clickerPriceElement.textContent = `Price: ${Math.round(clickerPrice)}`;
    clickerOwnedElement.textContent = `Owned: ${clickerOwned}`;
    enoughForClicker();
}, 100);
