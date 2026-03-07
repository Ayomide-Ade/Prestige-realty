/*
  form.js
  Handles lead form validation, submission state, and listing save buttons.
*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");
  const submitBtn = document.getElementById("formSubmit");
  const formInner = document.getElementById("formInner");
  const successMsg = document.getElementById("formSuccess");

  // Cache required field references to avoid repeated DOM lookups
  const fields = {
    fname: document.getElementById("fname"),
    lname: document.getElementById("lname"),
    email: document.getElementById("email"),
    intent: document.getElementById("intent"),
  };

  if (form) {
    form.addEventListener("submit", handleSubmit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    clearErrors();

    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach(showError);
      return;
    }

    // Simulate async submission , replace with real fetch() call when backend is ready
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showSuccess();
    }, 1500);
  }

  // Returns an array of { field, msg } objects for any failing fields
  function validateForm() {
    const errors = [];

    if (!fields.fname.value.trim()) {
      errors.push({ field: fields.fname, msg: "First name is required." });
    }
    if (!fields.lname.value.trim()) {
      errors.push({ field: fields.lname, msg: "Last name is required." });
    }
    if (!fields.email.value.trim()) {
      errors.push({ field: fields.email, msg: "Email address is required." });
    } else if (!isValidEmail(fields.email.value.trim())) {
      errors.push({ field: fields.email, msg: "Please enter a valid email." });
    }
    if (!fields.intent.value) {
      errors.push({ field: fields.intent, msg: "Please select an option." });
    }

    return errors;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showError({ field, msg }) {
    field.classList.add("error");
    const group = field.closest(".form_group");
    if (!group) return;
    group.classList.add("has-error");
    const errEl = group.querySelector(".form_error-msg");
    if (errEl) errEl.textContent = msg;
  }

  function clearErrors() {
    document.querySelectorAll(".form_group").forEach((group) => {
      group.classList.remove("has-error");
    });
    document.querySelectorAll(".error").forEach((el) => {
      el.classList.remove("error");
    });
  }

  // Clear field error as soon as the user starts correcting it
  document
    .querySelectorAll("#leadForm input, #leadForm select")
    .forEach((field) => {
      field.addEventListener("input", () => {
        field.classList.remove("error");
        const group = field.closest(".form_group");
        if (group) group.classList.remove("has-error");
      });
    });

  function setLoading(isLoading) {
    if (!submitBtn) return;
    submitBtn.classList.toggle("loading", isLoading);
    submitBtn.disabled = isLoading;
  }

  function showSuccess() {
    if (formInner) formInner.style.display = "none";
    if (successMsg) successMsg.classList.add("visible");
  }

  // Wishlist toggle
  document.querySelectorAll(".listing-card_save").forEach((btn) => {
    btn.addEventListener("click", toggleSave);
  });

  function toggleSave(e) {
    e.stopPropagation();
    const isSaved = this.classList.toggle("saved");
    this.textContent = isSaved ? "♥" : "♡";
    this.setAttribute(
      "aria-label",
      isSaved ? "Remove from saved" : "Save listing",
    );
  }
});
