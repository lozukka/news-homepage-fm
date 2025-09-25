const openBtn = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-nav");
const mobileNavWrapper = document.getElementById("mobile-nav-wrapper");

openBtn.addEventListener("click", (event) => {
  mobileNavWrapper.style.display = "flex";
  document.querySelector("nav").classList.add("show");
});
closeBtn.addEventListener("click", (event) => {
  mobileNavWrapper.style.display = "none";
  document.querySelector("nav").classList.remove("show");
});
//listen to windows-width -> change to mobile nav
