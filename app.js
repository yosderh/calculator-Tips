const trabajadores = [
    {
        name: 'Adrian'
    },
    {
        name: 'Alejandro'
    },
    {
        name: 'Daniela'
    },
    {
        name: 'Javiera'
    },
    {
    name: 'Scarlet'
},
{
    name: 'Fernanda'
},
{
    name: 'kenny'
},
{
    name: 'Sebastian'
},
{
    name: 'nuevo'
}
];     
     
     // SELLECION DE ELEMENTOS HTML
    const btnCalcular = document.getElementById('btn-calc');
    const body = document.querySelector('body');
    const div1 = document.querySelector('.tips-container');
    const main = document.querySelector('.main');
    const form = document.querySelector('.form1');

function divNames (object){
    let arrayName= [];
    for(let j=0; j<object.length; j++){
        arrayName.push(object[j].name);
    }
    arrayName.sort();
    console.log(arrayName)
    for(let i=0; i<object.length; i++){
        let div = document.createElement('div');
        let workername = arrayName[i];
            div.innerHTML= ` <label class="label-tips" for="tips${workername}">
            <span class="name-worker">${workername}</span>
            <div class="time">
                <input class="horas" id="hrs${workername}" type="number" name="horas" placeholder=" hrs">
                <span>:</span>
                <input class="minutos" id="min${workername}" type="number" name="minutos" placeholder=" min">
            </div>
        </label>`

        form.append(div.firstElementChild);
    }
}
divNames(trabajadores);

    // SELLECION DE ELEMENTOS HTML
    const inputTips = document.getElementById('totalTips');
    const inputHoras = document.querySelectorAll('.horas');
    const inputMin = document.querySelectorAll('.minutos');
    const allLabel = document.querySelectorAll('label .name-worker');
    
    



//BOTON DE CALCULAR
btnCalcular.addEventListener('click', ()=>{
    // console.log(inputTips);
        let totalTips = inputTips.value;
        const arrHours= arrValores(inputHoras);
        const arrMin= arrValores(inputMin);

        const min = hoursToMinuts(arrHours);
        const totalMinutosworker = minutosTotales(min, arrMin);
        const totalMinuts = sumaData(totalMinutosworker);
        const allNames = nombres(allLabel);

        const valorTipsToMinuts = totalTips / totalMinuts;
        const tipsworkerdefinitly= propinaWorker(totalMinutosworker, valorTipsToMinuts);
        
        showTipsWorker(allNames, tipsworkerdefinitly, arrHours, arrMin);
        // console.log(valorTipsToMinuts);
        // console.log(tipsworkerdefinitly);
        // console.log(sumaData(tipsworkerdefinitly));
        // console.log(allNames);

        

        })



        // CREA ARREGLOS DE VALORES HORAS Y MINUTOS

const arrValores = (inputs)=>{
    const array = [];
    for(let i=0; i<inputs.length; i++){
        let element = inputs[i].valueAsNumber;
        if(isNaN(element)){
            element=0;
        } 
        array.push(element);
    }
    console.log(array);
    return array;
}

        // SUMA DE LOS VALORES DE LOS INPUTS
const sumaData = (data)=>{

    let suma = data.reduce((acumulador, horas) => acumulador + horas);
    return suma;
}

//CONVIERTE MINUTOS A DECIMALES
// const minutosDecimales = (data)=>{ 
//     const minEnDecimales = [];

//     for(let i=0; i<data.length; i++){
//        let decimal = (data[i] *1)/60;
//         minEnDecimales.push(decimal);
//     }
//     return minEnDecimales;
// }

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
    function showTipsWorker(nombres, tips, horas, min){
        let table = document.createElement('table');
        let totalTips = document.createElement('div');
            table.classList.add('newDiv');
        const arrWorkers = [];
        for(let i=0; i<nombres.length; i++){
            let workers = new Object();
            workers.name= nombres[i];
            workers.tip= parseInt(tips[i]);
            arrWorkers.push(workers);
        }
        for(let j=0; j<nombres.length; j++){
            let fila = document.createElement('tr');
            let celdaName = document.createElement('td');
            let celdaHours = document.createElement('td');
            let celdaTips = document.createElement('td');
                celdaName.innerText= `${arrWorkers[j].name}`;
                celdaHours.innerText= `horas: ${horas[j]}:${min[j]}`;
                celdaTips.innerText= `${arrWorkers[j].tip}`;
                fila.append(celdaName);
                fila.append(celdaHours);
                fila.append(celdaTips);
                table.appendChild(fila);
        }
        totalTips.innerHTML = `<span>PROPINAS TOTALES: ${inputTips.value}</span>`;
        totalTips.classList.add('totalTips');

        main.appendChild(table);
        main.appendChild(totalTips);
        div1.classList.add('inactive');
    }

       