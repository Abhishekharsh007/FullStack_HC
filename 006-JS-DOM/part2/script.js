// example 1

document.getElementById("changeTextButton").addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph has been changed.";
});


// example 2

document.getElementById("highlightFirstCity").addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});


// example 3

document.getElementById("changeOrder").addEventListener("click", function () { 
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
    coffeeType.style.margin = "5px";
    coffeeType.style.padding = "5px";
});
