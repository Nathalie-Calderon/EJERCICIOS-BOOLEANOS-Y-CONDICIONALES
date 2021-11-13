let numero = parseInt(prompt("Ingrese un numero por favor y veamos si es multiplo de 5:")); //capturamos el valor

     if ( numero > 0 && numero % 5 == 0 ) { //hacemos la comparación
         console.log("Si, el número "+numero+ " es múltiplo de 5"  )
     }else{
       console.log("No, el número "+numero+ " no es múltiplo de 5");

      }