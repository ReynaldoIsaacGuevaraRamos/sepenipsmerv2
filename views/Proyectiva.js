$(document).ready(function () {
    
    //Validacion para que solo se escoja un color
    $('.ct').change(function(){
        var combo = [];
        var enable = false;
        $(".ct").each(function(index, element){
            var value = $(this).children( 'option:selected' ).val();
            if(value != 0){
                combo.forEach(function(element){
                    if(element== value){
                        enable = false;
                        return false;
                    }else{
                        enable = true;
                    }
                });
                combo.push(value);
            }else{
                enable = false;
            }
        });
        $('.btnend').prop( "disabled", !enable);
    });

    $('#PruevaProyectiva').submit(function (e) {

        e.preventDefault(); 
        window.onbeforeunload = null; 
        var respuestasCorrectas=0;
        var i=0;

        $.getJSON( "../respuestasCuestionarios/inteligencia.json", function( data ) {
            $.each( data, function( key, val ) {
                while(i<48){
                    console.log("Respuesta "+(i+1)+": "+val[i].respuesta);
                    ++i;
                }
            });
        });

    });
    $('#PruevaProyectiva').submit(function (e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página

        r1 = $.trim($('#R1').val());
        r2 = $.trim($('#R2').val());
        r3 = $.trim($('#R3').val());
        r4 = $.trim($('#R4').val());
        r5 = $.trim($('#R5').val());
        r6 = $.trim($('#R6').val());
        r7 = $.trim($('#R7').val());
        r8 = $.trim($('#R8').val());
        $.ajax({
            url: "../bd/crudAdministradores.php",
            type: "POST",
            datatype: "json",
            data: {r1: r1, r2: r2, r3: r3, r4: r4, r5: r5, r6: r6, r7: r7, r8: r8 },
            success:function(data){ 
                    Swal.fire({
                        type:'success',
                        title:'¡Mensaje enviado!',
                        confirmButtonColor:'#3085d6',
                        confirmButtonText:'Terminar'
                    }).then((result) => {
                        if(result.value){
                            window.location.href = "views/evaluaciones.php";
                        }
                    })
                    
                }
            } 
        });
    });



});

