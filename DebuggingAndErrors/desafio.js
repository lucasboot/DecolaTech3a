function f(array, num){
    try {
        if(!array|| !num) throw new ReferenceError('Envie todos os parametros');
        if(typeof array  !== 'object') throw new TypeError('Envie um elemento do tipo array')
        if(typeof num !== 'number') throw new TypeError('Envie um elemento do tipo number')
        if(array.length != num) throw new RangeError('Tamanho do array invalido') 
        return array 
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log('Refference Error')
            console.log(error.stack)
        }
        else if(error instanceof TypeError){
            console.log('Error de tipo')
            console.log(error.stack)}
        else if(error instanceof RangeError){
            console.log('Erro de range')
            console.log(error.stack)}
    } finally{
        console.log('finally')
    }
    
}
console.log(f([1, 2], 1))