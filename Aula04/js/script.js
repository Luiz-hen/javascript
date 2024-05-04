var pos = 1;
function esquerda(){
    if(pos <=1){
        pos = 1;
    }
    else{
        pos--;
    }
    pos--;
    document.getElementById("foto").innerHTML="<img src=img/foto"+pos+".jpg>";
}

if(pos >=5){
    pos = 5;
}
else{
    pos++;
}
pos--;
document.getElementById("foto").innerHTML="<img src=img/foto"+pos+".jpg>";


function direita(){
    pos++;
    document.getElementById("foto").innerHTML="<img src=img/foto"+pos+".jpg>";
}