const EMAILJS_SERVICE_ID = 'service_xeztb4d';
const EMAILJS_TEMPLATE_ID = 'template_e7kz7fl';

function getFieldValue(id) {
    const element = document.getElementById(id);
    return element ? element.value.trim() : '';
}

function clearFormFields(ids) {
    ids.forEach(function (id) {
        const element = document.getElementById(id);
        if (element) {
            element.value = '';
        }
    });
}

function translateMessage(key, fallback) {
    if (window.i18n && typeof window.i18n.translate === 'function') {
        const lang = window.i18n.getCurrentLang();
        return window.i18n.translate(key, lang);
    }
    return fallback;
}

function sendEmail() {
    const params = {
        name: getFieldValue('name'),
        email: getFieldValue('email'),
        message: getFieldValue('message'),
    };

    if (!params.name || !params.email || !params.message) {
        alert(translateMessage('contact.validation', 'Please fill in all fields'));
        return;
    }

    emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
        .then(function () {
            clearFormFields(['name', 'email', 'message']);
            alert(translateMessage('contact.success', 'Email sent successfully'));
        })
        .catch(function () {
            alert(translateMessage('contact.error', 'Failed to send email. Please try again.'));
        });
}
