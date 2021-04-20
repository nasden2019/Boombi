
// FOOTER
const form = document.querySelector('form');
const spanEmail = document.querySelector('.spanEmail');
const spanText = document.querySelector('.spanText');
const btn = document.querySelector('.botonaco');

btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (form.email.value.trim() === '') {
        form.email.style = "1px solid red";
        spanEmail.textContent = 'Write your email';
        spanEmail.classList.add('error')
    } else {
        form.email.style.border = '1px solid green';
        spanEmail.classList.add('success')
        spanEmail.textContent = 'Nice!'
    }

    if (form.textA.value.trim() === '' || form.textA.length < 6) {
        form.textA.style = '1px red solid';
        spanText.textContent = 'Please write your comment';
        spanText.classList.add('error');
    } else {
        form.textA.style.border = '1px solid green';
        spanText.classList.add('success')
        spanText.textContent = 'Oh Yeah!'
    }


})
