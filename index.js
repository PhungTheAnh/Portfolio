function sendEmail() {
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  const serviceId = 'service_xeztb4d';
  const templateId = 'template_e7kz7fl';
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      alert('Send email successfully');
    })
    .catch((err) => console.log(err));
}
