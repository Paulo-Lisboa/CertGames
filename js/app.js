function alterarStatus(id) {
    // Seleciona o elemento do jogo pelo ID
    let jogo = document.getElementById(`game-${id}`);
  
    // Seleciona a imagem do jogo
    let imagem = jogo.querySelector('.dashboard__item__img');
  
    // Seleciona o botão do jogo
    let botao = jogo.querySelector('.dashboard__item__button');
    
    //Seleciona o nome do jogo
    let nomeJogo = jogo.querySelector('.dashboard__item__name');
  
    // Verifica se o jogo está alugado
    let estaAlugado = imagem.classList.contains('dashboard__item__img--rented');
  
    // Atualiza o estado do jogo
    if (estaAlugado) {
      // Devolver o jogo
      if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return'); // Remove a classe do botão "Devolver"
      }
    } else {
      // Alugar o jogo
      if (confirm(`Você tem certeza que deseja alugar o jogo ${nomeJogo.textContent}?`)) {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return'); // Adiciona a classe do botão "Alugar"
      }
    }
  }