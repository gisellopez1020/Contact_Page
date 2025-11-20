const modal = document.getElementById("successModal");
const modalMessage = document.getElementById("modalMessage");
const closeModalBtn = document.getElementById("closeModal");

function showModal(name, email, message) {
  modalMessage.innerHTML = `
    <strong>¡Gracias por tu mensaje, ${name}!</strong><br><br>
    <span style="font-size: 0.9em; color: #666;">
      <strong>Email:</strong> ${email}<br>
      <strong>Mensaje:</strong> ${message.substring(0, 50)}${
    message.length > 50 ? "..." : ""
  }
    </span>
  `;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  showModal(name, email, message);
  this.reset();
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

const lightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.querySelector(".lightbox-close");
const mapImage = document.getElementById("mapImage");

mapImage.addEventListener("click", function () {
  lightbox.style.display = "flex";
  lightboxImage.src = this.src;
  document.body.style.overflow = "hidden";
});

lightboxClose.addEventListener("click", function () {
  lightbox.style.display = "none";
  document.body.style.overflow = "auto";
});

lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && lightbox.style.display === "flex") {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
