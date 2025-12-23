function tabuada() {
    var n = window.document.querySelector('input#num')
    var r = window.document.querySelector('select#res')
    
    c = 1

    if (n.value.length == 0) {
        alert('Por favor, digite um número!')
        return
    }

    n = Number(n.value)
    if (c == 1) {
        r.innerHTML = `<option>${n} x ${c} = ${n * c}</option>`
        c++
    }

    for (c = 2; c <= 10; c++) {
        r.innerHTML += `<option>${n} x ${c} = ${n * c}</option>`
    }
}