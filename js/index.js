
console.log('prueba');
function sumar() {
    const forma =document.getElementById('forma');
    let opA = forma['opA'];   
    let opB = forma['opB'];
    let resultado = parseInt(opA.value) + parseInt(opB.value);
    if (isNaN (resultado))
        resultado = 'La operación no inlcuye números' 
        
    
    document.getElementById('resultado').innerHTML =`Resultado: ${resultado}` ;   
       
    
}

