function calculateTotal() {
  let total = 0;
  const checkboxes = document.querySelectorAll('.form-check-input');
  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          total += parseFloat(checkbox.value);
      }
  });
  document.getElementById('totalSum').innerText = 'Total: $' + total.toFixed(2);
}