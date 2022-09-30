function getIMC(){
    const section = document.getElementById("text-area");
    const nombre = document.getElementById("nombre").value;
    const estatura = document.getElementById("estatura").value;
    const masa = document.getElementById("masa").value;
    const buton = document.getElementById("GetBtn");
    console.log(buton.classList);
    buton.disabled = true;
    
    
    
    const fragment = document.createDocumentFragment();
    const template = document.getElementById("response").content;
    const span = document.createElement("span");
    span.classList.add("alert");

    let imc = (masa/Math.pow(estatura,2)).toFixed(2);
    let valoracion = "";
    if(imc<=16.99){
        valoracion="Delgadez moderada";
        span.classList.add("alert-danger");
    }else if(imc<=18.49){
        valoracion="Delgadez aceptable";
        span.classList.add("alert-warning");
    }else if(imc<=24.99){
        valoracion="Peso Normal";
        span.classList.add("alert-success");
    }else if(imc<=34.99){
        valoracion="Obesidad tipo 1";
        span.classList.add("alert-warning");
    }else if(imc<=39.99){
        valoracion="Obesidad tipo 2";
        span.classList.add("alert-warning");
    }else if(40<imc){
        valoracion="Obesidad tipo 3";
        span.classList.add("alert-danger");
    }else{
        valoracion="Ocurrio un error";
        span.classList.add("alert-secondary");
    }
    span.textContent = "IMC: "+imc+"  ||  valoración: "+valoracion;
    
    template.querySelector("b").textContent = nombre;
    template.querySelector("h5").appendChild(span);
    
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    
    section.appendChild(fragment);
}