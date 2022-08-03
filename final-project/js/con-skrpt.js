var topBtn = document.getElementById("topBtn")
window.addEventListener("scroll" , function(){
   // console.log("wndow is scrolling")
    if(document.documentElement.scrollTop > 300) 
        topBtn.style.display= "block"
    else topBtn.style.display="none"    


})


   

    var form = document.getElementById("myForm")
form.addEventListener("input",function(e){
   
    console.log(e)
    // console.log(e.target.elements[0].value)
     console.log(e.target.id)
    switch (e.target.id) {
        case "userName":
        case "userLastName":
        case "masara":
            console.log(e.target.value)
            nameValidation(e.target)
            break;
        case "userEmail":
            emailValidation(e.target)

            break;
        case "userpass":
            passwordValidation(e.target)
            break
    }

  })




function nameValidation(input) {
    var inputValue = input.value.trim()
    if (inputValue.length < 3) showError(input, "enter at least 3 character")
    else removeError(input)
}

// regular Expression of email ==> http://zparacha.com/validate-email-address-using-javascript-regular-expression
function emailValidation(input) {
    // username@domain.subdomain
    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    console.log(regExp.test(input.value))
    if (regExp.test(input.value) == false) showError(input, "enter a valid email")
    else removeError(input)

}

// regular expression of password ==> https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
function passwordValidation(input) {
    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    console.log(strongRegex.test(input.value))
    if (strongRegex.test(input.value)) removeError(input)
    else showError(input, "enter at least 1 uppercase letter , 1 lowercase letter , 1 number , 1 special charater and be 8 character")

}


function showError(inputElement, msg) {
    var error = inputElement.nextElementSibling
    error.innerText = msg
    error.classList.remove("d-none")
    error.classList.add("text-danger")
}

function removeError(inputElement) {
    var error = inputElement.nextElementSibling
    error.classList.add("d-none")
}

function validateForm() {

   
 var finshlabe=document.getElementById("finshlabe")
 var x = document.forms["myFormmm"]["fname"].value; 
    if (x == "") {
        showError(document.forms["myFormmm"]["fname"], "this fieldis required")
        
    }


    var z = document.forms["myFormmm"]["email"].value;
    if (z == "") {
        showError(document.forms["myFormmm"]["email"], "this fieldis required")
       
    }
    var y= document.forms["myFormmm"]["message"].value;
    if (y == "") {
        showError(document.forms["myFormmm"]["message"], "this fieldis required")
       
    }


    var n = document.forms["myFormmm"]["passwerd"].value;
    if (n == "") {
        showError(document.forms["myFormmm"]["passwerd"], "this fieldis required")
       
    } 
    if( n == ""|| y == "" ||z == ""|| x == ""){
   finshlabe.classList.remove("d-none")
     
    
    
    }
    else{
        finshlabe.classList.add("d-none")
    }
    
    document.getElementById("myForm").style.border = "2px solid yellow";
    return false
  }
 

