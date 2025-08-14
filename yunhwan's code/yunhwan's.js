// Handle contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;

    alert(`Name: ${name}\nEmail: ${email}\nForm submitted successfully.`);
  });
