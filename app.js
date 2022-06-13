
let counter = 0
const listUl= document.querySelector("#todo-ul");
const toDoInput = document.querySelector("#todo-input");
document.querySelector("#todo-button").onclick=()=>{
    
    //! I assign the input box and list variables to a variable then I wrote the code that add to the list a new 'to do' 

    
    listUl.innerHTML += `
    <li>
    <i class="fa-regular fa-circle-check fa-lg" id="check" ></i>
        <p class="toDoText">${toDoInput.value}</p>
        <i class="fa fa-trash-alt fa-lg"></i>
    </li>`;
    toDoInput.value = "";
    
  
    //! I write the total lenght of li elements
    document.querySelector(".total").textContent= document.querySelectorAll("#todo-ul li").length
} 

listUl.onclick=()=>{
const checkedIcon = document.querySelector(".fa-circle-check")
checkedIcon.onclick=()=>{
    const textStyle = document.querySelector(".toDoText")
    checkedIcon.style.color= "green";
    textStyle.style.textDecoration = "line-through";
    textStyle.style.color = "gray";
    textStyle.style.fontSize = "18px";
    counter++
    document.querySelector(".completed").textContent = counter}

const deletedIcon = document.querySelector(".fa-trash-alt")
deletedIcon.onclick=()=>{
    counter--
    document.querySelector(".completed").textContent = counter
    const listUl= document.querySelector("#todo-ul");
    listUl.parentNode.removeChild(listUl)
}
}

    



