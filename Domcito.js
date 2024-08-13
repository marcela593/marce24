function calcular()
{
    let nombre =document.getElementById('name').Value;
    let edad =parseInt(document.getElementById('edad1').Value);
    //obteniendo el genero
    var genero=document.querySelector("input[name='sexo']:checked");
    let aumento;
    aumento=edad+10;
    //Imprimiendo la edad de acuerdo al genero
    if (genero=="masculino")
    {
        alert("Excelente caballero, su edad aumentada es" + aumento);
    }
    else {
        alert("Excelente señorita, su edad aumentada es" + aumento);
    }
    


}