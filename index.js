AOS.init();

const modalHandler = () => {
  const form = document.getElementById("form");
  const dialog = document.getElementById("favDialog");
  const openModalButton = document.getElementById("updateDetails");
  const closeButton = document.getElementById("close");
  const resetButton = document.getElementById("reset");

  openModalButton.addEventListener("click", function () {
    document.body.style.overflow = "hidden";
    dialog.showModal();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog && event.target !== form) {
      document.body.style.overflow = "";
      dialog.close();
    }
  });

  closeButton.addEventListener("click", function () {
    document.body.style.overflow = "";
    dialog.close();
  });

  resetButton.addEventListener("click", () => {
    const { name, phone, comment } = form.elements;
    name.value = "";
    phone.value = "";
    comment.value = "";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(
      e.currentTarget.elements.name.value,
      e.currentTarget.elements.phone.value,
      e.currentTarget.elements.comment.value
    );
  });
};

modalHandler();
