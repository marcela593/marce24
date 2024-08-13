//declarando las variables
let servicio, forma, costo;
//capturando datos
alert("servicios disponibles");
servicio=parseInt(prompt("Ingrese \n 1 alisado \n 2-Uñas \n 3-Tintes \n 4-Masajes \n 5-Depilacion"));
while(servicio<1 || servicio>5)
{
servicio=parseInt(prompt("Ingrese correctamente \n 1 alisado \n 2-Uñas \n 3-Tintes \n 4-Masajes \n 5-Depilacion"));
}

forma=parseInt(prompt("Ingresa la forma de pago \n 1-Credito \n 2-Efectivo"));
while(forma<1 || forma>2)
{
forma=parseInt(prompt("Ingresa la forma de pago \n 1-Credito \n 2-Efectivo"));
}

//procesos
switch (servicio)
{
case 1: 
{
    costo=50;
    break;
}

case 2: 
{
    costo=25;
    break;
}
case 3: 
{
    costo=35;
    break;  
}
case 4: 
{
    costo=40;
    break;  
}
case 5: 
{
    costo=25;
    break;  
}
   
}

//Impresion 

if (forma==1 && servicio==1)
{
document.write("Usted se hizo un alisado<br>");
document.write("Usted a cancelado con tarjeta de credito <br>");
document.write("El costo inicial del servicio es de "+ costo+" <br>");
document.write("Se le hara un recargo del 10% + (costo*0.10)+ <br>");
document.write("El pago total sera de " + (costo*1.10)+ "<br>");
}
else if  (forma==1 && servicio==2) 
{
document.write("Usted se hizo un Uñas<br>");
document.write("Usted a cancelado con tarjeta de credito <br>");
document.write("El costo inicial del servicio es de "+ costo+" <br>");
document.write("Se le hara un recargo del 10% + (costo*0.10)+ <br>");
document.write("El pago total sera de " + (costo*1.10)+ "<br>");
}
else if  (forma==1 && servicio==3) 
{
document.write("Usted se hizo un Tintes<br>");
document.write("Usted a cancelado con tarjeta de credito <br>");
document.write("El costo inicial del servicio es de "+ costo+" <br>");
document.write("Se le hara un recargo del 10% + (costo*0.10)+ <br>");
document.write("El pago total sera de " + (costo*1.10)+ "<br>");
}
else if  (forma==1 && servicio==4) 
{
document.write("Usted se hizo un Masajes<br>");
document.write("Usted a cancelado con tarjeta de credito <br>");
document.write("El costo inicial del servicio es de "+ costo+" <br>");
document.write("Se le hara un recargo del 10% + (costo*0.10)+ <br>");
document.write("El pago total sera de " + (costo*1.10)+ "<br>");
}
else if  (forma==1 && servicio==5) 
{
document.write("Usted se hizo un Depilacion<br>");
document.write("Usted a cancelado con tarjeta de credito <br>");
document.write("El costo inicial del servicio es de "+ costo+" <br>");
document.write("Se le hara un recargo del 10% + (costo*0.10)+ <br>");
document.write("El pago total sera de " + (costo*1.10)+ "<br>");
        }
else if  (forma==2 && servicio==1) 
{
document.write("Usted se hizo un alisados<br>");
document.write("El pago total sera de " + (costo));
}
else if  (forma==2 && servicio==2) 
{
document.write("Usted se hizo un Uñas<br>");
document.write("El pago total sera de " + (costo));
}
else if  (forma==2 && servicio==3) 
{
document.write("Usted se hizo un Tintes<br>");
document.write("El pago total sera de " + (costo));
}
else if  (forma==2 && servicio==4) 
{
document.write("Usted se hizo un Masaje <br>");
document.write("El pago total sera de " + (costo));
}
else if  (forma==2 && servicio==5) 
{
document.write("Usted se hizo un Depilacion<br>");
document.write("El pago total sera de " + (costo));
}