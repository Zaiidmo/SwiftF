//Hamburger Menu

const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navigation.classList.toggle("active");
});

//dropdown function
function myDropDown() {
  document.getElementById('dropdown').classList.toggle('show'); 
}

//Collapsible FAQ 
var coll = document.querySelectorAll(".collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("coll");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//Collapsible Services

var service = document.querySelector(".services-coll");
var i;

service.addEventListener("click", function() {
  this.classList.toggle("coll");
  var moreservices = this.nextElementSibling;
  if (moreservices.style.display === "grid") {
        moreservices.style.display = "none";
    } else {
      moreservices.style.display = "grid";
    }
  });

  //Modal for Services 

  var btn = document.querySelectorAll(".modal-btn");
  var modal = document.querySelectorAll(".modal");
  var span = document.querySelectorAll(".close");
  
  for (let i = 0; i < modal.length; i++) {
    btn[i].addEventListener("click", function(event) {
      modal[i].style.display = "block";
    });
  
    span[i].addEventListener("click", function(event) {
      modal[i].style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal[i]) {
        modal[i].style.display = "none";
      }
    });
  }

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
    if (phoneInput.value.trim() === '' || !/^\d+$/.test(phoneInput.value)) {
      alert('Please enter a valid phone number');
      return false;
    }
  
    // Check if the email is valid using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
  

  
  