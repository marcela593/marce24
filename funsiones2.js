var inicio=parseInt(prompt("Ingrese el valor inicial de la tabla"));
var fin=parseInt(prompt("Ingrese el valor inicial de la tabla"));

function Tablita(inicio , fin)
{ 
    var valor=parseInt(prompt("Ingrese que tabla de multiplicar quiere obtener"))

    if(inicio<=fin)
 {

            document.write("Mostrando el contenido en forma ascendente <br>")

            for (let f= inicio; f <= fin; f++ ){

                var tabla=f * valor;

                document.write(f+" * "+ valor + " = "+ tabla + '<br>')

            }
}
else{
    document.write("Mostrando el contenido en forma desendente <br>")
    for (let f= inicio; f >= fin; f-- ){
     var tabla =f * valor;
     document.write(f +"*"+ valor + "="+ tabla + '<br>') 
}
}
}