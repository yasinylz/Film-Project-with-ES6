class Storage{
    static getStorage(){
        let films;
        if(localStorage.getItem("films")==null){
            films=[];
        }else{
            films=JSON.parse(localStorage.getItem("films"));
            
        }
        return films;
    }
   static addStorage(newFilm){
        let films=this.getStorage();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
    
    }
    static deletleFormStorage(element){
        let films=this.getStorage();
        films.splice(films.indexOf(element,1));
        localStorage.setItem("films",JSON.stringify(films));
    }
   static clearFormsAllStorage(){
        localStorage.removeItem("films");
    }

}
