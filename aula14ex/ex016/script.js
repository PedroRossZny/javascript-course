function contar() {
    var i = window.document.querySelector('input#ini')
    var f = window.document.querySelector('input#fim')
    var p = window.document.querySelector('input#pas')
    var r = window.document.querySelector('div#res')

    r.innerHTML = ''

    if (i.value === '' || f.value === '' || p.value === '') {
        r.innerHTML = 'Impossível contar!'
        return
    }
    
    i = Number(i.value)
    f = Number(f.value)
    p = Number(p.value)

    if (p <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

    for (var c = i; c <= f; c += p) {
        r.innerHTML += `${c} 👉`
    }
    r.innerHTML += '🏁'
    }