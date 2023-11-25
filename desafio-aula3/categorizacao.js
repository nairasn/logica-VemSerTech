const parceiros = [
  { parceirosId: 19660156627897, nome: 'Fernanda Santos' },
  { parceirosId: 23998058019370, nome: 'Rafael Souza' },
  { parceirosId: 92291338611, nome: 'Maria Silva' },
  { parceirosId: 55443795656, nome: 'Maria Souza' },
  { parceirosId: 77743761456, nome: 'Ana Costa' },
  { parceirosId: 47202302326, nome: 'Maria Ferreira' },
  { parceirosId: 58017232567, nome: 'Sofia Costa' },
  { parceirosId: 16733009491247, nome: 'Lucas Silva' },
  { parceirosId: 63351859919, nome: 'Rafael Souza' },
  { parceirosId: 84297701780, nome: 'Carlos Oliveira' }
];

const lista_parceiros = {
  PF: [],
  PJ: []
};

parceiros.forEach(parceiro => {
  if (parceiro.parceirosId.toString().length === 11) {
    lista_parceiros.PF.push(parceiro);
  }else if (parceiro.parceirosId.toString().length === 14) {
    lista_parceiros.PJ.push(parceiro);
  }
});

console.log(lista_parceiros);
