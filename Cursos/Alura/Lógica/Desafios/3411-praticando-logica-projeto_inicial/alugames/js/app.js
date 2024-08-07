function alterarStatus(id){
    let gameclicado = document.getElementById(`game-${id}`);
    let imagem = gameclicado.querySelector('.dashboard__item__img'); // poderia ser tbm get document.getElementById
    let botao = gameclicado.querySelector('.dashboard__item__button')
    let nomeJogo = gameclicado.querySelector('.dashboard__item__name')

    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML='Alugar';
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML= 'Devolver';
    }
}