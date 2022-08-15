const inputTips = document.getElementById('totalTips');
const inputHoras = document.querySelectorAll('.horas');
const inputMin = document.querySelectorAll('.minutos');
const allLabel = document.querySelectorAll('label .name-worker');
const btnCalcular = document.getElementById('btn-calc');
const body = document.querySelector('body');
btnCalcular.addEventListener('click', ()=>{
        let totalTips = inputTips.value;
        const arrHours= arrValores(inputHoras);
        const arrMin= arrValores(inputMin);

        const min = hoursToMinuts(arrHours);
        const totalMinutosworker = minutosTotales(min, arrMin);
        const totalMinutos = sumaData(totalMinutosworker);
        const allNames = nombres(allLabel);

        const valorTipsMinuts = totalTips / totalMinutos;
        const tipsworkerdefinitly= propinaWorker(totalMinutosworker, valorTipsMinuts);

        console.log(valorTipsMinuts);
        console.log(tipsworkerdefinitly);
        console.log(sumaData(tipsworkerdefinitly));
        console.log(allNames);

        showTipsWorker(allNames, tipsworkerdefinitly);
        

        })



        // CREA ARREGLOS DE VALORES HORAS Y MINUTOS

const arrValores = (inputs)=>{
    const data = [];
    for(let i=0; i<inputs.length; i++){
        let element = inputs[i].valueAsNumber;
        if(isNaN(element)){
            element=0;
        } 
        data.push(element);
    }
    return data;
}

        // SUMA DE LOS VALORES DE LOS INPUTS
const sumaData = (data)=>{

    let suma = data.reduce((acumulador, horas) => acumulador + horas);

    // console.log(data);
    // console.log(suma);
    return suma;
}

//CONVIERTE MINUTOS A DECIMALES
const minutosDecimales = (data)=>{ 
    const minEnDecimales = [];

    for(let i=0; i<data.length; i++){
       let decimal = (data[i] *1)/60;
        minEnDecimales.push(decimal);
    }
    return minEnDecimales;
}

//CONVIERTE HORAS EN MINUTOS 
const hoursToMinuts = (data)=>{
    const minutos = [];
    for(let i=0; i<data.length; i++){
        minutos.push(data[i] * 60);
    }

    return minutos;
}


//SUMA DE MINUTOS TOTALES

const minutosTotales = (data1,data2)=>{
    const minutosTotales = [];

    for(let i=0; i<data1.length; i++){
        minutosTotales.push(data1[i]+data2[i]);
    }
    return minutosTotales;
}

//CALCULAR PROPINA POR CADA TRABAJADOR
const propinaWorker= (data1,valorMin)=>{
    const propinas = [];

    for(let i=0; i<data1.length; i++){
        propinas.push(data1[i]*valorMin);
    }
    return propinas;
}

// OBTENER ARREGLO DE NOMBRES
const nombres = (data)=>{
    const names = [];
    for(let i=0; i<data.length; i++){
        names.push(data[i].innerHTML);
    }
    return names;
}

    // DOM
    function showTipsWorker(nombres, tips){
        let div = document.createElement('div');
        const arrWorkers = [];
        for(let i=0; i<nombres.length; i++){
            let workers = new Object();
            workers.name= nombres[i];
            workers.tip= tips[i];
            arrWorkers.push(workers);
        }
        for(let j=0; j<nombres.length; j++){
            let span= document.createElement('span');
                span.innerText= `${arrWorkers[j].name}: ${arrWorkers[j].tip} \n`
                
                div.appendChild(span);
        }

        body.appendChild(div);
    }

       