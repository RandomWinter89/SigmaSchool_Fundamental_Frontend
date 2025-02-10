import { translate } from './language.js';

function translateText() {
    const inputSelect = document.getElementById('Language-Input').value;
    const outputSelect = document.getElementById('Language-Output').value;
    const inputText = document.getElementById('Untranslate-Input').value.trim();

    const translated = translate(inputSelect, outputSelect, inputText);

    document.getElementById('Result').style.display = 'hidden';

    if (translated === undefined) {
        document.getElementById('Translate-Output').innerHTML = 'Translation not found.';
    } else {
        document.getElementById('Translate-Output').innerHTML = `${translated}`;
        document.getElementById('Result').innerHTML = `Translation Success`;
        document.getElementById('Result').style.display = 'block';
    }
}

window.translateText = translateText;

