# graphjs
A pure js plugin for make charts

# Introdução

Este plugin tem por objetivo facilitar o uso de gráficos em páginas web, utilizando apenas JavaScript. Ele dispõe de gráficos do tipo Pizza, Rosca, Pontos(WIP), Barras e Linha(WIP).

# Utilização básica

Para a utilização do plugin deve-se fazer a importação do arquivo contendo o código _javascript_ **_graph.js_** no `head` de sua aplicação. Onde o _plugin_path_ é a pasta do plugin.

```html 
<script type="text/javascript" src="plugin_path/src/graph.js"></script>
```

Após a inserção do código js em sua página, é necessária a adição de um campo <i>canvas</i>, na seguinte forma:

```html
<canvas id="my_canvas" width="300" height="300"></canvas>
```

Então em sua aplicação na seção javascript deve-se fazer a chamada da biblioteca:

```html
<script type="text/javascript">
  var my_graph = new Graph('my_canvas');  //inicialização da variável
  
  my_graph.load({
    elements: [{                          //carrega valores ao gráfico
      cor: "#F00",                        //cor: opcional
      nome: "Teste",                      //nome: opicional
      valor: 25,                          //valor: opcional
    },
    {
      nome: "Teste 2",                    //carrega elemento somente com nome
    },{}]});                              //carrega elemento vazio
  
  my_graph.pizza()                        //define tipo do gráfico como PIZZA
  my_graph.draw()                         //desenha gráfico
</script>
```
Este simples código mostrará algo como:

<img src="https://raw.githubusercontent.com/Luan-Michel/graphjs/master/img/pizza_chart.png"></img>

> _Note que: O tamanho e cores das fatias podem variar de acordo com que a página é atualizada, isso decorre das fatias que não tiveram valores definidos, logo, para elas é definido uma definição aleatória, exceto para aquelas que tiveram suas definições estritamente definidas._

# Anatomia do Plugin

O plugin dispõe de diversas funções de acordo com o gráfico desejado. A tabela a seguir demonstra as funções disponíveis no plugin:

|Função|Parâmetros|Descrição|
|------|:--------:|:--------|
|Graph()|    -    |Inicia a instânciação do gráfico|
|my_graph.**load(_object_)**|Objeto de definição, contendo os seguintes atributos { **background**: _cor de fundo_, **elements**: _vetor de elementos_}|Carrega os valores ao gráfico|
|my_graph.**pizza()**| - |Define o modo do gráfico para gráfico do tipo pizza|
|my_graph.**rosca()**| - |Define o modo do gráfico para gráfico do tipo rosca|
|my_graph.**linha()**| - |Define o modo do gráfico para gráfico do tipo linha|
|my_graph.**pontos()**| - |Define o modo do gráfico para gráfico do tipo pontos|
|my_graph.**barra()**| - |Define o modo do gráfico para gráfico do tipo barra|
|my_graph.**setAnotation(_bool_)**| _true_ ou _false_ |Usado somente no grafico do tipo **rosca**, define se é mostrado o rótulo no centro do gráfico, quando o mouse estiver sobre a porção|
|my_graph.**getType()**| - |Retorna o tipo do gráfico|
|my_graph.**getValues()**| - |Retorna um vetor com os elementos do gráfico|

## Anatomia do Carregamento

O objeto enviado à função _load_ deve obedecer a seguinte anatomia:

```javascript
var obj = {
  background: "#000000",       //opcional, default: white
  elements: [
    {
      cor: "#F00",             //opcional, default: aleatória
      nome: "Teste",           //opcional, defaltt: Item x, onde x é o índice no vetor de elementos
      valor: 25,               //opcional, defaltt: random de 0 a 100
    },
    ...                        //outros elementos
  ]
}
```

# Gráficos

## Pizza

<img src="https://raw.githubusercontent.com/Luan-Michel/graphjs/master/img/pizza_chart.png"></img>

## Rosca

<img src="https://raw.githubusercontent.com/Luan-Michel/graphjs/master/img/donut_chart.png"></img>

## Barra

<img src="https://raw.githubusercontent.com/Luan-Michel/graphjs/master/img/bar_graph.png"></img>

## Linha

<img src="https://raw.githubusercontent.com/Luan-Michel/graphjs/master/img/line_graph.png"></img>

## Pontos

<img src="https://raw.githubusercontent.com/Luan-Michel/graphjs/master/img/point_graph.png"></img>

