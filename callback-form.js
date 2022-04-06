const callbackFrom = document.querySelector(".callback-form");
const callbackRequestRecived = document.querySelector("#request-recived");
const userName = document.querySelector("#callback-form-input-name");
const userEmail = document.querySelector("#callback-form-input-email");
const userPhone = document.querySelector("#callback-form-input-phone");

userPhone.addEventListener(
    'click',
    function(){
        if(!userPhone.value.trim()){
            userPhone.value = '+380';    
        }
    }
);
userPhone.addEventListener(
    'blur',
    function(){
        if(userPhone.value ==="+380"){
            userPhone.value = '';    
        }
    }
);

callbackFrom.addEventListener("submit", function(event){
    event.preventDefault();
    
    
    
    let hasError =false;
    if(!userName.value.trim()){
        userName.classList.add("callback-form-input-error");
        hasError = true;
    }
    else{
        userName.classList.remove("callback-form-input-error");
    }

    if(!userEmail.value.trim()||!isEmailValid(userEmail.value)){
        userEmail.classList.add("callback-form-input-error");
        hasError = true;
    }
    else{
        userEmail.classList.remove("callback-form-input-error");
    }

    if(!userPhone.value.trim()||!isPhoneValid(userPhone.value)){
        userPhone.classList.add("callback-form-input-error");
        hasError = true;
    }
    else{
        userPhone.classList.remove("callback-form-input-error");
    }

    if(hasError)
    {
        return;
    }
    

    // send to google-docs
    var http = new XMLHttpRequest();
        var url = "https://script.google.com/macros/s/AKfycbxayqS_tNkAhuWUMweh3qLfIBpvc54pJKaciT38aEiLNGYYM8OPCQO2UE8hvlyZFwoD/exec";
        var params = "name="+userName.value.replace(/\s+/g,'')+"&email="+userEmail.value.replace(/\s+/g,'')+"&phone="+userPhone.value.replace(/\s+/g,'');
        http.open("GET", url+"?"+params, true);
        http.send();
        
        
        userName.value = "";
        userEmail.value = "";
        userPhone.value = "";
    callbackRequestRecived.classList.add("modal-active");
    setTimeout(function(){
        callbackRequestRecived.classList.remove("modal-active");
    },2000);
});
function isPhoneValid(phone = '') {
    const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;

    return phone.match(regexp);
}

function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}