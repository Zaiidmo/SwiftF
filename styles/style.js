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
      console.log("it's working");
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
  
  

// const dialog = document.querySelectorAll("dialog");
// const showButton = document.querySelectorAll("dialog + button");
// const closeButton = document.querySelectorAll("dialog button");
// var i;

// for(i=0; i<dialog.length; i++){
//   showButton[i].addEventListener("click", () => {
//     dialog.showModal();
//   });
// }