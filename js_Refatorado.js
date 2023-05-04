const play1 = document.getElementById('play1');
const play2 = document.getElementById('play2');
let cont = 0;
let pl1 = [];
let pl2 = [];

const vitoria = [
  ['c1', 'c2', 'c3'],
  ['c4', 'c5', 'c6'],
  ['c7', 'c8', 'c9'],
  ['c1', 'c5', 'c9'],
  ['c3', 'c5', 'c7'],
  ['c1', 'c4', 'c7'],
  ['c2', 'c5', 'c8'],
  ['c3', 'c6', 'c9']
];

function iniciarJogo() {
  if (play1.value !== '' && play2.value !== '') {
    inicio.style.display = 'none';
    jogo.style.display = 'block';
    vezDe = play1.value;
  } else {
    erro.innerHTML = 'Jogadores não definidos';
  }
}

function retornarAoMenu() {
  limparCampoMenu();
  limparCampo();
  fim.style.display = 'none';
  inicio.style.display = 'block';
}

function jogarNovaPartida() {
  limparCampo();
  fim.style.display = 'none';
  jogo.style.display = 'block';
}

function jogar(jogada) {
  msg.innerHTML = '';
  veriJogada(jogada);
  cont++;
}

function limparCampoMenu() {
  erro.innerHTML = '';
  play1.value = '';
  play2.value = '';
}

function limparCampo() {
  vezDe = play1.value;
  cont = 0;
  pl1 = [];
  pl2 = [];
  msg.innerHTML = '';
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`c${i}`).innerHTML = '';
  }
}

function verificarVitoria(jogadasPlay) {
  let v = 0;
  let vv = 0;
  let vt = 0;
  let vo = 0;
  if (jogadasPlay.length >= 3) {
    for (let l = 0; l < 3; l++) {
      for (let c = 0; c < 3; c++) {
        for (let i = 0; i < jogadasPlay.length; i++) {
          if (jogadasPlay[i] === vitoria[l][c]) {
            v++;
          }
          if (jogadasPlay[i] == vitoria[c][l]) {
            vo++;
          }
          if (jogadasPlay[i] == vitoria[l][c]) {
            if (l === 0 && c === 0) {
              vv++;
            } else if (l === 1 && c === 1) {
              vv++;
            } else if (l === 2 && c === 2) {
              vv++;
            }
          }
          if (jogadasPlay[i] === vitoria[l][c]) {
            if (l === 0 && c === 2) {
              vt++;
            } else if (l === 1 && c === 1) {
              vt++;
            } else if (l === 2 && c === 0) {
              vt++;
            }
          }
        }
      }
      if (v === 3) {
        v = 0;
        limparCampo();
        return true;
      }
      if (vo === 3) {
        vo = 0;
        limparCampo();
        return true;
      }
      if (vv === 3) {
        vv = 0;
        limparCampo();
        return true;
      }
      if (vt === 3) {
        vt = 0;
        limparCampo();
        return true;
      }
    }
  }
  return false;
}


function veriJogada(posi)
{
	switch(posi)
	{
		case "c1":
			if (c1.innerHTML === "") {
				if (vezDe === play1.value) {
					c1.innerHTML = "<img src='x.png'/>";
					vezDe = play2.value;
					pl1.push(posi);
					if(Verificavitoria(pl1)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML = play1.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "x.png";
						return true;
					}
				}else{
					c1.innerHTML = "<img src='o.png'/>";
					vezDe = play1.value;
					pl2.push(posi);
					if(Verificavitoria(pl2)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML =play2.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "o.png";
						return true;
					}
				}
				if (cont==8) {
					limpaCampo();
					fim.style.display = 'block';
					jogo.style.display = 'none';
					vc.innerHTML = "Velha!!";
					msgV.innerHTML ="Esplêndidos jogadores deu Velha! Vamos uma Revanche!!";
					imgV.src = "velha.png";
					return false;
				}
				break;
			}else{
				msg.innerHTML = "Escolha outra Posição Essa já foi jogada!!";
			}
		break;
		case "c2":
			if (c2.innerHTML === "") {
				if (vezDe === play1.value) {
					c2.innerHTML = "<img src='x.png'/>";
					vezDe = play2.value;
					pl1.push(posi);
					if(Verificavitoria(pl1)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML = play1.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "x.png";
						return true;
					}
				}else{
					c2.innerHTML = "<img src='o.png'/>";
					vezDe = play1.value;
					pl2.push(posi);
					if(Verificavitoria(pl2)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML =play2.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "o.png";
						return true;
					}
				}
				if (cont==8) {
					limpaCampo();
					fim.style.display = 'block';
					jogo.style.display = 'none';
					vc.innerHTML = "Velha!!";
					msgV.innerHTML ="Esplêndidos jogadores deu Velha! Vamos uma Revanche!!";
					imgV.src = "velha.png";
					return false;
				}
				break;
			}else{
				msg.innerHTML = "Escolha outra Posição Essa já foi jogada!!";
			}
		break;
		case "c3":
			if (c3.innerHTML === "") {
				if (vezDe === play1.value) {
					c3.innerHTML = "<img src='x.png'/>";
					vezDe = play2.value;
					pl1.push(posi);
					if(Verificavitoria(pl1)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML = play1.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "x.png";
						return true;
					}
				}else{
					c3.innerHTML = "<img src='o.png'/>";
					vezDe = play1.value;
					pl2.push(posi);
					if(Verificavitoria(pl2)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML =play2.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "o.png";
						return true;
					}
				}
				if (cont==8) {
					limpaCampo();
					fim.style.display = 'block';
					jogo.style.display = 'none';
					vc.innerHTML = "Velha!!";
					msgV.innerHTML ="Esplêndidos jogadores deu Velha! Vamos uma Revanche!!";
					imgV.src = "velha.png";
					return false;
				}
				break;
			}else{
				msg.innerHTML = "Escolha outra Posição Essa já foi jogada!!";
			}
		break;
		case "c4":
			if (c4.innerHTML === "") {
				if (vezDe === play1.value) {
					c4.innerHTML = "<img src='x.png'/>";
					vezDe = play2.value;
					pl1.push(posi);
					if(Verificavitoria(pl1)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML = play1.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "x.png";
						return true;
					}
				}else{
					c4.innerHTML = "<img src='o.png'/>";
					vezDe = play1.value;
					pl2.push(posi);
					if(Verificavitoria(pl2)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML =play2.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "o.png";
						return true;
					}
				}
				if (cont==8) {
					limpaCampo();
					fim.style.display = 'block';
					jogo.style.display = 'none';
					vc.innerHTML = "Velha!!";
					imgV.src = "velha.png";
					msgV.innerHTML ="Esplêndidos jogadores deu Velha! Vamos uma Revanche!!";
					return false;
				}
				break;
			}else{
				msg.innerHTML = "Escolha outra Posição Essa já foi jogada!!";
			}
		break;
		case "c5":
			if (c5.innerHTML === "") {
				if (vezDe === play1.value) {
					c5.innerHTML = "<img src='x.png'/>";
					vezDe = play2.value;
					pl1.push(posi);
					if(Verificavitoria(pl1)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML = play1.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "x.png";
						return true;
					}
				}else{
					c5.innerHTML = "<img src='o.png'/>";
					vezDe = play1.value;
					pl2.push(posi);
					if(Verificavitoria(pl2)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML =play2.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "o.png";
						return true;
					}
				}
				if (cont==8) {
					limpaCampo();
					fim.style.display = 'block';
					jogo.style.display = 'none';
					vc.innerHTML = "Velha!!";
					imgV.src = "velha.png";
					msgV.innerHTML ="Esplêndidos jogadores deu Velha! Vamos uma Revanche!!";
					return false;
				}
				break;
			}else{
				msg.innerHTML = "Escolha outra Posição Essa já foi jogada!!";
			}
		break;
		case "c6":
			if (c6.innerHTML === "") {
				if (vezDe === play1.value) {
					c6.innerHTML = "<img src='x.png'/>";
					vezDe = play2.value;
					pl1.push(posi);
					if(Verificavitoria(pl1)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML = play1.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "x.png";
						return true;
					}
				}else{
					c6.innerHTML = "<img src='o.png'/>";
					vezDe = play1.value;
					pl2.push(posi);
					if(Verificavitoria(pl2)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML =play2.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "o.png";
						return true;
					}
				}
				if (cont==8) {
					limpaCampo();
					fim.style.display = 'block';
					jogo.style.display = 'none';
					vc.innerHTML = "Velha!!";
					imgV.src = "velha.png";
					msgV.innerHTML ="Esplêndidos jogadores deu Velha! Vamos uma Revanche!!";
					return false;
				}
				break;
			}else{
				msg.innerHTML = "Escolha outra Posição Essa já foi jogada!!";
			}
		break;
		case "c7":
			if (c7.innerHTML === "") {
				if (vezDe === play1.value) {
					c7.innerHTML = "<img src='x.png'/>";
					vezDe = play2.value;
					pl1.push(posi);
					if(Verificavitoria(pl1)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML = play1.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "x.png";
						return true;
					}
				}else{
					c7.innerHTML = "<img src='o.png'/>";
					vezDe = play1.value;
					pl2.push(posi);
					if(Verificavitoria(pl2)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML =play2.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "o.png";
						return true;
					}
				}
				if (cont==8) {
					limpaCampo();
					fim.style.display = 'block';
					jogo.style.display = 'none';
					vc.innerHTML = "Velha!!";
					imgV.src = "velha.png";
					msgV.innerHTML ="Esplêndidos jogadores deu Velha! Vamos uma Revanche!!";
					return false;
				}
				break;
			}else{
				msg.innerHTML = "Escolha outra Posição Essa já foi jogada!!";
			}
		break;
		case "c8":
			if (c8.innerHTML === "") {
				if (vezDe === play1.value) {
					c8.innerHTML = "<img src='x.png'/>";
					vezDe = play2.value;
					pl1.push(posi);
					if(Verificavitoria(pl1)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML = play1.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "x.png";
						return true;
					}
				}else{
					c8.innerHTML = "<img src='o.png'/>";
					vezDe = play1.value;
					pl2.push(posi);
					if(Verificavitoria(pl2)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML =play2.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "o.png";
						return true;
					}
				}
				if (cont==8) {
					limpaCampo();
					fim.style.display = 'block';
					jogo.style.display = 'none';
					vc.innerHTML = "Velha!!";
					imgV.src = "velha.png";
					msgV.innerHTML ="Esplêndidos jogadores deu Velha! Vamos uma Revanche!!";
					return false;
				}
				break;
			}else{
				msg.innerHTML = "Escolha outra Posição Essa já foi jogada!!";
			}
		break;
		case "c9":
			if (c9.innerHTML === "") {
				if (vezDe === play1.value) {
					c9.innerHTML = "<img src='x.png'/>";
					vezDe = play2.value;
					pl1.push(posi);
					if(Verificavitoria(pl1)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML = play1.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "x.png";
						return true;
					}
				}else{
					c9.innerHTML = "<img src='o.png'/>";
					vezDe = play1.value;
					pl2.push(posi);
					if(Verificavitoria(pl2)==true){
						fim.style.display = 'block';
						jogo.style.display = 'none';
						vc.innerHTML =play2.value;
						msgV.innerHTML = "Parabens Jogador Pela vitoria";
						imgV.src = "o.png";
						return true;
					}
				}
				if (cont==8) {
					limpaCampo();
					fim.style.display = 'block';
					jogo.style.display = 'none';
					vc.innerHTML = "Velha!!";
					imgV.src = "velha.png";
					msgV.innerHTML ="Esplêndidos jogadores deu Velha! Vamos uma Revanche!!";
					return false;
				}
				break;
			}else{
				msg.innerHTML = "Escolha outra Posição Essa já foi jogada!!";
			}
		break;
		
		
	}
}
