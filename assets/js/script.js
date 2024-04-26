/*insertar antes de utilizar jquery*/
$(document).ready(function(){

/*
En JavaSCript
let numero1 = document.getElementById("numero1");
*/
    
/*En Jquery*/

    

    let numero1 = 0;
    let numero2 = 0;

    let resultado = 0;

    const soloNumeros = /^\d+$/; 


    /* boton q suma*/
    $("#btnSumar").click(function(){

        /* inicio variable vacía */
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");


        /* numero 1 */
        numero1 = $("#numero1").val();

        if(numero1 === ""){
            //$("#error1").text("Debe ingresar un numero");
            //$("#error1").css("color","red");
            //return;
            Swal.fire({
                title: "Debe ingresar un numero",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };



        if(!soloNumeros.test(numero1)){
            //$("#error1").text("solo numeros");
            //$("#error1").css("color","red");
            //return;
            Swal.fire({
                title: "Solo ingrese numeros",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };



        /* numero 2 */
        numero2 = $("#numero2").val();

        if(numero2 === ""){
            //$("#error2").text("Debe ingresar un numero");
            //$("#error2").css("color","red");
            //return;
            Swal.fire({
                title: "Debe ingresar un numero",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };


        /* validacion solo numeros (agregar esto fuera del boton = ( const soloNumeros = /^\d+$/; ) )*/
        if(!soloNumeros.test(numero2)){
            //$("#error2").text("solo numeros");
            //$("#error2").css("color","red");
            //return;
            Swal.fire({
                title: "Solo ingrese numeros",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };

        /* suma */
       resultado = parseInt(numero1) + parseInt(numero2);
       $("#resultado").text(resultado);
       $("#resultado").css("color","blue");
       $("#resultado").css("fontSize","2rem");


        limpiar();


    });


    /* boton q resta*/
    $("#btnRestar").click(function(){

        /* inicio variable vacía */
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");


        /* numero 1 */
        numero1 = $("#numero1").val();

        if(numero1 === ""){
            //$("#error1").text("Debe ingresar un numero");
            //$("#error1").css("color","red");
            //return;
            Swal.fire({
                title: "Debe ingresar un numero",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };



        if(!soloNumeros.test(numero1)){
            //$("#error1").text("solo numeros");
            //$("#error1").css("color","red");
            //return;
            Swal.fire({
                title: "Solo ingrese numeros",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };



        /* numero 2 */
        numero2 = $("#numero2").val();

        if(numero2 === ""){
            //$("#error2").text("Debe ingresar un numero");
            //$("#error2").css("color","red");
            //return;
            Swal.fire({
                title: "Debe ingresar un numero",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };


        /* validacion solo numeros (agregar esto fuera del boton = ( const soloNumeros = /^\d+$/; ) )*/
        if(!soloNumeros.test(numero2)){
            //$("#error2").text("solo numeros");
            //$("#error2").css("color","red");
            //return;
            Swal.fire({
                title: "Solo ingrese numeros",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };

        /* suma */
       resultado = parseInt(numero1) - parseInt(numero2);
       $("#resultado").text(resultado);
       $("#resultado").css("color","blue");
       $("#resultado").css("fontSize","2rem");


        limpiar();


    });


    /* boton q multiplica*/
    $("#btnMultiplicar").click(function(){

        /* inicio variable vacía */
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");


        /* numero 1 */
        numero1 = $("#numero1").val();

        if(numero1 === ""){
            //$("#error1").text("Debe ingresar un numero");
            //$("#error1").css("color","red");
            //return;
            Swal.fire({
                title: "Debe ingresar un numero",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };



        if(!soloNumeros.test(numero1)){
            //$("#error1").text("solo numeros");
            //$("#error1").css("color","red");
            //return;
            Swal.fire({
                title: "Solo ingrese numeros",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };



        /* numero 2 */
        numero2 = $("#numero2").val();

        if(numero2 === ""){
            //$("#error2").text("Debe ingresar un numero");
            //$("#error2").css("color","red");
            //return;
            Swal.fire({
                title: "Debe ingresar un numero",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };


        /* validacion solo numeros (agregar esto fuera del boton = ( const soloNumeros = /^\d+$/; ) )*/
        if(!soloNumeros.test(numero2)){
            //$("#error2").text("solo numeros");
            //$("#error2").css("color","red");
            //return;
            Swal.fire({
                title: "Solo ingrese numeros",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };

        /* suma */
       resultado = parseInt(numero1) * parseInt(numero2);
       $("#resultado").text(resultado);
       $("#resultado").css("color","blue");
       $("#resultado").css("fontSize","2rem");


        limpiar();


    });


    /* boton q divide*/
    $("#btnDividir").click(function(){

        /* inicio variable vacía */
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");


        /* numero 1 */
        numero1 = $("#numero1").val();

        if(numero1 === ""){
            //$("#error1").text("Debe ingresar un numero");
            //$("#error1").css("color","red");
            //return;
            Swal.fire({
                title: "Debe ingresar un numero",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };



        if(!soloNumeros.test(numero1)){
            //$("#error1").text("solo numeros");
            //$("#error1").css("color","red");
            //return;
            Swal.fire({
                title: "Solo ingrese numeros",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };



        /* numero 2 */
        numero2 = $("#numero2").val();

        if(numero2 === ""){
            //$("#error2").text("Debe ingresar un numero");
            //$("#error2").css("color","red");
            //return;
            Swal.fire({
                title: "Debe ingresar un numero",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };


        /* validacion solo numeros (agregar esto fuera del boton = ( const soloNumeros = /^\d+$/; ) )*/
        if(!soloNumeros.test(numero2)){
            //$("#error2").text("solo numeros");
            //$("#error2").css("color","red");
            //return;
            Swal.fire({
                title: "Solo ingrese numeros",
                text: "por favor ingrese un numero",
                icon: "warning"
              });
            return;
        };

        /* suma */
       resultado = parseInt(numero1) / parseInt(numero2);
       $("#resultado").text(resultado);
       $("#resultado").css("color","blue");
       $("#resultado").css("fontSize","2rem");


        limpiar();


    });

    /* boton q limpia el resultado*/
    $("#btnLimpiar").click(function(){
        $("#resultado").text("");
    });

    /* boton q esconde*/
    $("#btnEsconder").click(function(){

        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
    });

    
    /* boton q muestra lo escondido*/
    $("#btnMostrar").click(function(){

        $("#div1").show();
        $("#div2").show();
        $("#div3").show();
    });

    /*limpia los espacios de los numeros que se operan*/
    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val("");
    };



});

/* instrucciones pa usar jquery

1) ir a:	https://jquery.com/

2) buscar jquery cdn e ingresar al primer enlace en el primer parrafo

3) cliquear jqueri 3.x  y copiar el script

4) pegar bajo el script de boostrap

(ejemplo aqui: https://github.com/K4yrYu/clase-26-04--Jquery-)

-------------------------------------


VER JSON Viewer 
para ver diferentes api

 */