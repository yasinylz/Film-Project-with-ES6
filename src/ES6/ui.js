class UI{
  static adFormUI(newFilm){
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
 static clearİnputs(element1,element2,element3){

    element1.value="";
    element2.value="";
    element3.value="";
}
static showAlert(message,type){

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
static loadFilms(films){
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
static deletleFormUI(element){
  element.remove()
}
static clearFormsAllUI(){
  while(filmList.firstElementChild!==null){//olduğu sürece 
    filmList.firstElementChild.remove();

  }
}


}
