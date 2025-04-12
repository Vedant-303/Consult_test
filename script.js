window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgressBar").style.width =
    scrollPercent + "%";
});

document.getElementById("hamburger").addEventListener("click", function () {
  const navItems = document.getElementById("navItems");
  navItems.classList.toggle("active");
});

const phoneBtn = document.getElementById("phoneBtn");
const phoneModal = document.getElementById("phoneModal");

phoneBtn.addEventListener("click", function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = "tel:8856984024";
  } else {
    phoneModal.style.display = "flex";
  }
});

function closeModal() {
  phoneModal.style.display = "none";
}

window.addEventListener("click", function (e) {
  if (e.target === phoneModal) {
    closeModal();
  }
});

const formModal = document.getElementById("formModal");

document.querySelector(".bubble.form").addEventListener("click", () => {
  formModal.style.display = "flex";
});

function closeFormModal() {
  formModal.style.display = "none";
}

window.addEventListener("click", function (e) {
  if (e.target === formModal) {
    closeFormModal();
  }
});

function toggleIndianFields() {
  const selected = document.querySelector(
    'input[name="entry.2130370052"]:checked'
  ).value;
  document.getElementById("indianFields").style.display =
    selected === "Indian" ? "block" : "none";
}

function toggleScoreField() {
  const selected = document.querySelector(
    'input[name="entry.2032176057"]:checked'
  ).value;
  document.getElementById("scoreSection").style.display =
    selected === "Yes" ? "block" : "none";
}

function showSuccessPopup() {
  document.getElementById("successPopup").style.display = "flex";
}

function closeSuccessPopup() {
  document.getElementById("successPopup").style.display = "none";
}

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const googleFormURL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSest1uH1o-YqAxpEirNZ932A7r0XhpAIXF-SJax7cQUORJV3Q/formResponse";

  fetch(googleFormURL, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  })
    .then(() => {
      form.reset();
      closeFormModal();
      toggleIndianFields();
      toggleScoreField();
      showSuccessPopup();
    })
    .catch((error) => {
      console.error("Google Form Error:", error);
    });
});

toggleIndianFields();
toggleScoreField();

gsap.from("nav", {
  y: -200,
  duration: 1,
});

gsap.from(".big-text, .small-text, .get-in-touch-btn", {
  x: -1000,
  delay: 0.5,
  duration: 1.2,
});

gsap.from(".lower-text", {
  opacity: 0,
  delay: 1.2,
  duration: 2,
});

gsap.from(".hero-img", {
  x: 1000,
  delay: 0.5,
  duration: 1.2,
});

gsap.from(".service-one", {
  x: -1000,
  duration: 1.5,
  delay: 1,
  scrollTrigger: ".service-one",
});

gsap.from(".service-two", {
  x: 1000,
  duration: 1.5,
  delay: 1,
  scrollTrigger: ".service-two",
});

gsap.from(".services-text", {
  opacity: 0,
  scale: 0,
  duration: 1,
  scrollTrigger: ".services-text",
});

gsap.from(".service-three", {
  x: -1000,
  duration: 1.5,
  delay: 1,
  scrollTrigger: ".service-three",
});

gsap.from(".service-four", {
  x: 1000,
  duration: 1.5,
  delay: 1,
  scrollTrigger: ".service-four",
});

gsap.from(".stats .text", {
  x: -1000,
  duration: 1.2,
  scrollTrigger: ".stats .text",
});

gsap.from(".bubbleHolder .animBubble1", {
  x: 1000,
  delay: 1.2,
  duration: 1.5,
  borderRadius: 0,
  rotate: 360,
  scrollTrigger: ".bubbleHolder .animBubble1",
});

gsap.from(".bubbleHolder .animBubble2", {
  x: 1000,
  delay: 1.2,
  duration: 1.5,
  borderRadius: 0,
  rotate: 360,
  scrollTrigger: ".bubbleHolder .animBubble2",
});

gsap.from(".bubbleHolder .animBubble3", {
  x: 1000,
  delay: 1.2,
  duration: 1.5,
  borderRadius: 0,
  rotate: 360,
  scrollTrigger: ".bubbleHolder .animBubble3",
});

gsap.from(".about .text", {
  x: -1000,
  duration: 1.2,
  scrollTrigger: ".about .text",
});

gsap.from(".scrolling-images", {
  opacity: 0,
  delay: 1,
  duration: 3,
  scrollTrigger: ".scrolling-images",
});

gsap.from(".contact .text", {
  x: -1000,
  duration: 1.2,
  scrollTrigger: ".contact .text",
});

gsap.from(".form", {
  x: 1000,
  delay: 1.2,
  duration: 1.5,
  borderRadius: 0,
  rotate: 360,
  scrollTrigger: ".form",
});

gsap.from(".phone", {
  x: 1000,
  delay: 1.2,
  duration: 1.5,
  borderRadius: 0,
  rotate: 360,
  scrollTrigger: ".phone",
});

gsap.from(".whatsapp", {
  x: 1000,
  delay: 1.2,
  duration: 1.5,
  borderRadius: 0,
  rotate: 360,
  scrollTrigger: ".whatsapp",
});

gsap.from(".footer", {
  opacity: 0,
  duration: 1,
  scrollTrigger: ".footer",
});
