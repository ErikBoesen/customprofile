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
}

var insertButton = document.createElement('button');
insertButton.id = 'custom-button';
insertButton.textContent = 'Enable custom responses';
console.log(insertButton);
insertButton.addEventListener('click', function() {
    var selects = document.querySelectorAll('.form_responses select');
    for (select of selects) {
        var textarea = document.createElement('textarea');
        textarea.className = 'custom-input';
        textarea.setAttribute('data-target', select.id);
        // TODO: somehow support getting custom answers rather than them not being populated
        textarea.addEventListener('input', inputListener);
        textarea.value = select.value;
        select.parentElement.appendChild(textarea);
        select.classList.add('hidden-select');
    }
    this.disabled = true;
    this.textContent = 'Simply edit text inputs and dropdowns will update accordingly!'
});
document.getElementsByClassName('subtabs')[0].appendChild(insertButton);
console.log(document.getElementsByClassName('subtabs'));
