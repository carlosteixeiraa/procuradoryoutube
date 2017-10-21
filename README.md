# procuradoryoutube
Um procurador de videos do youtube em node.js, dá titulo, descrição, canal e link do video.

### Como fazer download?
Para fazer download do repositorio do procuradoryoutube basta fazer,

```
git clone https://github.com/carlosteixeiraa/procuradoryoutube
```

### Como instalar?
Para instalar basta entrar no directorio pelo cmd/terminal e fazer,
```
npm install
```
### O que fazer antes de executar o procurador?
Para o procurador funcionar é necessario obter uma <a href="https://console.developers.google.com/apis/credentials">key de desenvolvedor do google</a> e depois mudar na seguinta linha,
```
var pkey = 'A SUA KEY DE DESENVOLVEDOR DO GOOGLE!!';
```

### Como mudar o que procurar e a quantidade de resultados que aparece!
Para mudar o que procurar basta mudar na seguinte linha e mudar onde diz 'Reggae',
```
var procuraroq = 'Reggae';
```
Para mudar a quantidade de resultados basta mudar na seguinte linha e mudar onde diz 3,
```
var nresultados = 3;
```

### Como executar o procurador?
Para executar o procurador basta entrar no directorio pelo cmd/terminal e fazer,
```
npm start ou node app.js
```
