
function adicionar(){
const input = document.querySelector("input").value;
const ul = document.querySelector("ul");
var li = document.createElement('li');

    li.innerHTML = input;
   
    var deletar = document.createElement('button');
    deletar.setAttribute("class", "fa-solid fa-delete-left");

    ul.appendChild(li)
    ul.appendChild(deletar)

    deletar.addEventListener("click", function(){
        li.remove();
        deletar.remove();
    })
    
  
}


