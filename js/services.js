//Collapsible Services

var service = document.querySelector(".services-coll");
var i;
console.log(service)

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
