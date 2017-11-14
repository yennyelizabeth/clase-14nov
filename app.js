window.addEventListener('load',function(event){
  var title= document.getElementById('title') ;
  var recupera= title.textContent;

  title.addEventListener('mouseover', function(event){
    /*title.textContent = "Chau Mundo"; */
    event.target.textContent= "Chau Mundo";
  })

  title.addEventListener('mouseout', function(event){
    /*title.textContent =recupera;*/
    event.target.textContent=recupera;
  })

  var img = document.getElementById('img');
  img.addEventListener('mouseover', function(event){
    img.src = '2.png';
  })

  var img = document.getElementById('img');
  img.addEventListener('mouseout', function(event){
    img.src = '1.png';
  })


});
