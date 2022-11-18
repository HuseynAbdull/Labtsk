function Login() {
    let usern=document.querySelector('.usern')
    var un_value =toString(usern.value);
    let pw=document.querySelector('.pw')
    var pw_value = pw.value;
    let mail=document.querySelector('.mail')
    var mail_value = mail.value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var usercheck = /^[A-Z][A-Za-z0-9_-]{3,19}$/;
   

    if (!re.test(mail_value) ) {
        mail.style.border = "red solid 3px";
        return false;  
    }
    else {
        
        if(!usercheck.test(un_value)){
            usern.style.border = "red solid 3px";
            return false;  
        }
        else{
            alert("done");
            return true;
        }
          
    }
    
}

  
    