var btnSum = document.querySelector('.btn-positive')
var btnMin = document.querySelector('.btn-negative')
var cont = 1
var valorUnitario = 119.99
var total = 0
var resultValor = document.querySelector('.result-ticket')

btnSum.addEventListener('click', () => {

    if(cont < 3) {
        cont++

        var p = document.querySelector('.result-p')
        p.innerHTML = cont

        total = valorUnitario * cont
        resultValor.innerHTML = `Valor: R$ ${total.toFixed(2)}`
    }
})

btnMin.addEventListener('click', () => {

    if(cont > 0){
        cont--

        var p = document.querySelector('.result-p')
        p.innerHTML = cont

        total = total - valorUnitario
        resultValor.innerHTML = `Valor: R$ ${total.toFixed(2)}`
    }
})

