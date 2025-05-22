# Projeto de Integração JS + HTML + CSS

## Por que esse projeto?

Buscando aperfeiçoar o conhecimento em HMTL, JavaScript e CSS, esse projeto foi pensado pelo professor Leonardo Leitão. Realizei o projeto acompanhando calmamente a codificação, além disso, fiz algumas costumizações simples para deixar Paulavél (rsrsrs). 

## Como é feito a integração entre HTML e CSS?

Utilizei a atribuição link, e pus o caminho do CSS no href, nesse estilo:

~~~html
<link rel="stylesheet" href="./css/estilo.css">
~~~

Além disso, inseri entre os head's do meu documento index.html, conforme abaixo:
~~~html
<html>
    <head>
    <link rel="stylesheet" href="./css/estilo.css">
    </head>
    <body>
    </body>
</html>
~~~

No exemplo abaixo foi chamado um pseudo-elemento, onde realizei atribuição de cores, formato e até mesmo a própria elaboração: 

~~~CSS
.arvore::before {
    content: "";
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: green;
}
~~~

## Fontes no CSS:

Durante a elaboração do pavimento e dos botões do térreo até o sexto andar, aprendi a utilizar diferentes fontes. Para isso, recorri ao site [Google Fonts](https://fonts.google.com/) e busquei uma fonte com aparência o mais analógica possível.


O site fornece o link de importação da fonte, que deve ser inserido no arquivo CSS, conforme demonstrado abaixo.

~~~CSS
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
~~~

No caso do tamanho da fonte, foi necessário especificá-lo na classe ou subclasse apropriada. No exemplo abaixo, essa configuração foi atribuída ao mostrador do térreo, juntamente com as definições de cor, fonte e posição.

~~~CSS
.controles > .mostrador {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #22f522;
    border: 5px solid #666;
    height: 100%;
    width: 200px;
    border-radius: 8px;
    font-size: 2.5rem;
}
~~~