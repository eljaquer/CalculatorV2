/*SAFE AND DELETE */
document.getElementById("delete").addEventListener("click",dele);
// document.getElementById("save").addEventListener("click",save);
// document.getElementById("load").addEventListener("click",load);

// function save(){
//     let h = document.getElementById("historial").innerHTML;
//     localStorage.setItem("historial", h);
// }
// function load(){
//     let lh = localStorage.getItem("historial");
//     let h = document.getElementById("historial").innerHTML=lh;
// }
function dele(){
    document.getElementById("historial").innerHTML="";
}


/*-------Calculadora-------*/ 

let a = 0;
let b = 0;
let operador = "sin asignar";



document.getElementById("valor1").addEventListener("change",(e)=>{leerPantalla()})
document.getElementById("R").addEventListener("click",leerPantalla);
document.getElementById("teclado").addEventListener("click",escribir);

function escribir(e){
    let v = e.target.innerHTML;
    if(!isNaN(v) || v=="-"|| v=="*"|| v=="/"|| v=="+")
       document.getElementById("valor1").value+=v;
    
}
function leerPantalla(e){
    let string = document.getElementById("valor1").value;
    let j=0;
    let flag = false;
    for(i=0;i<string.length;i++){
        /*console.log("i: "+i+ "numero: "+ string[i]+ "estado: "+ flag)*/
        if((string[i]=="*" || string[i]=="+" || string[i]=="-" || string[i]=="/")&& flag==false){
            a=string.substring(j,i);
            j=i+1;

            operador=string[i];
            flag=true;
        }
        else if((string[i]=="*" || string[i]=="+" || string[i]=="-" || string[i]=="/"|| string[i+1]==null)&& flag==true){
            b=string.substring(j,i);
            if(string[i+1]==null)
                b=string.substring(j,);
                
            a =operar(a,b,operador);
            if(string.length != i+1){
                j=i+1;
                operador =string[i];
            }
        }
    }

    guardarHistorial();
}

function operar(a,b,c){
    let l = 0;
    //console.log("a: "+a +"b: "+ b)
    switch(c){
        case "/":
            l = parseInt(a)/parseInt(b)
            break;
        case "*":
            l = parseInt(a)*parseInt(b)
            break;
        case "+":
            l = parseInt(a)+parseInt(b)
            break;
        case "-":
            l = parseInt(a)-parseInt(b)
            break;
    }
    
    mostrar(l);
    return l;
}

function mostrar(e){
    document.getElementById("resultado").innerHTML=e;
}


 function guardarHistorial(){
     let operacion = document.getElementById("valor1").value;
     let resultado = document.getElementById("resultado").value;
     let h = document.getElementById("historial").innerHTML;
     if(operacion!="" && resultado!= "")
        document.getElementById("historial").innerHTML = operacion +" = "+resultado+"\n" + h; 
    
}