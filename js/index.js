window.addEventListener('DOMContentLoaded', main);

function main() {
  const form = document.getElementById('wedding-form');
  form.addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const transfer = document.getElementById('transfer');
    const overnightStay = document.getElementById('overnight-stay');
    const hotDishes = document.getElementById('hot-dishes');
    const additionalInfo = document.getElementById('additional-info');

    const errorName = document.querySelector('#name + .form__error');

    console.log(name.value);

    if (name.value.trim() === '') {
      name.classList.add('_error');
      errorName.classList.add('_displayed');
      return;
    } else {
      name.classList.remove('_error');
      errorName.classList.remove('_displayed');
    }
  }
}
