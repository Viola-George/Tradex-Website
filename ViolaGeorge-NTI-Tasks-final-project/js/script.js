var registerForm = document.getElementById("form_register")


function nameValidation(input){
    console.log(input.value.length)
    var inputVal = input.value.trim()
    if(inputVal.length < 3){
        // input.nextElementSibling.innerText = "enter at least 3 character"
        handleError(input , "enter at least 3 character")

    }
    else {
        input.nextElementSibling.innerText = ""
        handleError(input)
        
    }
}
function emailValidation(input){
    // nouran_ahmed269@hotmail.com
    // regular expression on email ==> http://zparacha.com/validate-email-address-using-javascript-regular-expression

    var emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
   console.log(emailRegExp.test(input.value))

   if(emailRegExp.test(input.value) == false){
    // input.nextElementSibling.innerText = "enter a valid email"
    handleError(input , "enter a valid email")
   }
   else {
    input.nextElementSibling.innerText = ""
    handleError(input)
   }

}
function passwordValidation(input){
    // reular expression of password ==> https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    console.log(strongRegex.test(input.value))
    if(!strongRegex.test(input.value)){
        // input.nextElementSibling.innerText = ""
        handleError(input , "enter at least 1 lowercase , 1 uppercase letter , 1 number 1 special character .....")
    }
    else {
        // input.nextElementSibling.innerText = ""
        handleError(input)
    }

}

function handleError(element , msg = ""){
    element.nextElementSibling.innerText = msg
}

registerForm.addEventListener("input" , function(e){
    // console.log(e.target.id)
    if(e.target.id == "userName"){
        nameValidation(e.target)
    }
    else if (e.target.id == "userEmail"){
        emailValidation(e.target)
    }
    else if(e.target.id == "userPassword"){
        passwordValidation(e.target)
    }
})

// var inputs = document.getElementsByTagName("input")
// console.log(inputs)