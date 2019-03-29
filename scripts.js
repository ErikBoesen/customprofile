console.log('customprofile running');

function inputListener(e) {
    select = document.getElementById(e.target.getAttribute('data-target'));
    console.log(select);
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    newOption = document.createElement('option');
    newOption.value = e.target.value;
    newOption.setAttribute('data-text', e.target.value);
    newOption.textContent = e.target.value;
    select.appendChild(newOption);
    select.value = e.target.value;
    localStorage["profileentry_" + e.target.getAttribute('data-target')] = e.target.value;
}

var insertButton = document.createElement('button');
insertButton.id = 'custom-button';
insertButton.textContent = 'Enable custom responses';
console.log(insertButton);
insertButton.addEventListener('click', function() {
    var selects = document.querySelectorAll('.form_responses select');
    for (select of selects) {
        var textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.className = 'custom-input';
        textInput.setAttribute('data-target', select.id);
        // TODO: somehow support getting custom answers rather than them not being populated
        textInput.addEventListener('input', inputListener);
        textInput.value = select.value;
        var storageKey = "profileentry_" + select.id;
        if ((!textInput.value) && localStorage[storageKey]) {
            textInput.value = localStorage[storageKey];
        }
        select.parentElement.appendChild(textInput);
        select.classList.add('hidden-select');
    }
    this.disabled = true;
    this.textContent = 'Simply edit text inputs and dropdowns will update accordingly!'
});
document.getElementsByClassName('subtabs')[0].appendChild(insertButton);
console.log(document.getElementsByClassName('subtabs'));
