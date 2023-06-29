let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm-password')
let submit = document.getElementById('submit-btn')
let phone = document.getElementById('phone-number')
let phoneError = document.getElementById("phone-error")
let passwordError = document.getElementById("password-error")


phone.addEventListener('input', () => {
    if (!phone.validity.patternMismatch && phone.value.length < 10) {
        // phoneError.textContent = "Enter a 10 digit number"
        phoneError.textContent = "Enter a 10 digit number"
    }
    else {
        phoneError.textContent = " "
    }
})

password.addEventListener('inp3ut', () => {
    let pw = password.value;
    let confirmPW = confirmPassword.value;

    if (pw.length <= 4) {
        passwordError.textContent = "password should be greater than 4 letters"
    }
    
    if (pw.length >= 5) {
        passwordError.textContent = " "
    }

    else if (pw === confirmPW && pw.length >= 5) {
        passwordError.textContent = ("Password created successfully")
    }
  

})

confirmPassword.addEventListener('input', () => {
    let pw = password.value;
    let confirmPW = confirmPassword.value;

    if (pw === confirmPW) {
        passwordError.textContent = ("Password created successfully")
    }
    else {
        passwordError.textContent = ("Password donot match")
    }

})



