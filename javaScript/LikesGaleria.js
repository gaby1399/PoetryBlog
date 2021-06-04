
window.onload=recuperarLocal;

function recuperarLocal() {
  var valor;
  if(localStorage.getItem("gusta")!=null){
   valor = localStorage.getItem("gusta");  
    document.getElementById("text").innerHTML="<label>"+valor +" like"+
    "</label>";
  }
  if(localStorage.getItem("gusta2")!=null){
    valor = localStorage.getItem("gusta2");  
     document.getElementById("text2").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
   if(localStorage.getItem("gusta3")!=null){
    valor = localStorage.getItem("gusta3");  
     document.getElementById("text3").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
   if(localStorage.getItem("gusta4")!=null){
    valor = localStorage.getItem("gusta4");  
     document.getElementById("text4").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
   if(localStorage.getItem("gusta5")!=null){
    valor = localStorage.getItem("gusta5");  
     document.getElementById("text5").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
   if(localStorage.getItem("gusta6")!=null){
    valor = localStorage.getItem("gusta6");  
     document.getElementById("text6").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
   if(localStorage.getItem("gusta7")!=null){
    valor = localStorage.getItem("gusta7");  
     document.getElementById("text7").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
   if(localStorage.getItem("gusta8")!=null){
    valor = localStorage.getItem("gusta8");  
     document.getElementById("text8").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
   if(localStorage.getItem("gusta9")!=null){
    valor = localStorage.getItem("gusta9");  
     document.getElementById("text9").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
   if(localStorage.getItem("gusta10")!=null){
    valor = localStorage.getItem("gusta10");  
     document.getElementById("text10").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
   if(localStorage.getItem("gusta11")!=null){
    valor = localStorage.getItem("gusta11");  
     document.getElementById("text11").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
   if(localStorage.getItem("gusta12")!=null){
    valor = localStorage.getItem("gusta12");  
     document.getElementById("text12").innerHTML="<label>"+valor +" like"+
     "</label>";
   }
      
}



function guardarLocal() {
       var cont=1;
        if(localStorage.getItem("gusta")!=null){
          var valor = localStorage.getItem("gusta");  
          cont=1 + parseInt(valor);
         localStorage.setItem("gusta",cont);
         document.getElementById("text").innerHTML="<label>"+cont +" like"+
         "</label>";
         }else{
             localStorage.setItem("gusta", cont);
             document.getElementById("text").innerHTML="<label>"+cont +" like"+
             "</label>";
              } 
        document.getElementById("like").style.background = "rgb(219, 164, 164)";
}




function guardarLocal2() {
  var cont2=1;
  if(localStorage.getItem("gusta2")!=null){
    var valor = localStorage.getItem("gusta2");  
    cont2=1 + parseInt(valor);
   localStorage.setItem("gusta2",cont2);
   document.getElementById("text2").innerHTML="<label>"+cont2 +" like"+
   "</label>";
   }else{
       localStorage.setItem("gusta2", cont2);
       document.getElementById("text2").innerHTML="<label>"+cont2 +" like"+
       "</label>";
        } 
  document.getElementById("like2").style.background = "rgb(219, 164, 164)";
}


function guardarLocal3() {
  var cont3=1;
  if(localStorage.getItem("gusta3")!=null){
    var valor = localStorage.getItem("gusta3");  
    cont3=1 + parseInt(valor);
   localStorage.setItem("gusta3",cont3);
   document.getElementById("text3").innerHTML="<label>"+cont3 +" like"+
   "</label>";
   }else{
       localStorage.setItem("gusta3", cont3);
       document.getElementById("text3").innerHTML="<label>"+cont3 +" like"+
       "</label>";
        } 
  document.getElementById("like3").style.background = "rgb(219, 164, 164)";
}


function guardarLocal4() {
  var cont4=1;
  if(localStorage.getItem("gusta4")!=null){
    var valor = localStorage.getItem("gusta4");  
    cont4=1 + parseInt(valor);
   localStorage.setItem("gusta4",cont4);
   document.getElementById("text4").innerHTML="<label>"+cont4 +" like"+
   "</label>";
   }else{
       localStorage.setItem("gusta4", cont4);
       document.getElementById("text4").innerHTML="<label>"+cont4 +" like"+
       "</label>";
        } 
  document.getElementById("like4").style.background = "rgb(219, 164, 164)";
}


function guardarLocal5() {
  var cont5=1;
  if(localStorage.getItem("gusta5")!=null){
    var valor = localStorage.getItem("gusta5");  
    cont5=1 + parseInt(valor);
   localStorage.setItem("gusta5",cont5);
   document.getElementById("text5").innerHTML="<label>"+cont5 +" like"+
   "</label>";
   }else{
       localStorage.setItem("gusta5", cont5);
       document.getElementById("text5").innerHTML="<label>"+cont5 +" like"+
       "</label>";
        } 
  document.getElementById("like5").style.background = "rgb(219, 164, 164)";
}


function guardarLocal6() {
  var cont6=1;
  if(localStorage.getItem("gusta6")!=null){
    var valor = localStorage.getItem("gusta6");  
    cont6=1 + parseInt(valor);
   localStorage.setItem("gusta6",cont6);
   document.getElementById("text6").innerHTML="<label>"+cont6 +" like"+
   "</label>";
   }else{
       localStorage.setItem("gusta6", cont6);
       document.getElementById("text6").innerHTML="<label>"+cont6 +" like"+
       "</label>";
        } 
  document.getElementById("like6").style.background = "rgb(219, 164, 164)";
}

function guardarLocal7() {
  var cont7=1;
  if(localStorage.getItem("gusta7")!=null){
    var valor = localStorage.getItem("gusta7");  
    cont7=1 + parseInt(valor);
   localStorage.setItem("gusta7",cont7);
   document.getElementById("text7").innerHTML="<label>"+cont7 +" like"+
   "</label>";
   }else{
       localStorage.setItem("gusta7", cont6);
       document.getElementById("text7").innerHTML="<label>"+cont7 +" like"+
       "</label>";
        } 
  document.getElementById("like7").style.background = "rgb(219, 164, 164)";
}



function guardarLocal8() {
    var cont8=1;
    if(localStorage.getItem("gusta8")!=null){
      var valor = localStorage.getItem("gusta8");  
      cont8=1 + parseInt(valor);
     localStorage.setItem("gusta8",cont8);
     document.getElementById("text8").innerHTML="<label>"+cont8 +" like"+
     "</label>";
     }else{
         localStorage.setItem("gusta8", cont8);
         document.getElementById("text8").innerHTML="<label>"+cont8 +" like"+
         "</label>";
          } 
    document.getElementById("like8").style.background = "rgb(219, 164, 164)";
}

function guardarLocal9() {
  var cont9=1;
    if(localStorage.getItem("gusta9")!=null){
      var valor = localStorage.getItem("gusta9");  
      cont9=1 + parseInt(valor);
     localStorage.setItem("gusta9",cont9);
     document.getElementById("text9").innerHTML="<label>"+cont9+" like"+
     "</label>";
     }else{
         localStorage.setItem("gusta9", cont9);
         document.getElementById("text9").innerHTML="<label>"+cont9 +" like"+
         "</label>";
          } 
    document.getElementById("like9").style.background = "rgb(219, 164, 164)";
}



function guardarLocal10() {
  var cont10=1;
  if(localStorage.getItem("gusta10")!=null){
    var valor = localStorage.getItem("gusta10");  
    cont10=1 + parseInt(valor);
   localStorage.setItem("gusta10",cont10);
   document.getElementById("text10").innerHTML="<label>"+cont10 +" like"+
   "</label>";
   }else{
       localStorage.setItem("gusta10", cont10);
       document.getElementById("text10").innerHTML="<label>"+cont10 +" like"+
       "</label>";
        } 
  document.getElementById("like10").style.background = "rgb(219, 164, 164)";
}


function guardarLocal11() {
  var cont11=1;
  if(localStorage.getItem("gusta11")!=null){
    var valor = localStorage.getItem("gusta11");  
    cont11=1 + parseInt(valor);
   localStorage.setItem("gusta11",cont11);
   document.getElementById("text11").innerHTML="<label>"+cont11 +" like"+
   "</label>";
   }else{
       localStorage.setItem("gusta11", cont11);
       document.getElementById("text11").innerHTML="<label>"+cont11 +" like"+
       "</label>";
        } 
  document.getElementById("like11").style.background = "rgb(219, 164, 164)";
}

function guardarLocal12() {
  var cont12=1;
    if(localStorage.getItem("gusta12")!=null){
      var valor = localStorage.getItem("gusta12");  
      cont12=1 + parseInt(valor);
     localStorage.setItem("gusta12",cont12);
     document.getElementById("text12").innerHTML="<label>"+cont12 +" like"+
     "</label>";
     }else{
         localStorage.setItem("gusta12", cont12);
         document.getElementById("text12").innerHTML="<label>"+cont12 +" like"+
         "</label>";
          } 
    document.getElementById("like12").style.background = "rgb(219, 164, 164)";
}