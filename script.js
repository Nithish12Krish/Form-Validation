const form=document.getElementById('form');
const password1El=document.getElementById('password1');
const password2El=document.getElementById('password2');
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message');


let isValid=false;
let passwordsmatch=false;
function validateForm(){
    isValid=form.checkValidity();
    if(!isValid){
        message.textContent='Please fill Out all Fields';
        message.style.color='red';
        messageContainer.style.borderColor='red';
        return;
    }
    if(password1El.value === password2El.value)
    {
        passwordsmatch=true;
        password1El.style.color='green';
        password2El.style.color='green';
    }
    else{
        passwordsmatch=false;
        message.textContent='Make Sure Password Match';
        console.log(password1El,password2El);
        password1El.style.color='red';
        password2El.style.color='red';
        return;        
    }
    //If Form is Valid && Passwords March
    if(isValid && passwordsmatch){
        message.textContent='Successfully Registered';
        message.style.color='green';
        messageContainer.style.borderColor='green';
    }
}
function storeFormData(){
    const user={ 
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    };
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    //Validate Form
    validateForm();
    //If valid store data
    if(isValid && passwordsmatch){
        storeFormData();
    }
}
//Event Listener
form.addEventListener('submit',processFormData);
