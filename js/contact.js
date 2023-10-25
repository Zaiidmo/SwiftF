 // Form Validation
 function validateForm() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.querySelector('.message-box');
  
    // Check if the name is not empty
    if (nameInput.value.trim() === '') {
      alert('Name cannot be empty');
      return false;
    } 
  
    // Check if the phone number is not empty and contains only numbers
    if (phoneInput.value.trim() === '' || !/^\+\d+$/.test(phoneInput.value)) {
      alert('Please enter a valid phone number');
      return false;
    }
  
    // Check if the email is valid using a simple regex
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    // Check if the subject is not empty
    if (subjectInput.value.trim() === '') {
      alert('Subject cannot be empty');
      return false;
    }
  
    // Check if the message is not empty
    if (messageInput.value.trim() === '') {
      alert('Message cannot be empty');
      return false;
    }
  
    alert('Form submitted successfully!');
    return true;
  }
  
