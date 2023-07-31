const button = document.querySelector('.button')

button.addEventListener('click', (event) => {
    event.preventDefault()
    let inputEmail = document.querySelector('input').value
    let msgError = document.querySelector('.error')
    console.log(inputEmail, msgError)
    let errorIcon = document.querySelector('.error-icon')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //expressão regular para verificar o formato do email

    if(inputEmail && emailRegex.test(inputEmail)){
        msgError.classList.add('hidden')
        msgError.classList.remove('show')
        errorIcon.classList.add('hidden')
        errorIcon.classList.remove('show')
    }else{
        msgError.classList.remove('hidden')
        msgError.classList.add('show')
        errorIcon.classList.remove('hidden')
        errorIcon.classList.add('show')
    }
})