const coockie = document.getElementById("coockie");
var counterElement = document.getElementById("coockie-counter");
var rebirthButton = document.getElementById("rebirth");

var counter = 0;
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
    counterElement.textContent = `Cookies: ${counter} / Rebirths: ${rebirth - 1} /  Rebirth price: ${price}`;

    enoughForClicker()
});

clicker.addEventListener("click", () => {
    if (counter >= clickerPrice) {
        counter -= clickerPrice;
        clickerOwned += 1;
        clickerPrice = Math.round(clickerPrice * 1.5);

        clickerOwnedElement.textContent = `Owned: ${clickerOwned}`;
        clickerPriceElement.textContent = `Price: ${clickerPrice}`;

    } else {
        const previousText = clickerPriceElement.textContent;
        clickerPriceElement.textContent = "You don't have enough cookies.";
        setTimeout(() => {
            clickerPriceElement.textContent = previousText;
        }, 2000);
    }




    enoughForClicker()
});



rebirthButton.addEventListener("click", () => {
    if (counter >= price) {
        counter = 0;
        rebirth += 1;
        console.log("rebirth: " + rebirth);
        price = Math.round(price * 2.5);
        
        clickerOwned = 0;
        clickerPrice = 20;

        clickerPriceElement.textContent = `Price: ${clickerPrice}`;
        clickerOwnedElement.textContent = `Owned: ${clickerOwned}`;
        counterElement.textContent = `Cookies: ${counter} / Rebirths: ${rebirth - 1} / Rebirth price: ${price}`;
    } else {
        counterElement.textContent = `You don't have enough cookies.`;
    }

    enoughForClicker()
});

function enoughForClicker () {
    if(counter >= clickerPrice){
        clicker.style.backgroundColor = "green"
    } else {
        clicker.style.backgroundColor = "red"
    }
}


