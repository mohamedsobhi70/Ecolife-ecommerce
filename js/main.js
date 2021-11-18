// calculate discount
let oldPrice = document.querySelectorAll(".old-price span");
let newPrice = document.querySelectorAll(".new-price span");
let discount = document.querySelectorAll(".discount");
for (let i = 0; i < oldPrice.length; i++) {
  discount[i].innerHTML =
    "- " +
    (
      ((+oldPrice[i].innerHTML - newPrice[i].innerHTML) /
        +oldPrice[i].innerHTML) *
      100
    ).toFixed(2) +
    "%";
}
// end discount
// scrolltop
let scrolBtn = document.querySelector(".scrol-top");
window.onscroll = function () {
  if (window.scrollY > 300) {
    if (scrolBtn) {
      scrolBtn.style.display = "inline-block";
    document.querySelector(".navbar").classList.add("fixed-top");
    document.querySelector(".navbar").classList.add("bg-white");
    }
  } else {
   if (scrolBtn) {
    scrolBtn.style.display = "none";
    document.querySelector(".navbar").classList.remove("fixed-top");
    document.querySelector(".navbar").classList.remove("bg-white");
   }
  }
};
if (scrolBtn) {
  scrolBtn.addEventListener("click", () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });
}
// end scrol
let productDetails = document.querySelectorAll("button.product-details");
productDetails.forEach((it) => {
  it.addEventListener("click", function () {
    location.href = "pages/productdetails.html";
  });
});
