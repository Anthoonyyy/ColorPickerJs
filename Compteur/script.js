
let commentaires = document.querySelector("#commentaires");
let compteurCommentaire = document.querySelector("#compteurCommentaire");

function  updateCommentCounter(){
    let commentairesLength = commentaires.value.length;
    compteurCommentaire.textContent = commentairesLength;
    if(commentairesLength > 150){
        compteurCommentaire.style.color = "red";
        commentaires.style.color = "red";
    }else{
        compteurCommentaire.style.color = "green";
        commentaires.style.color = "green";
    }
}

commentaires.addEventListener("input", updateCommentCounter);