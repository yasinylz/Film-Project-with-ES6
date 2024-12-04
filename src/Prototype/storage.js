function Storage(){

}
Storage.prototype.getStorage=function(){
    let films;
    if(localStorage.getItem("films")==null){
        films=[];
    }else{
        films=JSON.parse(localStorage.getItem("films"));
        
    }
    return films;
}
Storage.prototype.addStorage=function(newFilm){
    let films=this.getStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));

}
Storage.prototype.deletleFormStorage=function(element){
    let films=this.getStorage();
    films.splice(films.indexOf(element,1));
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.clearFormsAllStorage=function(){
    localStorage.removeItem("films")
}