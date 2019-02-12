var btnval="O";
var countx;
var counto;


var ax = document.getElementById("x");
    if  (ax != null){
     countx=Number(ax.value);
        }
    else{
    countx=Number(0);
    }

var ao=document.getElementById("o");
    if (ao != null) {
    counto=Number(ao.value);
    }
    else{
    counto=Number(0);
    }


function reset() {
    var b1 = document.getElementById("1");
    var b2 = document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 = document.getElementById("4");
    var b5 = document.getElementById("5");
    var b6 = document.getElementById("6");
    var b7 = document.getElementById("7");
    var b8 = document.getElementById("8");
    var b9 = document.getElementById("9");
    
    b1.value="";
    b2.value="";
    b3.value="";
    b4.value="";
    b5.value="";
    b6.value="";
    b7.value="";
    b8.value="";
    b9.value="";
    b1.disabled=false;
    b2.disabled=false;
    b3.disabled=false;
    b4.disabled=false;
    b5.disabled=false;
    b6.disabled=false;
    b7.disabled=false;
    b8.disabled=false;
    b9.disabled=false;
}


function endgame() {
    document.getElementById("1").disabled=true;
    document.getElementById("2").disabled=true;
    document.getElementById("3").disabled=true;
    document.getElementById("4").disabled=true;
    document.getElementById("5").disabled=true;
    document.getElementById("6").disabled=true;
    document.getElementById("7").disabled=true;
    document.getElementById("8").disabled=true;
    document.getElementById("9").disabled=true;
    
    }


function popuprsl(winner){
    
    endgame();
    
    alert(winner+"wins.");
    
     
    if(winner=="X"){
        countx=countx+10;
        counto=counto-5;
        document.getElementById("x").value=countx;
        document.getElementById("o").value=counto;
    }
    
   else if(winner=="O"){
        counto=counto+10;
        countx=countx-5;
        document.getElementById("o").value=counto;
        document.getElementById("x").value=countx;
}
}


function combinations(){
    
    var b1= document.getElementById("1").value;
    var b2= document.getElementById("2").value;
    var b3= document.getElementById("3").value;
    var b4= document.getElementById("4").value;
    var b5= document.getElementById("5").value;
    var b6= document.getElementById("6").value;
    var b7= document.getElementById("7").value;
    var b8= document.getElementById("8").value;
    var b9= document.getElementById("9").value;
    
    
    if (((b1=="X") || (b1=="O")) && (b1==b2) && (b2==b3)){popuprsl(b1);}
    
    else if (((b4=="X") || (b4=="O")) && (b4==b5) && (b5==b6)) {popuprsl(b4);}
    
    else if (((b7=="X") || (b7=="O")) && (b7==b8) && (b8==b9)) {popuprsl(b7);}
    
    else if (((b1=="X") || (b1=="O")) && (b1==b4) && (b4==b7)) {popuprsl(b1);}
    
    else if(((b2=="X") || (b2=="O")) && (b2==b5) && (b5==b8)) {popuprsl(b2);}
    
    else if(((b3=="X") || (b3=="O")) && (b3==b6) && (b6==b9)) {popuprsl(b3);}
    
    else if(((b1=="X") || (b1=="O")) && (b1==b5) && (b5==b9)) {popuprsl(b1);}
    
    else if(((b3=="X") || (b3="O")) && (b3==b5) && (b5==b7)) {popuprsl(b3);}
        
}


function setxo(x, btnval){
    
    if(x==1){
        var button = document.getElementById("1");
        button.value=btnval;
        button.disabled=true;
    }
    else if (x==2){
        var button = document.getElementById("2");
        button.value=btnval;
        button.disabled=true;
    }
    else if (x==3){
        var button = document.getElementById("3");
        button.value=btnval;
        button.disabled=true;
    }
    else if (x==4){
        var button = document.getElementById("4");
        button.value=btnval;
        button.disabled=true;
    }
    else if (x==5){
        var button = document.getElementById("5");
        button.value=btnval;
        button.disabled=true;
    }
    else if (x==6){
        var button = document.getElementById("6");
        button.value=btnval;
        button.disabled=true;
    }
    else if (x==7){
        var button = document.getElementById("7");
        button.value=btnval;
        button.disabled=true;
    }
    else if (x==8){
        var button = document.getElementById("8");
        button.value=btnval;
        button.disabled=true;
    }
    else if (x==9){
        var button = document.getElementById("9");
        button.value=btnval;
        button.disabled=true;
    }
    combinations();
}


function xo(button){
    if (btnval=="X"){
        btnval="O";
        setxo(button, btnval);
    }
    else if( btnval=="O"){
    btnval="X";
    setxo(button, btnval);
    }
}