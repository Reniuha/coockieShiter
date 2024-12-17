const coockie = document.getElementById("coockie");
var counterElement = document.getElementById("coockie-counter");
var rebirthButton = document.getElementById("rebirth");

var counter = 200;
var rebirth = 1;
var price = 20;

coockie.addEventListener("click", () => {
    counter += rebirth * 1;
    console.log("counter: " + counter);
    counterElement.textContent = `Coockies: ${counter} / Rebirth price: ${price}`;
});

rebirthButton.addEventListener("click", () => {
    if (counter >= price) {
        counter = 0;
        rebirth += 1;
        console.log("rebirth: " + rebirth);
        price = Math.round(price * 2.5);
        counterElement.textContent = `Coockies: ${counter} / Rebirth price: ${price}`;
    } else {
        counterElement.textContent = `You don't have enough cookies.`;
    }
});

const clicker = document.getElementById("clicker");
let clickerOwnedElement = document.getElementById("owned");
let clickerPriceElement = document.getElementById("price");

let clickerOwned = 0;
let clickerPrice = 20;

clicker.addEventListener("click", () => {
    if (counter >= clickerPrice) {
        counter -= clickerPrice;
        clickerOwned += 1;
        clickerPrice = Math.round(clickerPrice * 1.5);

        clickerOwnedElement.textContent = clickerOwned;
        clickerPriceElement.textContent = clickerPrice;

        counterElement.textContent = `Coockies: ${counter} / Rebirth price: ${price}`;
    } else {
        const previousText = clickerPriceElement.textContent;
        clickerPriceElement.textContent = "You don't have enough cookies.";
        setTimeout(() => {
            clickerPriceElement.textContent = previousText;
        }, 2000);
    }
});
