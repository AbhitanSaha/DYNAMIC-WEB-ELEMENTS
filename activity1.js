score=0;
function Update(){
    score=score+1;
    document.getElementById("scoree").innerHTML="Score:"+score;
}
function Save(){
    localStorage.setItem("score",score);
}
function Next(){
    window.location="activity_2.html";
}