let first_fieldset_buttons=document.getElementById("First_fieldset")
first_fieldset_buttons.disabled=false;
let second_fieldset_buttons=document.getElementById("Second_fieldset")
second_fieldset_buttons.disabled=true;
let third_fieldset_buttons=document.getElementById("Third_fieldset")
third_fieldset_buttons.disabled=true;
document.getElementById("newuser").addEventListener("click",function(){
    first_fieldset_buttons.disabled=true;
    second_fieldset_buttons.disabled=false;
});
document.getElementById("existinguser").addEventListener("click",function(){
    first_fieldset_buttons.disabled=true;
    third_fieldset_buttons.disabled=false;
});
document.getElementById("login1").addEventListener("click",function(){
    localStorage.setItem("username",document.getElementById("username1").value);
    localStorage.setItem("password",document.getElementById("password1").value);
    alert("Welcome "+document.getElementById("username1").value);
});
document.getElementById("login2").addEventListener("click",function(){
    if(document.getElementById("username2").value===localStorage.getItem("username")
    &&document.getElementById("password2").value===localStorage.getItem("password")){
        alert("Welcome back "+document.getElementById("username2").value);
    }
    else{
        alert("Invalid");
    }
});
