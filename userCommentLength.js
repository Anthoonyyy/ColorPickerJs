let userComment = document.querySelector("#userComment");


let userCommentCounter = document.querySelector("#userCommentCounter");

function  updateCommentCounter(){
    let userCommentLength = userComment.value.length;
    userCommentCounter.textContent = userCommentLength;
}

userComment.addEventListener("input", updateCommentCounter);