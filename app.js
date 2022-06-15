let liste = [];

let total=0;

let completed=0;

const listeInput= document.querySelector("#todo-input");
const listeUl= document.querySelector("#todo-ul");
const listeButon= document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam")

listeButon.onclick=()=>{
    if(!listeInput.value){
        alert("Please enter a value")
    }else if(liste.includes(listeInput.value)){
        return;
    }else{
        liste.push(listeInput.value)
        total+=1
    }
    
showListe();
}

const showListe=()=>{
    listeUl.innerHTML+=`
    <li>
    <i class="fa fa-check fa-lg"></i>
    <p>${listeInput.value}</p>
    <i class="fa fa-trash fa-lg"></i>`

    toplam.textContent= total;
    
    listeInput.value="";
    listeInput.focus();



    createSilButon()
    createCheckButon()
    
}

const createSilButon=()=>{
    const deleteButon = document.querySelectorAll(".fa-trash");
    for(let i in deleteButon){
        deleteButon[i].onclick=()=>{
            liste.splice(i,1)
            deleteButon[i].parentElement.remove()
            total=total-1;
            toplam.textContent=total;
            if(completed>0 && deleteButon[i].parentElement.className.includes("checked")){
                completed=completed-1
                document.querySelector("#tamamlanan").textContent=completed; 
            }
        }
    }
}

const createCheckButon=()=>{
    document.querySelectorAll(".fa-check").forEach((check)=>{
        check.onclick=()=>{
            check.parentElement.classList.toggle("checked")
            if(check.parentElement.className.includes("checked")){
                completed=completed+1;
            }else{
                completed=completed-1
            }
            document.querySelector("#tamamlanan").textContent=completed;
        }
    })
}