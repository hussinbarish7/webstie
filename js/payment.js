const form = document.getElementById("paymentForm");
const successBox = document.getElementById("successBox");
const methods = document.querySelectorAll(".method");
const cardNumberInput = document.getElementById("cardNumber");
const expiryInput = document.getElementById("expiry");

methods.forEach((btn) => {
  btn.addEventListener("click", () => {
    methods.forEach((m) => m.classList.remove("active"));
    btn.classList.add("active");
  });
});

cardNumberInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "").slice(0, 16);
  value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
  e.target.value = value;
});

expiryInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "").slice(0, 4);
  if (value.length >= 3) {
    value = value.slice(0, 2) + "/" + value.slice(2);
  }
  e.target.value = value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const requiredIds = ["cardName", "cardNumber", "expiry", "cvv", "country"];
  const allValid = requiredIds.every((id) => {
    const el = document.getElementById(id);
    return el.value.trim() !== "";
  });

  if (!allValid) {
    alert("Please fill all fields.");
    return;
  }

  successBox.classList.remove("hidden");
  form.reset();
});
