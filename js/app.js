


//El titulo cambia de color a blanco

$(".main-titulo").css("color", "white");




//llenar la pantalla con dulces aleatorios




//arreglo de columnas
var cols = ["col-1","col-2","col-3","col-4","col-5","col-6","col-7"];

//llenar la pantalla con dulces

 for(i=1;i<8;i++){

       $.each(cols,function(key){

        console.log(key+1);
        var num = key+1;

        $( "<img src='./image/1.png' class='elemento' </img>" ).prependTo(".col-"+num);

       });
 };




//poner el puntaje y movimientos en cero
//poner el timmer en 2 min
