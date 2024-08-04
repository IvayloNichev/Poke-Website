document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let form = event.target;
  if (form.checkValidity() === false) {
      event.stopPropagation();
      form.classList.add('was-validated');
  } else {
      // Form is valid, display a success message
      alert('Password recovery instructions have been sent to your email!');
      // You can also redirect or perform other actions here
  }
}, false);