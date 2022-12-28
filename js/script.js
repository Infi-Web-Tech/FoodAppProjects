let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");
menu.onclick=()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
 let search=document.querySelector("#search");
 let search_form=document.querySelector("#search-form");
 search.onclick=()=>{
    search_form.classList.toggle("active"); 
 }
 let close=document.querySelector("#close");
 close.onclick=()=>{
    search_form.classList.remove('active');
 }
 window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    

 }