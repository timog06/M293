function openPortfolioPage() {
  window.location.href = "portfolio.html";
}

function openAboutMePage() {
  window.location.href = "aboutme.html";
}

function openContactPopup() {
  var popup = document.getElementById("contactPopup");
  popup.style.display = "block";
}

function closeContactPopup() {
  var popup = document.getElementById("contactPopup");
  var form = popup.querySelector("form");
  form.reset(); // Reset the form fields to their initial state
  popup.style.display = "none";
}

function openAusbildungPage() {
  window.location.href = "ausbildung.html";
}

window.onload = function () {
  const container = document.querySelector(".container");
  const dots = document.querySelectorAll(".dot");
  let scrolling = false;

  container.addEventListener("scroll", function () {
    if (!scrolling) {
      scrolling = true;

      const currentPage = Math.round(container.scrollTop / window.innerHeight);
      console.log("Current page:", currentPage + 1);

      dots.forEach((dot, index) => {
        if (index === currentPage) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });

      scrolling = false;
    }
  });

  container.dispatchEvent(new Event("scroll"));
};