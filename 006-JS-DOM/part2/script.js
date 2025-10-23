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


// example 4

document.getElementById("addNewItem").addEventListener("click", function () {
    let newItem = document.createElement('li');
    newItem.textContent = "Butter";
    document.getElementById("shoppingList").appendChild(newItem);
});


// example 5

document.getElementById("removeLastTask").addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});


// example 6

document.getElementById("meButtonclick").addEventListener("mouseover", function () {
    alert("Hello Abhishek");
});


// example 7

document.getElementById("teaList").addEventListener("click", function (event) {
    if (event.target && event.target.matches(".teaItem")) {
        alert("You selected: " + event.target.textContent);
    }
});


// example 8

document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    // alert("Submitted!");

    event.preventDefault();
    let feedback1 = document.getElementById("feedbackInput");
    let feedback2 = document.getElementById("feedbackInput").value;

    console.log(feedback1);
    console.log(feedback2);
    
    document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback2}`;
    
    let feedbackDisplay = document.getElementById("feedbackDisplay");
    feedbackDisplay.style.backgroundColor = "#00CDAC"
})


// example 9

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
})


// example 10

document.getElementById("toggleHighlight").addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
});
