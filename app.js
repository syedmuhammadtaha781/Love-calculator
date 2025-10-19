let btn = document.getElementById("btn");
let main = document.querySelector(".container");
var newE =  document.createElement("p");
main.appendChild(newE);
btn.addEventListener("click", ()=>{
    let name1 = document.getElementById("name-1");
    let trimmedname1 = name1.value.trim();
    let name2 = document.getElementById("name-2");
    let trimmedname2 = name2.value.trim();
    newE.style.fontSize = "3em"
    newE.style.color = "aqua";
    let rand = Math.random()*100;
    let randfloor = Math.floor(rand);
    newE.textContent = randfloor + "%";    
    if (trimmedname1 === "" || trimmedname2 === "") {
        newE.textContent = "";
        alert("Make sure you have entered both names");
    }
    name1.value = "";
    name2.value = "";
})