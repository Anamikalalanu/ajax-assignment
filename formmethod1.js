function validate(){
    if(document.getElementById('fullname').value==''){
        document.getElementById('error1').innerHTML='please enter your name'
    }
    else if(document.getElementById('mail').value==''){
        document.getElementById('error2').innerHTML='please enter your email id'
    }
    else if(document.getElementById('password').value==''){
        document.getElementById('error3').innerHTML='please enter your password'
    }
    else if(document.getElementById('district').value==''){
        document.getElementById('error4').innerHTML='please select your district'
    }
    else{
        document.getElementById('registration').submit()
    }
}