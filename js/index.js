window.addEventListener('DOMContentLoaded', main);

function main() {
  const form = document.getElementById('wedding-form');
  form.addEventListener('submit', submitForm);
  const formTitle = document.getElementById('form-title');

  const loader = document.getElementById('loader');

  function submitForm(e) {
    e.preventDefault();
    loader.classList.remove('_hidden');

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

    const templateParams = {
      names: name.value,
      transfer: transfer.value,
      overnight_stay: overnightStay.value,
      hot_dishes: hotDishes.value,
      additional_info: additionalInfo.value,
    };

    console.log(templateParams);
    // loader.classList.add('_hidden');
    // showSubmitResult('SUCCESS');
    // showSubmitResult('FAILED');

    emailjs
      .send('service_394m6qn', 'template_xxfbs3s', templateParams)
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          showSubmitResult('SUCCESS');
        },
        function (error) {
          console.log('FAILED...', error);
          showSubmitResult('FAILED');
        }
      )
      .finally(() => loader.classList.add('_hidden'));
  }

  function showSubmitResult(result) {
    form.classList.add('_hidden');
    formTitle.classList.add('_hidden');

    const submitResult = document.getElementById('submit-result');
    const submitResultTitle = document.getElementById('submit-result-title');
    const submitResultText = document.getElementById('submit-result-text');

    switch (result) {
      case 'SUCCESS': {
        submitResultTitle.innerText = 'Спасибо!';
        submitResultText.innerText = 'Очень ждем Вас на свадьбе :)';
        submitResult.classList.add('_success');
        break;
      }
      case 'FAILED': {
        submitResultTitle.innerText = 'Ошибка!';
        submitResultText.innerText =
          'Что то пошло не так... Попробуйте еще раз';
        submitResult.classList.add('_error');
        break;
      }
    }
    submitResult.classList.remove('_hidden');
    submitResult.classList.add('_animated');
  }
}
