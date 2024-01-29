//seleção dos documentos

const display= document.querySelector("#displayinput");
const botaoigual= document.querySelector(".igual");
const BotaoPonto= document.querySelector(".ponto");
const BotoesNumeros= document.querySelectorAll(".num");
const botoesOperadores= document.querySelectorAll(".operador");

//variaveis globais
let operacaoAtual="";
let operador = null;
let valorAnterior ="";
let calculando = false;

//funções

function atualizaDisplay(){
    display.value=operacaoAtual;
}

function isereNumero(evento){
    if(calculando){
        operacaoAtual=evento.target.textContent;
        calculando=false;
    }
    else{
        operacaoAtual += evento.target.textContent;
    }
    atualizaDisplay();
}
function inserePonto(){
    if(operacaoAtual.indexOf(".")=== -1){
        operacaoAtual+= ".";
        atualizaDisplay();
    }
}

function insereOperador(evento){
    if(operacaoAtual!==""){
        if(!calculando){
            if(operador !== null){
                calcula();
            }
            valorAnterior=operacaoAtual;
            operacaoAtual="";
        }
        operador = evento.target.textContent;
    }
}

function calcula(){
    let resultado = null;
    const operandoAnterior = parseFloat(valorAnterior)
    const operandoAtual=parseFloat(operacaoAtual)

    switch(operador){
        case "+":
            resultado=operandoAnterior+operandoAtual
            break;

            case "-":
            resultado=operandoAnterior-operandoAtual
            break;

            case "*":
            resultado=operandoAnterior*operandoAtual
            break;

            case "/":
            resultado=operandoAnterior/operandoAtual
            break;
    }
    operacaoAtual = String(resultado);
    valorAnterior=operacaoAtual;
    calculando=true;
    atualizaDisplay()
}

//eventos
BotaoPonto.addEventListener("click",inserePonto);
BotoesNumeros.forEach((botao)=>botao.addEventListener("click",isereNumero));
botoesOperadores.forEach((botao)=> botao.addEventListener("click",insereOperador));
botaoigual.addEventListener("click",calcula);