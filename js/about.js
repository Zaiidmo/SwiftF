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

//Testimonials Carousel 
const slider = document.querySelector(".clients_slider");
const clients = document.querySelectorAll(".client");
const nextbtn = document.querySelector(".next");
const prvbtn = document.querySelector(".previous");

let index = 0;
let move = 0;
const slideWidth = 750;

nextbtn.addEventListener("click", function() {
  
  if(index < clients.length - 2){
    index++;
    move += slideWidth ;
  } else {
    index = 0;
    move = 0 }
  slider.style.transform = `translateX(${-move}px)`;
});
prvbtn.addEventListener("click", function() {
  if (index > 0) {
    index--;
    move -= slideWidth;
  } else {
    index = clients.length - 2;
    move = index * slideWidth;
  }
  slider.style.transform = `translateX(${-move}px)`;
});