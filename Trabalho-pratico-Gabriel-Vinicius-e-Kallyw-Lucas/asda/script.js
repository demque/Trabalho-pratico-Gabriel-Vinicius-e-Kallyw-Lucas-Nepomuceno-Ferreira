let frases = [
    'Não faça aos outros o que não quer que façam a você. - Confúcio',
    'O homem é a medida de todas as coisas. - Protágoras',
    'Penso, logo existo. - René Descartes',
    'O que não provoca minha morte faz com que eu fique mais forte. - Friedrich Nietzsche',
    'Todos estamos matriculados na escola da vida, onde o mestre é o tempo. - Cora Coralina',
    'Não se pode pisar duas vezes no mesmo rio. - Heráclito',
     'A vida é um processo constante de morrer. - Arthur Schopenhauer',
     'Amanha é um dia melhor que hoje.','Nada pode ser pior.'       
  ];
  
  function gerarFrase(){
      let frase = frases[
        Math.floor(Math.random() *       
        frases.length)
      ]
      
      document.querySelector('#frase-gerada').textContent=frase;
  }