let header = document.querySelector('h1');
header.innerHTML = 'Hora do Desafio';



function VerificarClick(){
    console.log('O botão foi clicado')
}

function AmoJs(){
    alert('Eu amo JS')
}

function exibirPromt(){
    let nomeDaCidade = prompt('Digite o nome de uma cidade do brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function somandoDoisNumeros(){
    let n1 = parseInt(prompt("Insira um número"))
    let n2 = parseInt(prompt("Agora insira outro número"))
    // while (n1 < 0 || isNaN(n1) || n2 < 0 || isNaN(n2)){
    //     alert ("Valor Inválido")
    //     n1 = parseInt(prompt("Por favor, digite novamente um valor válido para N1: "))
    //     n2 = parseInt(prompt("Por favor, digite novamente um valor válido para N2: "))
    //     }
        let s = n1 + n2;        
        alert (`A soma entre ${n1} e ${n2} é igual a ${s}`);
}