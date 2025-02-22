document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const form = document.querySelector(".signup-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;

    console.log("Form submitted:", { name, email });

    const button = form.querySelector("button");
    const originalText = button.textContent;
    button.textContent = "Thanks for joining! 🎉";
    button.style.backgroundColor = "#4CAF50";
    button.style.color = "white";

    form.reset();

    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = "";
      button.style.color = "";
    }, 3000);
  });
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".feature, .step").forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(element);
});
