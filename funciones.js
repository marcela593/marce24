//Crear una funcion que imprima los valores de 10000 hasta 100000
var inicio=10000;
var fin=100000;
function valores()
{
    for (let index=inicio;index<=fin;index=index+10000){
document.write(index ,"--");
    }
}

//funcion que imprima en sentido inverso
var fin=100000;
var inicio=10000;
function inverso()
{
    for (let index=fin;index<=inicio;index=index+10000){
document.write(index ,"--");
    }
}



//funcion que imprima 10 veces una frase
var texto="Que lo que amiguitos";
var k=1;
function frase()
{
  while(k<=10)//comprobando
{
document.write(texto,"<br>"); 
k++;   
}

}

//funcion para los dias de la semna
var dias=["Lunes", "Martes", "Miercoles", "Jueves" ," Viernes", "Sabado" , "Domingo"];
     function semanita() 
     {
for (let index=0; index<dias.length; index++ ){
document.write ("<br>" +dias[index]);
}
//llamando la funcion

}

//fin  semanita
