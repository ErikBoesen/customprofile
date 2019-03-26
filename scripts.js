var selects = document.querySelectorAll('.form_responses select');
console.log(selects);

function changeListener(e) {
    select = document.getElementById(select.getAttribute('data-target'));
    for (option of select.childNodes) {
        select.removeChild(option);
    }
    select.value = e.target.value;
}

for (select of selects) {
    var textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.setAttribute('data-target', select.id);
    // TODO: somehow support getting custom answers rather than them not being populated
    textInput.value = select.value;
    textInput.addEventListener('change', changeListener);
    select.parentElement.appendChild(textInput);
}

console.log('customprofile running');
