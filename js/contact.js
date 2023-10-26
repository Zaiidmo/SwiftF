 // Form Validation
  const nameInput = document.getElementById('name-error');
  const phoneInput = document.getElementById('phone-error');
  const emailInput = document.getElementById('email-error');
  const subjectInput = document.getElementById('sub-error');
  const messageInput = document.getElementById('msg-error');
  const submit = document.getElementById('submit-error');
  

  function validateName(){
    var name = document.querySelector("#name").value;
    if(name.length == 0){
      nameInput.textContent = 'Name is required';
      return false;
    } else if (!name.match(/^[A-Za-z]+(?:\s+[A-Za-z]+)+$/)){
      nameInput.textContent = 'Write the full name';
      nameInput.style.color = "red";
      return false;
    } else { 
      nameInput.textContent = 'valid';
      nameInput.style.color = "green";
      return true;
    }
  }

  function validatePhone(){
    var phone = document.querySelector("#phone").value;
    if (phone.length==0) {
      phoneInput.textContent = 'Phone number is required';
      phoneInput.style.color = "red";
      return false;
    } else if (!phone.match(/\d{10}/)){
      phoneInput.textContent = 'Invalid Phone Number';
      phoneInput.style.color = "red";
      return false;
    } else {
      phoneInput.textContent = 'Valid';
      phoneInput.style.color = "green";
      return true;
    }
  }
  function validateEmail(){
    var email = document.querySelector('#email').value;
    if (email.length === 0 ) {
      emailInput.textContent = 'E-mail is required';
      emailInput.style.color = "red";
      return false;
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
      emailInput.textContent = 'Invalid E-Mail Address';
      emailInput.style.color = "red";
      return false;
    } else {
      emailInput.textContent = 'Valid Email';
      emailInput.style.color = "green";
      return true;
    }
  }

  function validateSubject(){
    var subject = document.querySelector('#subject').value;
    if (subject.length===0){
      subjectInput.textContent = 'Subject is required';
      subjectInput.style.color = "red";
      return false;
  } else if (subject.length <5 || subject.length > 20){
    subjectInput.textContent = 'Subject must be between 5 and 20 characters long';
    subjectInput.style.color = "red";
    return false;
  } else {
    subjectInput.textContent = 'Valid Subject';
    subjectInput.style.color = "green";
    return true; 
  }
}
function validateMessage(){
  var message = document.querySelector('#message-box').value;
  let required = 100;
  let charLeft = required - message.length;

  if (message.length == 0){
    messageInput.textContent = 'Message is required';
    messageInput.style.color = "red";
    return false;
    } else if (message.length<required){
      messageInput.textContent = charLeft + ' more characters required ';
      messageInput.style.color = "red";
      return false;
    } else {
      messageInput.textContent = 'Valid Message';
      messageInput.style.color = "green";
      return true;
      }
}

function submitForm(){
  //validate all fields before submitting the form
  if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()) {
    submit.textContent = 'Please enter your informations ';
    submit.style.color = "red"
    setTimeout(function() {Submit.style.color = "none";},3000);
    return false;
  } else { alert("your form Has been submitted ")}
   
}