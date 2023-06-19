const links = document.getElementById('links');

const dicoding = document.getElementById('dicodingLink');

dicoding.innerText = 'Belajar Programming di Dicoding';

dicoding.innerHTML = '<i>Belajar Programming di Dicoding</i>';

const buttons = document.getElementsByClassName('button');

for (const button of buttons) {
    console.log(button.childres[0]);
}

for (const button of buttons) {
    button.children[0].computedStyleMap.borderRadius = '6px';
}


