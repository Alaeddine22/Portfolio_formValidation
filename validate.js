function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePwd(pwd){
    var lower = /^(?=.*[a-z])/;
    var upper=/^(?=.*[A-Z])/;
    var num=/^(?=.*[0-9])/;
    var char=/^(?=.*[!@#\$%\^&\*])/;
    var len=/^(?=.{8,})/;
    return (lower.test(pwd) && upper.test(pwd) && num.test(pwd) && char.test(pwd) && len.test(pwd));

}

function validate() {
    let  lname=document.getElementById('lname');
    let name=document.getElementById('name');
    let mail=document.getElementById('email');
    let msg=document.getElementById('msg');
    let pwd=document.getElementById('pwd');
    if(name.value === '')
        {
            alert("Please enter your Name");
            name.focus();
            return false;
        }
    if(lname.value === '')
        {
            alert("Please enter your Last Name");
            lname.focus();

            return false;
        }
    if(!validateEmail(email.value))
        {
            alert("Please enter a correct adress");
            mail.focus();
            return false;
        }
    if(msg.value === '')
        {
            alert("Please enter a message");
            msg.focus();
            return false;
        }
    if(!validatePwd(pwd.value))
        {
            alert("Please enter a correct password");
            pwd.focus();
            return false;
        }
    
  return true;
}

  $("#form").submit(function(e)
            {
                if(!validate()){
                e.preventDefault();
                }
                else
                    alert("Message submitted Thanks :D");
        });


