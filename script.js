const openBtn = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-nav");
const mobileNavWrapper = document.getElementById("mobile-nav-wrapper");

openBtn.addEventListener("click", () => {
  mobileNavWrapper.style.display = "flex";
  document.querySelector("nav").classList.add("show");
});
closeBtn.addEventListener("click", () => {
  mobileNavWrapper.style.display = "none";
  document.querySelector("nav").classList.remove("show");
});
//listen to windows-width -> change to mobile nav
