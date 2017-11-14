window.addEventListener('load', function(event){
  var button = document.getElementById('button');

  button.addEventListener('click', function(event){
    var textarea = document.getElementById('textarea');
    var textAreaText = textarea.value;
    alert(textAreaText);

    /* Agregando elementos */



  /*  var sectionDivs = document.querySelector("section"); /* selecciono section*/
  /*  var div = document.createElement("div"); /*creo div*/
  /*  sectionDivs.appendChild(div); /* lo agrego como hijo */

  var sectionDivs = document.querySelector("section"); /* selecciono section*/
  var p = document.createElement("p"); /*creo div*/
  var text =document.createTextNode(textAreaText);
  p.appendChild(text);
  sectionDivs.appendChild(p); /* lo agrego como hijo */





    /*
    var divSet = document.getElementById('div');
    var pElement = document.createElement('p');
    divSet.appendChild(pElement);

    var pE= document.getElementById('p');
    pE.textContent =textareaText ;*/

    /*var contenido = document.querySelectorAll("div"); /* lista coleccion de nodos*/
    /*  var cantidad = document.length; /* le da el nro */
    /*var dato = document.createTextNode(cantidad);
    div.appendChild(dato);*/
  }) ;

});
