function validate(){
    if(document.getElementById('fullname').value==''){
        document.getElementById('error1').innerHTML='please enter your name'
        return false
    }
    else if(document.getElementById('mail').value==''){
        document.getElementById('error2').innerHTML='please enter your email id'
        document.getElementById('error1').innerHTML=''
        return false
    }
    else if(document.getElementById('password').value==''){
        document.getElementById('error3').innerHTML='please enter your password'
        document.getElementById('error1').innerHTML=''
        document.getElementById('error2').innerHTML=''
        return false
    }
    else if(document.getElementById('dist').value==''){
        document.getElementById('error4').innerHTML='please select your district'
        return false
    }
    else{
       // document.getElementById('registration').submit()
        return true
    }
}