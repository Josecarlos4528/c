score=0;
function actualizar(){
    score=score+1;
    document.getElementById("score").innerHTML="puntaje: "+score;
}
function salvar(){
    localStorage.setItem("score",score);
}
function siguiente(){
    window.location="activity_2.html"
}