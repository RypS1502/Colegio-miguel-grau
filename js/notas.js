function promedio(){
    let n1 = +document.getElementById("nota1").value;
    let n2 = +document.getElementById("nota2").value;
    let n3 = +document.getElementById("nota3").value;
    let n4 = +document.getElementById("nota4").value;

    let prom = (n1 + n2 + n3 + n4)/4;
    let resultado;

    if(prom>14){
        resultado = "Aprobado";
    }else{
        resultado = "Desaprobado";
    }

    document.getElementById("est").innerHTML = resultado;
    document.getElementById("prom").innerHTML = prom;
/*     alert("") */
}

let btn = document.getElementById('buttonPromedio');
btn.addEventListener("click", promedio);