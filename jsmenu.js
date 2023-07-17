const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
     nav.classList.add("visible");
 })

 cerrar.addEventListener("click", () => {
     nav.classList.remove("visible");
 })

// Aperturas sub menus 

 let listElements = document.querySelectorAll('.list__button--click');
 listElements.forEach(listElement =>{
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');

        let height=0;
        let menu= listElement.nextElementSibling;
        if (menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;
    })
 })
