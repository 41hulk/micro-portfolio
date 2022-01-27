function validateEmail(form) {
  // eslint-disable-next-line no-underscore-dangle
  const email = form.elements._replyto.value;
  const emailRegex = /^([a-z0-9_-]+)@([a-z0-9_-]+).((([a-z]){3})|((([a-z]){3}).(([a-z]){1,3})))$/;
  return emailRegex.test(email);
}

const contactForm = document.forms[0];

contactForm.addEventListener('submit', (event) => {
  const checkEmail = validateEmail(contactForm);

  if (!checkEmail) {
    const errorMsg = document.querySelector('.error-msg');
    errorMsg.style.display = 'block';
    event.preventDefault();
  }
});