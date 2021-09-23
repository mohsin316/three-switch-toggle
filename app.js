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


document.addEventListener('keydown', e =>{
    button = e.target;
    console.log(button.getAttribute('data-type'));
    theme = button.getAttribute('data-type');
    if(!theme){
        theme='second'
    }
    loadTheme(theme)

    
})

