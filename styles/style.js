const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navigation.classList.toggle("active");
})