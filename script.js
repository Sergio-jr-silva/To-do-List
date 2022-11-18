
function add(){
const input = document.querySelector("#add").value;
const ul = document.querySelector("ul");
var li = document.createElement('li');
   li.innerHTML  = input;
   
    var deletar = document.createElement('button');
    deletar.setAttribute("class", "fa-solid fa-delete-left");

    deletar.addEventListener("click", function(){
        li.remove();
        deletar.remove();
        editar.remove();
    })
    
    var editar = document.createElement('button');
    editar.setAttribute("class", "fa-solid fa-pen-to-square");

  editar.addEventListener('click', ()=>{
    var mudarText = document.getElementById("edit");
    var btnEdit = document.getElementById("atualizar");
    mudarText.value = li.innerHTML
 
      btnEdit.addEventListener("click", ()=>{
        var list = {  novoValor: li.innerHTML }
        console.log(list)


      }) 
    
  })
   


    ul.appendChild(li)
    ul.appendChild(deletar)
    ul.appendChild(editar)

}



function Editar(){
  var mudarText = document.getElementById("edit");
  var btnEdit = document.getElementById("atualizar");

  btnEdit.addEventListener('click', (e)=>{
      var novoInput = document.getElementById('edicao').value;
      console.log(novoInput)
  }

)}




// SELECTS

const select = document.querySelector("#estado");
const section = document.querySelector("#section")
function seleciona(){
  if(select.value == 1){
  var criarSelect = document.createElement('select');
section.appendChild(criarSelect);

var criarOpt = document.createElement('option');
    criarOpt.innerHTML = 'Escolha uma cidade';
  criarSelect.appendChild(criarOpt);


  var criarOpt = document.createElement('option');
    criarOpt.innerHTML = 'Recife';
  criarSelect.appendChild(criarOpt);



var criarOpt = document.createElement('option');
    criarOpt.innerHTML = 'Olinda';
  criarSelect.appendChild(criarOpt);



var criarOpt = document.createElement('option');
    criarOpt.innerHTML = 'Jaboatão dos guararapes';
  criarSelect.appendChild(criarOpt);



var criarOpt = document.createElement('option');
    criarOpt.innerHTML = 'Caruaru';
  criarSelect.appendChild(criarOpt);

  }

  if(select.value == 2){
    var criarSelect = document.createElement('select');
  section.appendChild(criarSelect);
  
  var criarOpt = document.createElement('option');
      criarOpt.innerHTML = 'Escolha uma cidade';
    criarSelect.appendChild(criarOpt);
  
  
    var criarOpt = document.createElement('option');
      criarOpt.innerHTML = 'Juazeiro';
    criarSelect.appendChild(criarOpt);
  
  
  
  var criarOpt = document.createElement('option');
      criarOpt.innerHTML = 'Vitoria da conquista';
    criarSelect.appendChild(criarOpt);
  
  
  
  var criarOpt = document.createElement('option');
      criarOpt.innerHTML = 'salvador';
    criarSelect.appendChild(criarOpt);
  
  
  
  var criarOpt = document.createElement('option');
      criarOpt.innerHTML = 'Feira de Santana';
    criarSelect.appendChild(criarOpt);
  
    }



    if(select.value == 3){
      var criarSelect = document.createElement('select');
    section.appendChild(criarSelect);
    
    var criarOpt = document.createElement('option');
        criarOpt.innerHTML = 'Escolha uma cidade';
      criarSelect.appendChild(criarOpt);
    
    
      var criarOpt = document.createElement('option');
        criarOpt.innerHTML = 'Fortaleza';
      criarSelect.appendChild(criarOpt);
    
    
    
    var criarOpt = document.createElement('option');
        criarOpt.innerHTML = 'Acaraú';
      criarSelect.appendChild(criarOpt);
    
    
    
    var criarOpt = document.createElement('option');
        criarOpt.innerHTML = 'Sobral';
      criarSelect.appendChild(criarOpt);
    
    
    
    var criarOpt = document.createElement('option');
        criarOpt.innerHTML = 'Acarati';
      criarSelect.appendChild(criarOpt);
    
      }
       
}
