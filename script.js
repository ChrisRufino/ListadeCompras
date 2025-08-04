const form = document.getElementById('form-add');
const input = form.querySelector('input');
const ul = form.querySelector('ul');

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

    img.src = '/assets/icons/lixeira.svg';
    img.alt = 'remover';

    label.setAttribute('for', checkbox.id);
    label.appendChild(checkbox);
    label.append(` ${valor}`);

    li.appendChild(label);
    li.appendChild(img);
    ul.appendChild(li);

    input.value = '';
  }
});

console.log('teste');
