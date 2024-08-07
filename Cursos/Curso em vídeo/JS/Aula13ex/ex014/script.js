function contar(){
    let inicio = document.getElementById('txti') ///omoe pegar valores de um input através do ID 
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
       //alert('ERRO.... PREEENCHA TODOS OS CAMPOS')
       res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando... '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <=0){
            alert('Passo Inválido! Considerando PASSO 1')
            P = 1
        }



        if (i < f ){
            //Contagem crescente
            for (let c =i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }else{
            //Contagem regressiva
            for (let c =i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}