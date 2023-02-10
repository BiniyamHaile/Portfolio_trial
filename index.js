const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

function pageTransitions(){
    for(let i  = 0 ; i < sectBtn.length ; i++){
       
        sectBtn[i].addEventListener("click" , function(){
            let allBtns = document.querySelectorAll(".active-btn");
            allBtns[0].className = allBtns[0].className.replace("active-btn" , "");
            this.classList.add("active-btn");
        
        })
    }


    allSections[0 ].addEventListener("click" , (ev)=>{
        const id = ev.target.dataset.id;
        if(id){
            sectBtns.forEach((section)=>{
                section.classList.remove("active");
                ev.target.classList.add("active");
            })

            sections.forEach((section)=>{
                section.classList.remove("active");

            })

            const element = document.getElementById(id);
            element.classList.add("active");

            
            
            
            
        }
    })
}


pageTransitions();




const soon = document.getElementById("coming-soon");
const pops = document.querySelectorAll("#pop-ups");
const btns = document.getElementById("coming-btn");

btns.addEventListener("click " , myFunction);

function myFunction(){

    soon.style.opacity = "1";
    pops.forEach((pop_up)=>{
        pop_up.style.opacity = "0";
    })



}

