console.log('customprofile running');

function changeListener(e) {
    console.log('Changed');
    select = document.getElementById(select.getAttribute('data-target'));
    for (option of select.childNodes) {
        select.removeChild(option);
    }
    newOption = document.createElement('option');
    newOption.value = e.target.value;
    newOption.setAttribute('data-text', e.target.value);
    newOption.textContent = e.target.value;
}

var insertButton = document.createElement('button');
insertButton.textContent = 'Enable custom responses';
console.log(insertButton);
insertButton.addEventListener('click', function() {
    var selects = document.querySelectorAll('.form_responses select');
    for (select of selects) {
        var textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.setAttribute('data-target', select.id);
        // TODO: somehow support getting custom answers rather than them not being populated
        textInput.value = select.value;
        textInput.addEventListener('input', changeListener);
        select.parentElement.appendChild(textInput);
    }
});
document.getElementsByClassName('subtabs')[0].appendChild(insertButton);
console.log(document.getElementsByClassName('subtabs'));
