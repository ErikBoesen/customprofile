console.log('customprofile running');

function setSelect(select, value) {
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    newOption = document.createElement('option');
    newOption.value = value;
    newOption.setAttribute('data-text', value);
    newOption.textContent = value;
    select.appendChild(newOption);
    select.value = value;
}

function inputListener(e) {
    select = document.getElementById(e.target.getAttribute('data-target'));
    setSelect(select, e.target.value);
    localStorage["profileentry_" + select.id] = e.target.value;
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
            setSelect(select, localStorage[storageKey]);
        }
        select.parentElement.appendChild(textInput);
        select.classList.add('hidden-select');
    }
    this.disabled = true;
    this.textContent = 'Simply edit text inputs and dropdowns will update accordingly!'
});
document.getElementsByClassName('subtabs')[0].appendChild(insertButton);
console.log(document.getElementsByClassName('subtabs'));
