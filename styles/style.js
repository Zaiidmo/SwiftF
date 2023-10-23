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