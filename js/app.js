

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
                    marcar();
                    runEffect_marc();
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
                $( "<div id='div_"+dat+num+"' class ='elemento_div ' ></div>" ).appendTo(".col-"+num);
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

var establ_cu = function(){

  $(".elemento_div").each(function(key){

     var dat = this.id[4];
     var num = this.id[5];

    est_paneles(dat,num);
 });

};


var marcar = function(){

  for (j=1;j<8;j++){
     for (i=1;i<8;i++){

       var i_1 = String(i+1);
       var i_2 = String(i+2);
       var j_1 = String(j+1);
       var j_2 = String(j+2);

       var a = $("#elem_"+i+j).attr('src');
       var b = $("#elem_"+i_1+j).attr('src');
       var c = $("#elem_"+i_2+j).attr('src');

       var d = $("#elem_"+i+j).attr('src');
       var e = $("#elem_"+i+j_1).attr('src');
       var f = $("#elem_"+i+j_2).attr('src');


       if(a == b && b == c){

           $("#elem_"+i+j).addClass('marcar');
           $("#elem_"+i_1+j).addClass('marcar');
           $("#elem_"+i_2+j).addClass('marcar');

        };

       if(d == e && e == f){

           $("#elem_"+i+j).addClass('marcar');
           $("#elem_"+i+j_1).addClass('marcar');
           $("#elem_"+i+j_2).addClass('marcar');

       };
     };
  };
};

marcar();


var runEffect_marc = function(){

 $(".elemento").each(function(key){

     $(".elemento.marcar").toggle("pulsate", {times:3}, 1000 ,function(){
     $(".elemento.marcar").parent().addClass("hide");

     $(".elemento.marcar").remove();
     crea_arr();
     });
   });
};

runEffect_marc();


var crea_arr = function(){

  var arr = [];

     for(j=1;j<8;j++){

       var cht = 0;

       for (i=1;i<8;i++){

       var miniarr =[];
       var $cel = $("#div_"+i+j);

       if (i==7){

              if($cel.hasClass('hide')){

                   cht = cht +1;

              }else{
                var dtn = i - cht;

                  miniarr.push(i);
                  miniarr.push(dtn);
                  miniarr.push(j);
                  arr.push(miniarr);

             };

       }else{

              if($cel.hasClass('hide')){

                   cht = cht +1;

              }else{
               var dtn = i - cht;
               miniarr.push(i);
               miniarr.push(dtn);
               miniarr.push(j);
               arr.push(miniarr);
            };
         };
      };

       var u = 8 - cht;
       var a = 8;

       for (b = u; b < 8; b++){

        var miniarr =[];
         miniarr.push(a);
         miniarr.push(b);
         miniarr.push(j);
         arr.push(miniarr);
         a++;
       };

  };
console.log(arr)


crea_on_top(arr);

};



var animacionsube =function(y1,n,x){

         var dist = (n * 96);

               $("#elem_"+y1+x).animate({bottom: dist},100,function() {

                       $("#elem_"+y1+x).stop();
            });
};


var arreglosube = function(arr){

  var arrsube = [];

  for (i=0;i<arr.length;i++){
    var miniarrsube = [];

     var a = arr[i][0];
     var b = arr[i][1];
     var c = arr[i][2];


     if( a > 7){

       miniarrsube.push(a);
       miniarrsube.push(3);
       miniarrsube.push(c);
       arrsube.push(miniarrsube);

         };

     };

        multipleanimsube(arrsube,arr);

     console.log(arrsube)


};


var crea_on_top = function(arr){

        for (i=0;i<arr.length;i++){

           var a = arr[i][0];
           var b = arr[i][1];
           var c = arr[i][2];

           if(a>7){

               var num_aleat = 1 + Math.floor(Math.random() * 4);

               $( "<img id='elem_"+a+c+"' src='./image/"+num_aleat+".png' class='elemento hide' ></img>" ).appendTo("#div_"+7+c);

           };

      };

      arreglosube(arr);

};



var multipleanimsube = function(arrsube,arr){


     for (i=0;i<arrsube.length;i++){

       console.log("multipleanimsube")

        var a = arrsube[i][0];
        var b = arrsube[i][1];
        var c = arrsube[i][2];

        animacionsube(a,b,c);

     };

     setTimeout(function() {

         multipleanim(arr);


       }, 200);


};


var multipleanim = function(arr){


     for (i=0;i<arr.length;i++){

       console.log("multipleanim")

        var a = arr[i][0];
        var b = arr[i][1];
        var c = arr[i][2];

        animacionbaja(a,b,c);


     };


     setTimeout(function() {

        establ_cu();
        marcar();
        runEffect_marc();


     }, 1000);


};

var animacionbaja =function(y1,y2,x){

      if(y1<7){
        var n = y1 - y2;


       }else{

           var n = 7 - y2;


       };

              var dist = (n * 96);



              $("#elem_"+y1+x).removeClass("hide");
              $("#div_"+y1+x).removeClass("hide");
              $("#div_"+7+x).removeClass("hide");

                  var im = $("#elem_"+y1+x).attr('src');

                       $("#elem_"+y1+x).animate({top: dist},600,function() {

                             $("#elem_"+y1+x).stop();

                             $("#elem_"+y1+x).remove();
                               $("#elem_"+y2+x).remove();
                              $( "<img id='elem_"+y2+x+"' src='"+im+"' class='elemento ' ></img>" ).prependTo("#div_"+y2+x);

                               $("#div_"+y2+x).removeClass("hide");

                });

};



//poner el puntaje y movimientos en cero
//poner el timmer en 2 min
