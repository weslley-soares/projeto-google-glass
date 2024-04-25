function menu() {
    let menu = document.getElementById('menu')
    let burguer = document.getElementById('burguer')
    if(menu.style.display == 'block') {
        menu.style.display = 'none'
        burguer.style.background = 'transparent'
    } else {
        menu.style.display = 'block'
        burguer.style.background = '#013440'
    }
}