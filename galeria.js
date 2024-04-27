var miniatura = document.getElementsByClassName("miniatura")[0];
var fullsize = document.getElementsByClassName("fullsize")[0];

/*
o comando abaixo faz uma contagem de 1 a 5 e incrementa de um em um. dentro corpo do for é chamado a DIV miniatura e inserimos nela 
um comando html para exibição de iagens a este comando é repetido tantas vezes que é pedido no comando FOR. quandp ha a contagem o nome
da foto é incrementado com o número da variavel I. fazendo uma contagem de 1 até 5 e exibir as imagens de FOTO1 até FOTO5 dentro da DIV miniatura.
*/
for( var i = 1 ; i <= 5 ; i++){
    miniatura.innerHTML+="<img src=img/foto"+i+".jpg onclick=abrir("+i+")>";

}
/*
a função ABRIR é chamada todas as vezes que uma foto miniatura é clicada.
quando a miniatura é clicada, ela dispara um evento chamado ONCLICK e chama a função ABRIR passando por parâmetro (argumento) um numero, que é a posição da foto.
Assim, a função ABRIR recebe o numero passado e armazena na variavel P. Está variavel é USADA para formar o nome da foto
que será carregada na DIV fullsize como vemos abaixo.
*/
function abrir (p){
fullsize.innerHTML='<img src=img/foto'+(p)+'.jpg>';
}

// document.getElementsByTagName('img')[0].onclick = function(){      
//     fullsize.innerHTML='<img src=img/foto1.jpg>';
//

// document.getElementsByTagName('img')[1].onclick = function(){      
//     fullsize.innerHTML='<img src=img/foto2.jpg>';
// }

// document.getElementsByTagName('img')[2].onclick = function(){      
//     fullsize.innerHTML='<img src=img/foto3.jpg>';
// }

// document.getElementsByTagName('img')[3].onclick = function(){      
//     fullsize.innerHTML='<img src=img/foto4.jpg>';
// }

// document.getElementsByTagName('img')[4].onclick = function(){      
//     fullsize.innerHTML='<img src=img/foto5.jpg>';
// }


