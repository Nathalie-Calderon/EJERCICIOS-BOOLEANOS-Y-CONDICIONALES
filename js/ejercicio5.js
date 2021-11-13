let peso = prompt("Escriba su peso actual");
let altura = prompt("Escriba su altura");
let resultado = peso / (altura * altura);


if(resultado < 18.5){
    console.log("Bajó de peso, Felicidades.");
}
else if(resultado <= 24.9){
    console.log("Su peso actual es normal.");
}
else if(resultado <= 29.9){
    console.log("Usted tiene sobrepeso.");
}
else{
    console.log("OJO. CUIDADO, ES USTED OBESO.");
}