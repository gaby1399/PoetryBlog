
    function edadActual(fechaNac){
        var fNac=new Date(fechaNac);
        if(!isNaN(fechaNac)){
            alert("Seleccione su fecha de nacimiento");
            return;
         }
        var diaNac=fNac.getDay();
        var mesNac=fNac.getMonth();
        var añoNac=fNac.getFullYear();
        var fAct=new Date();
        var diaAct=fAct.getDay();
        var mesAct=fAct.getMonth();
        var añoAct=fAct.getFullYear();
        var edad= añoAct-añoNac;

        if(diaNac<diaAct && mesNac==mesAct||diaNac<=diaAct && mesNac>mesAct){
           edad=edad-1;
        }
        
        document.getElementById("mostrar").style.display="block";
        document.getElementById("edad").innerHTML=edad;
        selectGradoAcad();
        selectGenero();
    }

function selectGradoAcad(){
    var grdAcd=document.formulario.acad;
     var grados=" ";
    for(i=0;i<grdAcd.length;i++){
        if(grdAcd[i].checked) 
            grados+=grdAcd[i].value +" , ";
    }
    document.getElementsByName("gradosAcad").value=grados;
}  

function selectGenero(){
    var gen=document.formulario.genero;
    for(i=0;i<gen.length;i++){
        if(gen[i].checked) 
    document.getElementsByName("gen").value=gen[i].value;
    }

}  

    