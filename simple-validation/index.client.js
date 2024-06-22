window.requestIdleCallback(start);

async function start() {
  //   const form = Object.fromEntries(new FormData($form));

  for (let $ of $form.elements) {
    $.addEventListener("invalid", (ev) => {
      ev.preventDefault();
      checkValidation($);
      document.querySelector("input:invalid").focus();
    });
    $.addEventListener("blur", () => checkValidation($));
  }

  $form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    for (let $ of $form.elements) {
      checkValidation($);
    }
  });

  $form.elements.nice.addEventListener("input", (ev) => {
    if (ev.target.value.toLowerCase() !== "something nice") {
      ev.target.setCustomValidity('Please write "something nice');
    } else {
      ev.target.setCustomValidity("");
    }
  });
}

let $form = document.querySelector("form");

function checkValidation($input) {
  let $error = document.getElementById($input.name + "-error");

  let $label = $input.closest("label");

  $error.hidden = $input.validity.valid;

  $label.classList.toggle("invalid", !$input.validity.valid);

  if ($input.validity.valid) {
    $input.removeAttribute("aria-invalid");

    $input.removeAttribute("aria-errormessage");

    $error.textContent = "";
  } else {
    $input.setAttribute("aria-invalid", "true");

    $error.textContent = $input.validationMessage;
  }
}
