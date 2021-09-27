//Validar si NO se repite un dui en los registros
var opcionVal = 0;
var duiUpdate =null;

console.log("duiUpdate:"+duiUpdate);
$("#btnNuevo").click(function () {
    duiUpdate = $("#dui").val();
    console.log("duiUpdate:"+duiUpdate);
});
$(document).on("click", ".btnEditar", function () {
    duiUpdate = $("#dui").val();
    
    console.log("duiUpdate:"+duiUpdate);
});

$("#dui").on("keyup", function () {
    console.log("Opcion: "+opcionVal);
    console.log("duiUpdatn key:"+duiUpdate);
    var dui = $("#dui").val(); //CAPTURANDO EL VALOR DE INPUT CON ID CEDULA
    console.log("dui:actual"+dui);
    var longitudDui = $("#dui").val().length; //CUENTO LONGITUD

    //Valido la longitud 
    if (longitudDui >= 9) {
        var dataString = 'dui=' + dui;

        $.ajax({
            url: '../bd/validaciones/validateDui.php',
            type: "POST",
            data: dataString,
            dataType: "JSON",

            success: function (datos) {

                if (datos.success == 1) {

                    $("#respuestaDui").html(datos.message);
                    $("input#dui").attr('disabled', false); //Habilitando el input cedula
                    $("#btnGuardar").attr('disabled', true); //Desabilito el Botton

                } else {
                    $("#respuestaDui").html(datos.message);
                    $("#btnGuardar").attr('disabled', false); //Habilito el Botton

                }
            }
        });
    }
});
//Validar si NO se repite un correo en los registros

$("#correo").on("keyup", function () {
    var correo = $("#correo").val(); //CAPTURANDO EL VALOR DE INPUT CON ID CEDULA
    var longitudCorreo = $("#correo").val().length; //CUENTO LONGITUD

    //Valido la longitud 
    if (longitudCorreo >= 4) {
        var dataString = 'correo=' + correo;

        $.ajax({
            url: '../bd/validaciones/validateCorreo.php',
            type: "POST",
            data: dataString,
            dataType: "JSON",

            success: function (datos) {

                if (datos.success == 1) {

                    $("#respuestaCorreo").html(datos.message);
                    $("input#dui").attr('disabled', false); //Habilitando el input cedula
                    $("#btnGuardar").attr('disabled', true); //Desabilito el Botton

                } else {
                    $("#respuestaCorreo").html(datos.message);
                    $("#btnGuardar").attr('disabled', false); //Habilito el Botton

                }
            }
        });
    }
});