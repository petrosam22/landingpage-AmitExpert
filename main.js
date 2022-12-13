// 
let icon = document.querySelector('#icon');
let ul = document.querySelector('ul');
let body = document.body;
document.addEventListener("DOMContentLoaded" , change)
function change(){
    icon.addEventListener("click" , dam)
    function dam (){
        ul.classList.toggle('show');
    }
}



