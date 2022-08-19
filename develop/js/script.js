const form = document.querySelector('[data-form-main]');
const inputEmail = document.querySelector('[data-input-email]');
const errorIcon = document.querySelector('[data-error-icon]');
const errorText = document.querySelector('[data-error-text]');

const handleSubmit = (e) => {
  // check if email is valid
  const isValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      inputEmail.value.trim()
    );

  if (!isValid) {
    // prevent form from submitting
    e.preventDefault();

    // show errors
    errorIcon.classList.remove('hide');
    errorText.classList.remove('hide');
    inputEmail.classList.add('error');
  }
};

form.addEventListener('submit', handleSubmit);
