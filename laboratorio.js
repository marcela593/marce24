let Masculino, Femenino, Edad, Salario;
alert("Opciones");
 servicio=parseInt(prompt("Cual es su sexo \n1-Masculino \n2-Femenino"));
 servicio=parseInt(prompt("Posee trabajo \n1-SI \n2-NO"));
 servicio=parseInt(prompt("Cual es su sueldo \n1-600 \n2-700 \n3-900 \n4-2000 \n5-00000"));
 servicio=parseInt(prompt("Cual es su edad"));

 while(Opciones<1 || Opciones>4)
{
 Opciones=parseInt(prompt("Ingrese \n1-Masculino \n2-Femenino \n3-Edad \n4-Salario"));
};

forma=parseInt(prompt("Ingrese \n1-Masculino \n2-Femenino \n3-Edad \n4-Salario"));
while(forma<1 || forma>2)
 {
     forma=parseInt(prompt("Ingrese la forma de salida \n 1-yes \n2-no"));
 }

         //procesos
         switch(servicio){
             case 1:
                 Masculino++;
                 break;
                 
             case 2:
                 Femenino++;
                 break; 
              
             case 3:
                 Edad=0;
                 break;  

            case 3:
                 Salario=2000;
                 break;       
                 
         };

         //impresion
         
         if(forma==1 && servicio==1)
         {
             document.write ("Usted es sexo Masculino<br>");
             document.write  ("Usted SI trabaja<br>");
             document.write  ("Usted NO tranaja<br>");
             document.write  ("Su sueldo es"+Salario+"<br>");  
             document.write ("Su edad es"+(Edad)+"<br>"); 
             }
             else if(forma==2 && servicio==1){
             document.write ("Usted es sexo Femenino<br>");
             document.write  ("Usted SI trabaja<br>");
             document.write  ("Usted NO tranaja<br>");
             document.write  ("Su salario es"+Salario+"<br>");  
             document.write ("Su edad es"+(Edad)+"<br>"); 
             }
             
        var edades =[18, 20, 35, 40];
        var masculino=0, femenino=0;
        var edades=0, salario=0;
        for(let index=0; index < edades.length; index++){
        if(edades[index]>=18)
        {
            mayor++;
        }
        else{
            mayor++;
        }
           }//fin for

            document.write("La cantidad de masculinos son", masculino,"<br>");
            document.write("La cantidad de femeninos son", femenino,"<br>");

    for (let index = 0; index < edades.length; index++) {
    femenino=masculino+edades[index];

}
salario=femenino/edades.length;
document.write("El salario es", salario.toFixed(2));



document.write("Imprimiendo elcontenido del arreglo");
for (let index = 0; index < edades.length; index++) {
    
    document.writeln(edades[index]);
    
}