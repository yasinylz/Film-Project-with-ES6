function UI(){

}
UI.prototype.adFormUI=function(newFilm){
    /*<tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> */
  filmList.innerHTML+=`
  
  <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> 
  
  
  `;
}
UI.prototype.clearİnputs=function(element1,element2,element3){

    element1.value="";
    element2.value="";
    element3.value="";
}
UI.prototype.showAlert=function(message,type){

    /*
    
    <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
    
    */
const div=document.createElement("div");
div.className=`alert alert-${type}`;
div.textContent=message;

firstCardBody.appendChild(div);
setTimeout(function(){
    div.remove();
},1000);


}
UI.prototype.loadFilms=function(films){
  films.forEach(function(film){
    filmList.innerHTML+=`
    
    <tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> 
  
    
    
    `;
  });

}
UI.prototype.deletleFormUI=function(element){
  element.remove()
}
UI.prototype.clearFormsAllUI=function(){
  while(filmList.firstElementChild!==null){//olduğu sürece 
    filmList.firstElementChild.remove();

  }
}