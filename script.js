
//criando uma variavel que inicia com o valor 1 
let count = 1;

//pegando o elemento html cujo o id é radio1 e colocando ele como checado
document.getElementById("radio1").checked = true;

//a função setInterval executa um bloco de código a cada 2 mil milisegundos chamando a função nextImage()
setInterval(function(){
    nextImage();
}, 2000)

//essa função adiciona mais 1 no count (variavel iniciada na linha 3) e checa de acordo o valor atual do count 
/**
 * Exemplo se for count = 2 ele vai marcar o elemento html que tenha o id radio2 como checado e assim sucessivamente 
 */
function nextImage(){
    count++;
    // verifica se count é maior que 4 se for volta para 
    if(count>4){
        count = 1
    }

    //marcando o elemento
    document.getElementById("radio"+count). checked = true;

}
