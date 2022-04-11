function add(number1, number2) {
    return number1 + number2;
}

const add2 = (number1, number2) => number1 + number2;

function getSquaredNumber(number) {
    return number * number;
}

const getSquaredNumber2 = (number) => number * number;

function getHours() {
    return new Date().getHours();
}

const getHours2 = () => new Date().getHours();

document.addEventListener("click", function () {
    console.log("Klick!");
});

document.addEventListener("click", () => console.log("Klick2!"));
