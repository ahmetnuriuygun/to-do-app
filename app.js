

const listUl= document.querySelector("#todo-ul");
const toDoInput = document.querySelector("#todo-input");
const toDoButton = document.querySelector("#todo-button")
//! I assign the input box,list variables and 'add' button to a variable.I also give a "counter" variable to use later in my code for to lenght of completed. 
let liste = []
toDoButton.addEventListener("click", () =>{
    if(!toDoInput.value){
        alert("Please enter a to do")
    }else{
        liste.push(toDoInput.value);
        console.log(liste);
        showList();
    };
});

const showList=()=>{
    {
        listUl.innerHTML += `
    <li>
        <i class="fa-regular fa-circle-check fa-lg"></i>
        <p class="toDoText">${liste}</p>
        <i class="fa fa-trash fa-lg"></i>
    </li>`;
    };

    deletedIcon();
    checkedIcon();
    
    toDoInput.value = "";
    toDoInput.focus();
};


const deletedIcon = () =>{
    const deleted = document.querySelectorAll(".fa-trash");
    deleted.forEach((del)=>{del.onclick=()=>{
        liste.splice(del,1);
        del.parentNode.remove();
        console.log(liste);
        
    };});
};

const checkedIcon = ()=>{
const check = document.querySelectorAll(".fa-circle-check");
check.forEach((check) => {
    check.onclick=()=>{
        check.parentNode.classList.toggle("checked"); 
    };
    });
};



