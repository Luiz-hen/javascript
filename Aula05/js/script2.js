var opcao = "";
opcao = prompt("Digite: \n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\nS-Para sair")
while (opcao.toUpperCase() != "S"){

    if(opcao < 1 || opcao > 4){
        alert("Opção Invalida")
    }
    else{

    var n1 = prompt("Digite um Número")
    var n2 = prompt("Digite outro número")

    //converter n1 e n2 para numeros de ponto flutuante(Float)
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    
    var resultado = 0;

    if(opcao == "1"){
        resultado = n1 + n2;
    }
    else if(opcao == "2"){
        resultado = n1 - n2;
    }
    else if(opcao == "3"){
        resultado = n1 * n2;
    }
    else if(opcao == "4"){
        resultado == n1 / n2;
    }
    else{
        resultado = "Opção invalida";
    }
    alert(resultado);
}
    opcao = prompt("Digite : \n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Divdir\nS-Para sair")
}