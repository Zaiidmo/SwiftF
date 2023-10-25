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

// Search box
const search = document.querySelector(".search-btn");
search.addEventListener("click", function(){ 
    document.querySelector('.search-box').classList.toggle("active");
})


 