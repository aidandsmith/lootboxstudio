const form = document.querySelector('form');
const email = document.getElementById('clientmail');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const ccn = document.getElementById('ccn');
const cvv = document.getElementById('cvv');
const expiry = document.getElementById('expiry');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  checkInputs();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = phone => {
    const re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    return re.test(String(phone));
};

const isValidCCN = ccn => {
    const re = /^(?:\d{4} ){3}\d{4}$|^\d{16}$|^(?:\d{4} \d{6} \d{5})$|^\d{15}$/;
    return re.test(String(ccn));
};

const isValidCVV = cvv => {
    const re = /^[0-9]{3,4}$/;
    return re.test(String(cvv));
};

const isValidExpiry = expiry => {
    const re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    return re.test(String(expiry));
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const checkInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const phoneValue = phone.value.trim();
    const password2Value = password2.value.trim();
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const ccnValue = ccn.value.trim();
    const cvvValue = cvv.value.trim();
    const expiryValue = expiry.value.trim();

    if(emailValue === '') {
        setError(email, 'Email cannot be blank');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be blank');
    } else if(passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Password cannot be blank');
    } else if(password2Value !== passwordValue) {
        setError(password2, 'Passwords do not match');
    } else {
        setSuccess(password2);
    }

    if(firstnameValue === '') {
        setError(firstname, 'First name cannot be blank');
    } else {
        setSuccess(firstname);
    }

    if(lastnameValue === '') {
        setError(lastname, 'Last name cannot be blank');
    } else {
        setSuccess(lastname);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone cannot be blank');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Phone number is not valid');
    } else {
        setSuccess(phone);
    }

    if(ccnValue === '') {
        setError(ccn, 'Credit card number cannot be blank');
    } else if (!isValidCCN(ccnValue)) {
        setError(ccn, 'Credit card number is not valid');
    } else {
        setSuccess(ccn);
    }

    if(cvvValue === '') {
        setError(cvv, 'CVV cannot be blank');
    } else if (!isValidCVV(cvvValue)) {
        setError(cvv, 'CVV is not valid');
    } else {
        setSuccess(cvv);
    }

    if(expiryValue === '') {
        setError(expiry, 'Expiry date cannot be blank');
    } else if (!isValidExpiry(expiryValue)) {
        setError(expiry, 'Expiry date is not valid');
    } else {
        setSuccess(expiry);
    }
 
    if(emailValue !== '' && passwordValue !== '' && phoneValue !== '' && password2Value !== '' && firstnameValue !== '' && lastnameValue !== '' && ccnValue !== '' && cvvValue !== '' && expiryValue !== '' && isValidEmail(emailValue) && isValidPhone(phoneValue) && isValidCVV(cvvValue) && isValidExpiry(expiryValue) && isValidCCN(ccnValue) && passwordValue.length >= 8 && password2Value === passwordValue) {
        window.location.href = 'key-page.html';
    }

    
    
};