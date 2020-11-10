/**
 * clicar no botao 
 * quando clicar no batao 
 * execultar uma ação
 * duplicar os campos
 * colocar na páginas
 */

 document.querySelector("add-time")
 addEventListener('click', cloneField)

 function cloneField( ) { //duplicando os elementos do bottons +novoHorario
 const newFieldContainer = document.querySelector('.schedule-item').cloneNode( true);//pega todos os campos da class

  //limpar os campos
     const fields = newFieldContainer.querySelectorAll('input');

     fields.forEach( function(fields){
       fields.value = ' '; //pasando vazio para os campos de horas
     })
   
     document.querySelector('#schedule-items').appendChild(newFieldContainer) //add os novos horarios dentro do input certo 
 }
