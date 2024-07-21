let groceryForm = document.getElementById('grocery');
let groceryInput = document.getElementById('writelist');
let groceryList = document.getElementById('list');

groceryForm.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    let data = groceryInput.value.trim(); // Trim whitespace from input

    if (data === '') {
        alert('Please enter a grocery item.');
        return;
    }

    let item = document.createElement('li');
    let text = document.createElement('span');
    text.textContent = data;

    let rmvBtn = document.createElement('span');
    rmvBtn.textContent = ' ❌';
    rmvBtn.classList.add('remove');

    let tickIcon = document.createElement('span');
    tickIcon.textContent = '✓';
    tickIcon.classList.add('tick');

    item.append(text, rmvBtn, tickIcon);
    groceryList.appendChild(item);

    rmvBtn.addEventListener('click', function() {
        item.remove();
    });

    item.addEventListener('click', function() {
        item.classList.toggle('done');
        item.classList.toggle('selected'); // Toggle selected class on click
    });

    groceryInput.value = '';
}
