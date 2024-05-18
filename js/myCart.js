const inputBox=document.getElementById("cart-title1");
const inputBox2=document.getElementById("cart-price1");
const listContainer =document.getElementById("list-container");

function addItem(){
    if(inputBox.value === ''){
        alert("Your cart is Empty. Please add Item");
                    
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7 ";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();

}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
 
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
