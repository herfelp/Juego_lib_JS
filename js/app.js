


//El titulo cambia de color a blanco

$(".main-titulo").css("color", "white");




//llenar la pantalla con dulces aleatorios




//arreglo de columnas
var cols = ["col-1","col-2","col-3","col-4","col-5","col-6","col-7"];

//llenar la pantalla con dulces aleatorios

var llenarpantalla = function(){

  for(i=1;i<8;i++){

       $.each(cols,function(key){

        var num_aleat = 1 + Math.floor(Math.random() * 4);

        var num = key+1;
        var dat = 8-i

        $( "<img id='elem_"+dat+num+"' src='./image/"+num_aleat+".png' class='elemento ' </img>" ).prependTo(".col-"+num);

       });
   };
};

 llenarpantalla();


 //a cada elemento debe asignarsele una clase si debe o no desaparecer

  //establecer cuantos espacios puede ver arriba abajo izquierda derecha
$(".elemento").each(function(key){

   var coordi = this.id[5];
   var coordj = this.id[6];
   var imagen_elem = this.src;

   var abajo = 7 - coordi;
   var arriba = 6 - abajo;

   var derecha = 7 - coordj
   var izquierda = 6 - derecha;

   console.log(coordi+" "+coordj)



          for (var i = arriba+2; i < 8; i++) {
            console.log("abajo")
            console.log($("#elem_"+i+""+coordj))
          };
          
          for (var i = abajo+2 ; i < 8; i++) {
            console.log("arriba")
            var aux = 8-i;
            console.log($("#elem_"+aux+""+coordj))
          };

          for (var j = izquierda+2; j < 8; j++) {
            console.log("derecha")
            console.log($("#elem_"+coordi+""+j))
          };

          for (var j = derecha+2 ; j < 8; j++) {
            console.log("izquierda")
            var aux = 8-j;
            console.log($("#elem_"+coordi+""+aux))
          };




});




//poner el puntaje y movimientos en cero
//poner el timmer en 2 min
