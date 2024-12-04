const Form=document.getElementById("film-form");
const titleElement=document.getElementById("title");
const directorElement=document.getElementById("director");
const urlElement=document.getElementById("url");
const filmList=document.getElementById("films");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const deletFormFull=document.getElementById("clear-films");


//event start
Events();
function Events(){
    Form.addEventListener("submit",addForm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=Storage.getStorage();
        UI.loadFilms(films);
    });
    secondCardBody.addEventListener("click",deletleForm);
    deletFormFull.addEventListener("click",clearFormsAll);

}
function addForm(e){
    const title=titleElement.value.trim();
    const director=directorElement.value.trim();
    const url=urlElement.value.trim();
    if(title==""||director==""||url==""){
        //erorr
        UI.showAlert("Lütfen Değer Girin..!","danger");

    }else{
        const newFilm= new Film(title,director,url);
        UI.adFormUI(newFilm);//add ui
        Storage.addStorage(newFilm);
        UI.showAlert("Değerler Başarıyla Girildi..","success");//alert
    }
    UI.clearİnputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function deletleForm(e){
    if(e.target.id==="delete-film"){
        UI.deletleFormUI(e.target.parentElement.parentElement);
        Storage.deletleFormStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
      
    }

}
function clearFormsAll(){
    UI.clearFormsAllUI();
    Storage.clearFormsAllStorage();
}