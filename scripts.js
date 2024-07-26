document.querySelectorAll(".gallery img").forEach((image) => {
  image.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${image.src}" alt="${image.alt}">
            </div>
        `;
    document.body.appendChild(modal);

    const closeModal = () => {
      modal.remove();
    };

    modal.querySelector(".close").addEventListener("click", closeModal);
    modal.addEventListener("click", closeModal);
  });
});
