var numeroAleatorio = parseInt(Math.random()* 10)+1;
console.log(numeroAleatorio);
var num;
while(numeroAleatorio != num){
    num = prompt("Adivina el número que hemos escogido aleatoriamente: ");
    if (numeroAleatorio == num){
      console.log("Número igual");
    }else{
      console.log("Sigue intentando");
    }
}