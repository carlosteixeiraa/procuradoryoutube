// Declaração Variaveis
var YouTube = require('youtube-node');
var colors = require('colors');
var procurador = new YouTube();
var pkey = 'A SUA KEY DE DESENVOLVEDOR DO GOOGLE!!';
var nresultados = 3;
var procuraroq = 'Reggae';
var contador;

// Defenir key e começar procura
procurador.setKey(pkey);
procurador.search(procuraroq, nresultados, function(error, result) {
  // Erro
  if (error) {
    console.log('Um erro ocorreu, veja os logs abaixo para mais info.');
    console.log(erro);
  }
  // Procura
  else {
    // Contador
    for (contador = 0; contador < nresultados; contador++) {
    // Resultados
    var resultadojson = JSON.stringify(result, null, nresultados);
    var resultado = result;
    var items = resultado.items;
    var snippet = items[contador].snippet;
    var link = items[contador].id.videoId
    var descricao = snippet.description;
    var titulo = snippet.title;
    var canal = snippet.channelTitle;
    // Logs
    console.log(colors.cyan('%s'), contador + 'º Video'.cyan);
    console.log('');
    console.log('Titulo - '.cyan);
    console.log(titulo);
    console.log('');
    console.log('Descrição -'.cyan);
    console.log(descricao);
    console.log('');
    console.log('Canal -'.cyan);
    console.log(canal);
    console.log('');
    console.log('Link Video -'.cyan);
    console.log('https://www.youtube.com/watch?v=' + link);
    console.log('');
    console.log('---------------------------------'.yellow);
    }
  }
});
