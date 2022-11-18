
function adicionar(){
const input = document.querySelector("#add").value;
const ul = document.querySelector("ul");
var li = document.createElement('li');

    li.innerHTML = input;
   
    var deletar = document.createElement('button');
    deletar.setAttribute("class", "fa-solid fa-delete-left");

    deletar.addEventListener("click", function(){
        li.remove();
        deletar.remove();
        editar.remove();
    })
    
    var editar = document.createElement('button');
    editar.setAttribute("class", "fa-solid fa-pen-to-square");

      editar.addEventListener("click", ()=>{
        let atualizarInput = li.innerHTML;
        let atualizar = document.getElementById("edit").value = atualizarInput
      })



    ul.appendChild(li)
    ul.appendChild(deletar)
    ul.appendChild(editar)

}


