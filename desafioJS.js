// ====================== // ======================

//exercicio 7 

//variavel peso em kg
var peso = 60;
//variavel altura em m
var altura = 1.9;
//variavel imc vazia
var imc = "";
//define funcao para calcular imc com os parametros
//imc = peso /(altura^2) e retorna o valor do imc
function calcImc(peso, altura){
    imc = peso / (altura**2)
    return imc;
}

calcImc(peso, altura);

//se for menor que 18, abaixo do peso
if(imc < 18 ){
    console.log("O resultado do seu IMC foi de " + imc + ". E você está abaixo do peso ideal")
} 
//se for maior que 25, acima do peso
else if(imc > 25){
    console.log("O resultado do seu IMC foi de " + imc + ". E você está acima do peso ideal")
} 
//se nenhuma das 2 condicoes acima forem atendidas, se nao está acima nem abaixo, está no peso ideal)
else {
    console.log("O resultado do seu IMC foi de " + imc + ". E você está no peso ideal")
}

// ====================== // ======================

//exercicio 8

//define variaveis a serem calculadas 
var valor1 = 2;
var valor2 = 4;
var valor3 = 6;

//funcao para calculo de variaveis definidas acima soma tudo e divide por 3
function mediaDef(a,b,c){
    var media1 = (a+b+c)/3;
    //printa resultado
    console.log("media das variaveis = " + media1);
}

//define uma array para calculo de média
var array=[2, 4, 6]
//variavel para armazenar a soma da array
var somaArray = 0

//funcao para calculo de media da array passada acima
function mediaIndef(){

    //percorre toda a array, independente do tamanho, somando todos os valores e armazenando 
    //na variavel somaArray
    for (var i = 0; i<array.length; i++){
        somaArray += array[i];
    }

    //calcula a media dessa variavel baseado no tamanho da array
    var media2 = somaArray/array.length
    //retorno da funcao
    return console.log("media do array = " + media2)
}

//se a array estiver vazia, a funcao nao é iniciada
if (array != [] || array != ''){
    mediaIndef()
}


// ====================== // ======================
//exercicio 9

//define os valores fixos de a e b
var a = 3;
var b = 5;

//iguala a ao valor de b
a = b;

//tira a quantidade a mais do valor de b
b = a-2;

//printa o resultado
console.log("a = " + a)
console.log("b = " + b);

// ====================== // ======================

//exercicio 10 




//exercicio 11

//define valor a ser sacado
var valorSacar = 1250
//define cedula a ser iniciado o processo
var cedula = 100
//define o total de cédulas
var totalCed = 0

//roda o programa enquanto a condicao for verdadeira
while(valorSacar % 10 == 0 ){

    //se o valor a ser sacado for maior ou igual ao valor da cédula definido
    if (valorSacar >= cedula){
        //diminui do valor a ser sacado o valor da cedula
        valorSacar -= cedula;
        //incrementa 1 a quantidade de cedulas
        totalCed += 1;
        //se o valor a ser sacado estiver menor do que o da cedula
    } else {
        //se o valor se cedulas for maior que 1, printa
        if (totalCed > 0) {
            console.log('Total de '+totalCed+' cedulas de R$'+cedula)
            //se o valor da cedula no momento for 100
        } if (cedula == 100) {
            //troca pra 50
            cedula = 50
            //se o valor da cedula no momento for 50
        } else if (cedula == 50){
            //troca pra 20
            cedula = 20
            //se o valor da cedula no momento for 20
        } else if (cedula==20) {
            //troca pra 10
            cedula = 10
        }
        //quando há a troca de cedulas, zera o valor total de cedulas e começa a recontar
        totalCed = 0
        //se o valor a sacar estiver zerado, o programa acaba
        if (valorSacar == 0) {
            break;
        }
    }
} 
//define inicializacao, se o valor nao for multiplo de 10, nao começa
if(valorSacar % 10 != 0 ){
    console.log("O valor precisa ser múltiplo de 10")
}


