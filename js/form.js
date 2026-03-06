/* 
FORM.JS — Lead form validation, submission & save buttons
 */

document.addEventListener("DOMContentLoaded", () => {
  /* 
  LEAD FORM
  */
  const form = document.getElementById("leadForm");
  const submitBtn = document.getElementById("formSubmit");
  const formInner = document.getElementById("formInner");
  const successMsg = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", handleSubmit);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Clear previous errors
    clearErrors();

    // Validate fields
    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach(showError);
      return;
    }

    // Simulate async submission
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      showSuccess();
    }, 1500);
  }

  /* 
  Validation rules
   */
  function validateForm() {
    const errors = [];

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const intent = document.getElementById("intent");

    if (!fname.value.trim()) {
      errors.push({ field: fname, msg: "First name is required." });
    }
    if (!lname.value.trim()) {
      errors.push({ field: lname, msg: "Last name is required." });
    }
    if (!email.value.trim()) {
      errors.push({ field: email, msg: "Email address is required." });
    } else if (!isValidEmail(email.value.trim())) {
      errors.push({ field: email, msg: "Please enter a valid email." });
    }
    if (!intent.value) {
      errors.push({ field: intent, msg: "Please select an option." });
    }

    return errors;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /*
   Error display
   */
  function showError({ field, msg }) {
    field.classList.add("error");
    const group = field.closest(".form_group");
    if (group) {
      group.classList.add("has-error");
      const errEl = group.querySelector(".form_error-msg");
      if (errEl) errEl.textContent = msg;
    }
  }

  function clearErrors() {
    document.querySelectorAll(".form_group").forEach((group) => {
      group.classList.remove("has-error");
    });
    document.querySelectorAll(".error").forEach((el) => {
      el.classList.remove("error");
    });
  }

  /* 
  Remove error on input
  */
  document
    .querySelectorAll("#leadForm input, #leadForm select")
    .forEach((field) => {
      field.addEventListener("input", () => {
        field.classList.remove("error");
        const group = field.closest(".form_group");
        if (group) group.classList.remove("has-error");
      });
    });

  /* 
  Loading state
  */
  function setLoading(isLoading) {
    if (!submitBtn) return;
    if (isLoading) {
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
      submitBtn.querySelector(".btn-text").textContent = "Sending…";
    } else {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      submitBtn.querySelector(".btn-text").textContent = "Send My Request →";
    }
  }

  /* 
  Success state 
  */
  function showSuccess() {
    if (formInner) formInner.style.display = "none";
    if (successMsg) successMsg.classList.add("visible");
  }

  /* 
  SAVE / LIKE BUTTONS on cards
  */
  document.querySelectorAll(".listing-card_save").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // don't bubble to card click
      btn.classList.toggle("saved");
      btn.textContent = btn.classList.contains("saved") ? "♥" : "♡";
      btn.title = btn.classList.contains("saved") ? "Saved" : "Save listing";
    });
  });
});
