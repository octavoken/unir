const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(menuBtn)

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')  && e.target != menu && e.target != menuBtn    ){
      
        menu.classList.toggle("spread")
        }
})