listnum = []
var ma = 0
var me = 0
var so = 0

function analisador() {
    let num = document.getElementById('num')
    let selnum = document.getElementById('selnum')

    if (num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        let valor = Number(num.value)
        if (listnum.indexOf(valor) != -1) {
            alert('Valor inválido ou já encontrado na lista.')
        } else {
            if (listnum.length == 0) {
                ma = valor
                me = valor
            } else {
                if (valor > ma) {
                    ma = valor
                } else if (valor < me) {
                    me = valor
                }
            }
            listnum.push(valor)
            let item = document.createElement('option')
            item.value = `num${valor}`
            item.text = `Valor ${valor} adicionado.`
            selnum.appendChild(item)
            so += valor
        }
    }
}

function finalizar() {
    let res = document.getElementById('res')
    let p = document.createElement('p')
    res.innerHTML = ''
    p.innerHTML = `<p>Ao todo, temos ${listnum.length} números cadastrados.</p>
    <p>O maior valor informado foi ${ma}.</p>
    <p>O menor valor informado foi ${me}.</p>
    <p>Somando todos os valores, temos ${so}.</p>
    <p>A média dos valores digitados é ${so / listnum.length}.</p>`
    res.appendChild(p)
}