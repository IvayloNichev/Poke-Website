document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let form = event.target;
  if (form.checkValidity() === false) {
      event.stopPropagation();
      form.classList.add('was-validated');
  } else {
      
      alert('Sign up successful!');
      
  }
}, false);