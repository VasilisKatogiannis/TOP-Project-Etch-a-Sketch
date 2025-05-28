"use strict"

let grid, gridItem, items, dimension;
let userInput = 15;

//Creates the divs for the sketch pad, according to the user's input value.
function createDivSketchPad(){
    grid = document.querySelector(".container");
    for (let a = 0; a <= userInput - 1; a++){
        for (let b = 0; b <= userInput - 1; b++){
            gridItem = document.createElement("div");
            gridItem.classList.add("gridItem");
            grid.appendChild(gridItem);
        }
    }
};

//Adjusts the size of the divs & adds event listeners.
function adjustDivs(){
    items = document.querySelectorAll(".gridItem");
    dimension = 500 / userInput + "px";


    items.forEach(function(item){
        item.style.width = dimension;
        item.style.height = dimension;
        item.addEventListener("mouseover", changeColor);
    });

    //Changes the colors of the divs.
    function changeColor (e){
        let color = Math.round(Math.random()* 900000) + 100000;
        e.target.style.backgroundColor = "#" + color;
    }
};

 // Deletes the former sketch pad.
function deleteDivs(){
    let delItems = document.querySelector(".container");
    delItems.innerHTML = "";
}

//Creates the next sketch pad.
function nextSketchPad(){
    let promptInput;
    let newSketchBtn = document.querySelector(".new");
    newSketchBtn.addEventListener("click",function(){

        //Controls the user's input value.
        do{
            promptInput = prompt("Enter the number of the squares per side.");
            userInput = Number(promptInput);
        }while(isNaN(userInput) || userInput < 1 || userInput > 100);

        deleteDivs();

        createDivSketchPad();

        adjustDivs();
    });
};

createDivSketchPad();

adjustDivs();

nextSketchPad();
