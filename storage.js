const formEl = document.querySelector('.contact-form');
const userName = formEl.querySelector('#name');
const userEmail = formEl.querySelector('#email');
const userMesssage = formEl.querySelector('#message');

const saveData = () => {
  const formData = {
    name: userName.value,
    email: userEmail.value,
    message: userMesssage.value,
  };
  localStorage.setItem('sessionData', JSON.stringify(formData));
};

userName.addEventListener('input', saveData);
userEmail.addEventListener('input', saveData);
userMesssage.addEventListener('input', saveData);

