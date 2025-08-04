const form = document.getElementById('form-add');
const input = form.querySelector('input');
const ul = form.querySelector('ul');
const removeIcons = document.querySelectorAll('img.remove'); // Seleciona todas as imagens com classe 'remove'

removeIcons.forEach((icon) => {
  icon.addEventListener('click', function () {
    const li = this.closest('li');
    if (li) {
      li.remove();
    }
  });
});

form.addEventListener('submit', function (event) {
  event.preventDefault(); // evita o recarregamento da página

  const valor = input.value.trim();

  if (valor !== '') {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const img = document.createElement('img');

    checkbox.type = 'checkbox';
    checkbox.name = 'item';
    checkbox.value = valor.toLowerCase();
    checkbox.id = valor.toLowerCase();

    img.src = './assets/icons/lixeira.svg';
    img.alt = 'remover';

    const imgRemove = document.querySelector('img');
    imgRemove.classList.add('remove');

    label.setAttribute('for', checkbox.id);
    label.appendChild(checkbox);
    label.append(` ${valor}`);

    li.appendChild(label);
    li.appendChild(img);

    ul.appendChild(li);

    input.value = '';
  }
});
