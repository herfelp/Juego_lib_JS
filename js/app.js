

//El titulo cambia de color a blanco

$(".main-titulo").css("color", "white");

//arreglo de columnas
var cols = ["col-1","col-2","col-3","col-4","col-5","col-6","col-7"];

//hacer el elemento dragabble

var drop_drag_elem = function(dat,num) {
    $("#div_"+dat+num+"").droppable({
});

    $("#elem_"+dat+num+"").draggable({
        snap: "#div_"+dat+num+"",
        snapMode: "inner",
        revert:  function(droppedElement) {
            var validDrop = droppedElement && droppedElement.hasClass("cl_coord_"+dat+num);

                  if (validDrop == true){

                    var a = dat;
                    var b = num;
                    var c = $('#elem_'+dat+num).attr('src');

                    var d = droppedElement.attr('id')[4];
                    var e = droppedElement.attr('id')[5];

                    $('#elem_'+a+b).remove();

                      var f =  $('#elem_'+d+e).attr('src');

                     $('#elem_'+d+e).remove();

                    $( "<img id='elem_"+a+b+"' src='"+f+"' class='elemento '  ></img>" ).prependTo("#div_"+a+b);
                    $( "<img id='elem_"+d+e+"' src='"+c+"' class='elemento '  ></img>" ).prependTo("#div_"+d+e);
                    drop_drag_elem(a,b);
                    drop_drag_elem(d,e);
                  };
            return !validDrop;
        }
    });
};

//llenar la pantalla con dulces aleatorios

var llenarpantalla = function(){
     for(i=1;i<8;i++){
         $.each(cols,function(key){
               var num = key+1;
               var dat = 8-i
                $( "<div id='div_"+dat+num+"' class ='elemento_div ' ></div>" ).prependTo(".col-"+num);
         });
     };
};

llenarpantalla();

// esta función agrega la clase llamada cl_coord_dat_num a cada div habilitado para movimientos del respectivo dat_num
   var est_paneles = function(dat,num){

            if (dat >1 && num >1 && dat <7 && num <7){

                var dat_1 = dat-1;
                var dat_2 = (+dat)+1;
                var num_1 = num-1;
                var num_2 = (+num)+1;

                $("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
                $("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);
                $("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);
                $("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);

             }else if (dat == 1 && num >1 && num <7) {

               var dat_1 = dat-1;
               var dat_2 = (+dat)+1;
               var num_1 = num-1;
               var num_2 = (+num)+1;

               $("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);
               $("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);
               $("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);

             }else if (num == 1 && dat >1 && dat <7) {

               var dat_1 = dat-1;
               var dat_2 = (+dat)+1;
               var num_1 = num-1;
               var num_2 = (+num)+1;

               $("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);
               $("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
               $("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);

             }else if (num == 7 && dat >1 && dat <7) {

               var dat_1 = dat-1;
               var dat_2 = (+dat)+1;
               var num_1 = num-1;
               var num_2 = (+num)+1;

               $("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);
               $("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
               $("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);

             }else if (dat == 7 && num >1 && num <7) {

               var dat_1 = dat-1;
               var dat_2 = (+dat)+1;
               var num_1 = num-1;
               var num_2 = (+num)+1;

               $("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
               $("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);
               $("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);

             }else if (dat == 1 && num == 1) {

               var dat_1 = dat-1;
               var dat_2 = (+dat)+1;
               var num_1 = num-1;
               var num_2 = (+num)+1;

                $("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);
                $("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);

             }else if (dat == 1 && num == 7) {

               var dat_1 = dat-1;
               var dat_2 = (+dat)+1;
               var num_1 = num-1;
               var num_2 = (+num)+1;

               $("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);
               $("#div_"+dat+num).addClass("cl_coord_"+dat_2+num);

             }else if (dat == 7 && num == 1) {

               var dat_1 = dat-1;
               var dat_2 = (+dat)+1;
               var num_1 = num-1;
               var num_2 = (+num)+1;

               $("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
               $("#div_"+dat+num).addClass("cl_coord_"+dat+num_2);

             }else if (dat == 7 && num == 7) {

               var dat_1 = dat-1;
               var dat_2 = (+dat)+1;
               var num_1 = num-1;
               var num_2 = (+num)+1;

               $("#div_"+dat+num).addClass("cl_coord_"+dat_1+num);
               $("#div_"+dat+num).addClass("cl_coord_"+dat+num_1);
             };

//incorpora el panel de navegacion para cada elemento draggable
     drop_drag_elem(dat,num);
  };


//asignar ID a cada imagen de cada div y establecer el panel de navegacion y hacerlo draggable (init)
var asignaid = function(){

     $(".elemento_div").each(function(key){

        var dat = this.id[4];
        var num = this.id[5];
        var num_aleat = 1 + Math.floor(Math.random() * 4);

       $( "<img id='elem_"+dat+num+"' src='./image/"+num_aleat+".png' class='elemento ' ></img>" ).prependTo("#div_"+dat+num);

       est_paneles(dat,num);
    });
};

asignaid();



 //a cada elemento debe asignarsele una clase si debe o no desaparecer

  //establecer cuantos espacios puede ver arriba abajo izquierda derecha

var marcar = function(){

   $(".elemento").each(function(key){

              var coordi = this.id[5];
              var coordj = this.id[6];
              var id_elem = this.id;
              var abajo = 7 - coordi;
              var arriba = 6 - abajo;
              var derecha = 7 - coordj
              var izquierda = 6 - derecha;

          for (var i = arriba+2; i < 8; i++) {
            //console.log("abajo")
            console.log($("#elem_"+i+""+coordj).attr('src'))
            console.log($("#"+id_elem).attr('src'))

          };

          for (var i = abajo+2 ; i < 8; i++) {
              var aux = 8-i;
            //console.log("arriba")

            //console.log($("#elem_"+aux+""+coordj))
          };

          for (var j = izquierda+2; j < 8; j++) {
            //console.log("derecha")
            //console.log($("#elem_"+coordi+""+j))
          };

          for (var j = derecha+2 ; j < 8; j++) {
            var aux = 8-j;
            //console.log("izquierda")

            //console.log($("#elem_"+coordi+""+aux))
          };
          //arriba derecha
   });
};

marcar();


//poner el puntaje y movimientos en cero
//poner el timmer en 2 min
