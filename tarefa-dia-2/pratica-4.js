// m cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e se ele é internacional ou nacional, mas não calcula os impostos. //

let produto_A = {
    nome : "Camiseta",
    valor : 100.00 ,
    internacional : true
} ;
 
let produto_B = {
    nome : "Perfume",
    valor : 200.00,
    internacional : true
} ; 
 let produto_C = {
    nome : "Sandália",
    valor : 120.00,
    internacional : false
 } ;

  if (produto_C.internacional == true) {

    let valorDosImpostos = produto_C.valor*1.2

    console. log (produto_C.nome);
    console. log ("O produto é internacional");
    console. log ("Valor com o imposto R$"+valorDosImpostos, "Reais");

 } else {

    let valorDosImpostos = produto_C.valor*1.12

    console. log (produto_C.nome);
    console. log ("O produto é nacional");
    console. log ("Valor com o imposto R$"+valorDosImpostos, "Reais");

 };

 


 

