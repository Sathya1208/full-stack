function validateform(){
    var Fname = valid1.firstname.value;
    var Lname = valid1.lastname.value;
    var Uname = valid1.username.value;
    var Num = valid1.phonenumber.value;
    var Password = valid1.password.value;
    var Cpass = valid1.confirm.value;
    var x = valid1.e.value;
    var atposition=x.indexOf("@");
    var dotposition=x.lastIndexOf(".");
    if(Fname==null || Fname=="" || Lname==null || Lname=="" || Uname==null || Uname==""){
        alert("User's firstname,lastname and username must be filled!!!");
        return false;
    }
    else if(isNaN(Num)){
        alert("Phone number should only contains numbers");
        return false;
    }
    else if(Password!=Cpass){
        alert("PASSWORD MUST BE SAME");
        return false;
    }
    else if(Password.length<6 || Password.search(/[A-Z]/) < 0 || Password.search(/[0-9]/) < 0 ){
        alert("Password must contains one uppercase letter,one number and total characters must be atleast 6");
        return false;
    }
    else if (Password.search[/0-9/] < 0) {
        alert("Your password needs a number")
        return false;
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
       alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
    return false;
    }
    else
    {
        alert("All details are correct");
        return true;
    }                    
   
}
function strengthValidate(){
    var Passwords = valid1.password.value;
    if(Passwords.length==6){
        document.getElementById("strength").innerHTML="Password is weak";
        document.getElementById("strength").style.color="red";
    }
    else if(Passwords.length>6){
        if(Passwords.match(/[A-Z]/g).length >1){
            document.getElementById("strength").innerHTML="Password is Medium";
            document.getElementById("strength").style.color="orange";
        }
        if(Passwords.match(/[A-Z]/g).length >1 && Passwords.match(/[0-9]/g).length >1){
            document.getElementById("strength").innerHTML="Password is Strong";
            document.getElementById("strength").style.color="green";
        }
    }

}
