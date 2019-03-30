const myContact = document.querySelector('#contact');
const contactSubject = document.querySelector('#contact_subject');
const contactName = document.querySelector('#contact_name');
const contactEmail = document.querySelector('#contact_email');
const contactPhone = document.querySelector('#contact_phone');
const contacMessage = document.querySelector('#contact_message');

const contactgenderMale = document.querySelector('#contact_genderMale');
const contactgenderFemale = document.querySelector('#contact_genderFemale');
const contactgenderNoGender = document.querySelector('#contact_genderNoGender');

myContact.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (contactSubject.value === '' || contactName.value === '' ||
        contactEmail.value === '' || contactPhone.value === '' ||
        contacMessage === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    } else {

        if (contactgenderMale.checked) {
            Gender = contactgenderMale.value;
        } else if (contactgenderFemale.checked) {
            Gender = contactgenderFemale.value;
        } else if (contactgenderNoGender.checked) {
            Gender = contactgenderNoGender.value;
        }

        const list = document.querySelector('#comment_submit');

        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${contactSubject.value}</td>
          <td>${contactName.value}</td>
          <td>${contactEmail.value}</td>
          <td>${contactPhone.value}</td>
          <td>${Gender}</td>
          <td>${contacMessage.value}</td>
          <td><a class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);

        contact_subject.value = '';
        contact_name.value = '';
        contact_email.value = '';
        contact_phone.value = '';
        contact_message.value = '';
    }
}

document.querySelector('#comment_submit').addEventListener('click', (e) => { 
    e.target.parentElement.parentElement.remove();
});