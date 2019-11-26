# graphjs
A pure js plugin for make charts

# Utilização básica

Para a utilização do plugin deve-se fazer a importação do arquivo contendo o código <i>javascript</i> <b><i>graph.js</i></b> no <code> head </code> de sua aplicação.

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
  var my_graph = new Graph('my_canvas');   //inicialização da variável
  
  my_graph.load([{                        //carrega valores ao gráfico
      cor: "#F00",                        //cor: opcional
      nome: "Teste",                      //nome: opicional
      valor: 25,                          //valor: opcional
  },
  {
      nome: "Teste 2",                    //carrega elemento somente com nome
  },{}]);                                 //carrega elemento vazio
  
  my_graph.pizza()                        //define tipo do gráfico como PIZZA
  my_graph.draw()                         //desenha gráfico
</script>
```
Este simples código mostrará algo como:

<img src="https://raw.githubusercontent.com/Luan-Michel/graphjs/master/img/pizza_chart.png"></img>

Note que as fatias variam de acordo com que a página é atualizada, isso decorre das fatias que não tiveram valores definidos, logo, para elas é definido um valor aleatório.
