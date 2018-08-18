// when a vege button gets clicked push it in a new fs.write object
// let myGarden = require('./mygarden.json')
let selectedVege = document.getElementsByClassName('vege')
let divOne = document.getElementById("div1");
// document.getElementsByTagName("button").addEventListener("click", function(){
//     alert('clicked');
// })

let waterArray = []

function addToGarden(){
    //console.log(selectedVege.innerText)
}

// .addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

    
    ev.preventDefault();
                    var idOfDraggedItem=ev.dataTransfer.getData("Text");
                    var copyimg = document.createElement("img");
                    var original = document.getElementById(idOfDraggedItem);
                    if (original == null){
                        alert("you already have a plant there")
                    }
                    copyimg.src = original.src;
                    console.log("I need this much water:")
                    console.log(original.dataset.waterRequired)
                    // for (let i = 0; i < waterArray.length; i++) {
                        
                        
                    // }
                    waterArray.push(original.dataset.waterRequired)
                    //waterArray.splice(1, 1, original.dataset.waterRequired)
                    //document.getElementById("waterRequired-1").innerHTML = waterArray

                    ev.target.appendChild(copyimg);
                    
                    calculateWaterDifferenceRow1(waterArray)
                    calculateWaterDifferenceRow2(waterArray)

                    calculateWaterDifferenceColumn1(waterArray)
                    calculateWaterDifferenceColumn2(waterArray)

                    //console.log(waterArray)
}

function emptyDiv1(){
    document.getElementById("div1").innerHTML = "";
}

function emptyDiv2(){
    document.getElementById("div2").innerHTML = "";
}

function emptyDiv3(){
    document.getElementById("div3").innerHTML = "";
}

function emptyDiv4(){
    document.getElementById("div4").innerHTML = "";
}

function calculateWaterDifferenceRow1(array) {
    let difference;
    difference = array[0] - array[1]
    difference = Math.abs(difference)
    console.log(difference)
    if(difference > 10) {
        document.getElementById("div1").classList.add("badMatch")
        document.getElementById("div1").style.borderRight = "thick solid red";
        document.getElementById("div2").classList.add("badMatch") 
        return 
    } else if (difference <= 4) {
        document.getElementById("div1").classList.add("goodMatch") 
        document.getElementById("div1").style.borderRight = "thick solid green";
        document.getElementById("div2").classList.add("goodMatch") 
        return 
    } else if (difference > 4) {
        document.getElementById("div1").classList.add("averageMatch") 
        document.getElementById("div2").classList.add("averageMatch") 
        return
    }
}

function calculateWaterDifferenceRow2(array) {
    let difference;
    difference = array[2] - array[3]
    difference = Math.abs(difference)
    console.log(difference)
    if(difference > 10) {
        document.getElementById("div3").classList.add("badMatch") 
        document.getElementById("div3").style.borderRight = "thick solid red";
        document.getElementById("div4").classList.add("badMatch") 
        return 
    } else if (difference <= 4) {
        document.getElementById("div3").classList.add("goodMatch") 
        document.getElementById("div4").classList.add("goodMatch") 
        return 
    } else if (difference > 4) {
        document.getElementById("div3").classList.add("averageMatch") 
        document.getElementById("div4").classList.add("averageMatch") 
        return
    }
}

function calculateWaterDifferenceColumn1(array){
    let cell1 = document.getElementById("div1")
    let cell3 = document.getElementById("div3")

    let difference;
    difference = array[0] - array[2]
    difference = Math.abs(difference)
    console.log(difference)
    if(difference > 10) {
        cell1.classList.add("badMatch") 
        cell3.classList.add("badMatch") 
        return 
    } else if (difference <= 4) {
        cell1.classList.add("goodMatch") 
        cell3.classList.add("goodMatch") 
        return 
    } else if (difference > 4) {
        cell1.classList.add("averageMatch") 
        cell3.classList.add("averageMatch") 
        return
    }
}

function calculateWaterDifferenceColumn2(array){
    let cell2 = document.getElementById("div2")
    let cell4 = document.getElementById("div4")

    let difference;
    difference = array[1] - array[3]
    difference = Math.abs(difference)
    console.log(difference)
    if(difference > 10) {
        cell2.classList.add("badMatch") 
        cell4.classList.add("badMatch") 
        return 
    } else if (difference <= 4) {
        cell2.classList.add("goodMatch") 
        cell4.classList.add("goodMatch") 
        return 
    } else if (difference > 4) {
        cell2.classList.add("averageMatch") 
        cell4.classList.add("averageMatch") 
        return
    }
}
