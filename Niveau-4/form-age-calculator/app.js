let btn = document.querySelector('.js-btn');
let notification = document.querySelector('.js-alert');
let date = new Date();
let form = document.forms.ageCalculatorForm;

function age(event) {
    event.preventDefault();
    let userYear = form.naissance.value;
    console.log(userYear);
    if (userYear < 1890 || userYear > 2020) {
        notification.textContent="Âge incorrect !";
        notification.classList.replace("alert-success", "alert-danger")
    } else {
        notification.textContent = "Tu as " +  (date.getFullYear()- (Number(document.forms.ageCalculatorForm['naissance'].value))) + " ans";
        notification.classList.replace("alert-danger","alert-success");

    }
}
form.addEventListener('submit', age);