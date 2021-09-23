const root = document.querySelector(':root')
const toggle = document.querySelectorAll('.radio')
const input = document.querySelectorAll('input [type="radio"]')

let theme = 'second';
root.setAttribute('color-scheme', `${theme}`)

const loadTheme = theme => {
    root.setAttribute('color-scheme', `${theme}`)
}

toggle.forEach(radio =>{ 
    radio.addEventListener('click', () => {
        let theme = radio.getAttribute('data-radio')
        loadTheme(theme)
    })
})

toggle.forEach(radio =>{ 
    radio.addEventListener('keyup', e => {
        console.log(e.target)
        let theme = radio.getAttribute('data-radio')
        loadTheme(theme)
    })
})

document.addEventListener('keydown', e =>{
    console.log(e)
    input.forEach(radio =>{ 
        let theme = radio.getAttribute('data-type')
        loadTheme(theme)
    })
})

