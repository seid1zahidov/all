let ok = document.getElementById('okay')
let userval = document.getElementById('user')
let userregex = document.getElementById('user')
ok.onclick = function() {
    let h1 = document.getElementById('h1')
    if(userval.value == ""){
        h1.innerHTML = "Plese write correctly"
        return false;
    }
    if(userval.value.length < 4){
        h1.innerHTML = "Username is uncorrect"
        return false;
    }
    if(h1 = validateForm){
        alert('duzgun yazdin')
    }
    else{
        alert('pasword yanlisdi')
    }
    let mail = document.getElementById('mail')
    if(mail = ValidateEmail){
        alert(' mail duzgundu')
    }
    else{
        alert('mail duzgun deil')
    }
    
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
function validateForm(){
    let nameRegex = /^[a-zA-Z\-]+$/;
    let validfirstUsername = document.frm.firstName.value.match(nameRegex);
    if(validUsername == null){
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        document.frm.firstName.focus();
        return false;
    }
}

