const root = document.querySelector(':root')
const toggle = document.querySelectorAll('.radio')
const input = document.querySelectorAll('input')

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

input.forEach(button => {
    //console.log(button.checked)
    button.addEventListener('change', e=>{
        let radio = e.target;
        theme = button.getAttribute('data-type');
        loadTheme(theme)
    })
    
})